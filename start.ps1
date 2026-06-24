param(
  [int]$Port = 8770
)

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$listener = [System.Net.Sockets.TcpListener]::new(
  [System.Net.IPAddress]::Loopback,
  $Port
)
$listener.Start()

Write-Host "Amazon Ops Lab: http://127.0.0.1:$Port/"
Write-Host "Press Ctrl+C to stop."

$contentTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
}

try {
  while ($true) {
    $client = $listener.AcceptTcpClient()
    $stream = $client.GetStream()
    $reader = [System.IO.StreamReader]::new($stream, [System.Text.Encoding]::ASCII, $false, 1024, $true)
    $requestLine = $reader.ReadLine()
    while ($reader.ReadLine()) { }

    $requestPath = ($requestLine -split " ")[1]
    $relative = [System.Uri]::UnescapeDataString(($requestPath -split "\?")[0]).TrimStart("/")
    if (-not $relative) { $relative = "index.html" }

    $candidate = [System.IO.Path]::GetFullPath((Join-Path $root $relative))
    if (-not $candidate.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase)) {
      $body = [System.Text.Encoding]::UTF8.GetBytes("Forbidden")
      $header = [System.Text.Encoding]::ASCII.GetBytes("HTTP/1.1 403 Forbidden`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n")
      $stream.Write($header, 0, $header.Length)
      $stream.Write($body, 0, $body.Length)
      $client.Close()
      continue
    }

    if (Test-Path -LiteralPath $candidate -PathType Leaf) {
      $bytes = [System.IO.File]::ReadAllBytes($candidate)
      $extension = [System.IO.Path]::GetExtension($candidate).ToLowerInvariant()
      $contentType = $contentTypes[$extension]
      if (-not $contentType) { $contentType = "application/octet-stream" }
      $header = [System.Text.Encoding]::ASCII.GetBytes("HTTP/1.1 200 OK`r`nContent-Type: $contentType`r`nContent-Length: $($bytes.Length)`r`nCache-Control: no-store`r`nConnection: close`r`n`r`n")
      $stream.Write($header, 0, $header.Length)
      $stream.Write($bytes, 0, $bytes.Length)
    } else {
      $body = [System.Text.Encoding]::UTF8.GetBytes("Not Found")
      $header = [System.Text.Encoding]::ASCII.GetBytes("HTTP/1.1 404 Not Found`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n")
      $stream.Write($header, 0, $header.Length)
      $stream.Write($body, 0, $body.Length)
    }
    $stream.Flush()
    $reader.Dispose()
    $client.Close()
  }
} finally {
  $listener.Stop()
}
