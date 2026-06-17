# 发布到 GitHub Pages

这个目录是纯静态网页，可以直接发布到 GitHub Pages。发布后，手机和电脑都可以通过同一个网址访问。

## 方式一：网页上传，最简单

1. 登录 GitHub。
2. 新建一个仓库，例如 `amazon-hit-learning`。
3. 打开仓库页面，点击 `Add file` → `Upload files`。
4. 上传本目录内的这些文件：
   - `index.html`
   - `style.css`
   - `app.js`
   - `README.md`
   - `.nojekyll`
   - `404.html`
5. 进入仓库 `Settings` → `Pages`。
6. `Build and deployment` 选择：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
7. 保存后等待1到3分钟。
8. GitHub会生成网址，格式通常是：

```text
https://你的用户名.github.io/amazon-hit-learning/
```

## 方式二：使用 Git 命令

如果电脑已安装 Git，可以在本目录执行：

```powershell
git init
git add .
git commit -m "Deploy Amazon hit learning tool"
git branch -M main
git remote add origin https://github.com/你的用户名/amazon-hit-learning.git
git push -u origin main
```

然后按方式一的第5步到第8步开启 GitHub Pages。

## 手机访问

发布成功后，把 GitHub Pages 网址发到手机微信、浏览器或备忘录中，手机打开即可使用。

## 关于登录和进度同步

GitHub Pages 只负责托管网页，不提供账号登录、数据库或跨设备同步。本工具的学习进度保存在浏览器本地：

- 电脑上的进度保存在电脑浏览器。
- 手机上的进度保存在手机浏览器。
- 两端可以同时访问同一个网页，但学习进度不会自动同步。

如果后续需要“账号登录 + 手机电脑进度同步”，需要增加后端服务或云数据库，例如 Supabase、Firebase 或 GitHub OAuth + 数据库。
