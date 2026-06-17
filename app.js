const STORAGE_KEY = "amazon-hit-learning-v1";

const modules = [
  lesson(1, "爆款定义与完整经营模型", "能区分短期销量款与可持续核心单品，并讲清爆款形成条件。",
    "亚马逊爆款不是单纯销量高，而是在核心需求下持续获得流量、稳定转化、利润和库存可控，并能沉淀自然排名的核心ASIN。扩展判断还可以观察广告效率、评价资产和售后风险是否进入稳定区间。",
    ["需求真实：目标关键词有稳定搜索需求", "供给有优势：产品、价格或体验至少一项形成差异", "转化闭环：Listing、Review、价格和履约共同降低决策阻力", "经营可持续：广告、利润、库存与售后能够长期承接"],
    ["销量与销售额", "Sessions与Unit Session Percentage", "广告销售占比与TACOS", "自然关键词排名", "贡献利润与库存可售天数"],
    ["先定义目标市场和核心词", "拆解竞品流量、转化与评价门槛", "建立产品—Listing—广告—库存闭环", "按周判断继续、优化或停止"],
    "只看销量或BSR；把大额广告等同于打造爆款；忽略毛利和库存；用短期低价换来的订单判断长期需求。",
    "我理解的爆款不是短期冲高销量，而是一个ASIN在核心关键词下形成稳定曝光和转化，同时广告、利润、评价与库存都能承接。判断是否成功，要看自然排名、转化率、TACOS和贡献利润能否逐步进入稳定区间。",
    "我会把爆款看成一个经营模型。前端是市场需求和关键词，中间是产品、价格、Listing与Review形成转化，后端是广告、库存和利润承接。起盘阶段可以用广告获取数据和订单，但不能长期只靠亏损投放。真正进入稳定期后，核心词自然排名、自然订单占比和评价资产应该持续改善，同时补货节奏和售后风险可控。"),
  lesson(2, "市场容量、趋势与类目判断", "能用需求、竞争、利润和进入难度判断一个品类值不值得做。",
    "市场判断的目的不是证明类目很大，而是找到我方能够进入且有利润的细分需求。",
    ["看核心词及长尾词的搜索趋势和季节性", "看头部集中度、新品进入速度与价格带", "从Review和退货原因寻找未满足需求", "结合成本、认证、物流和供应链判断可进入性"],
    ["Search Query Volume或第三方搜索趋势", "TOP ASIN销量与评论门槛", "主流价格带", "新品榜/BSR变化", "预估净利率"],
    ["建立关键词池并按意图分组", "记录前20竞品的价格、评分、评论量和卖点", "按需求强度×竞争强度×利润空间评分", "输出进入/暂缓/放弃结论"],
    "只看类目总销量；用单日BSR判断市场；看到头部销量高就认为自己也能卖；忽略容量、认证和退货成本。",
    "判断类目值不值得做，我不会只看大盘销量，而会同时看搜索需求、竞争门槛、主流价格带、Review痛点和我们的利润空间，最后找一个能够切入的细分人群或使用场景。",
    "市场分析先回答需求是否真实，再回答竞争是否允许进入。具体会看核心词和长尾词趋势、前排ASIN集中度、新品能否获得位置、成交价格以及Review中的痛点。之后把我方成本、产品差异和供应链能力放进去测算。只有需求、差异和利润三项同时成立，才进入立项。"),
  lesson(3, "关键词研究与搜索需求", "能区分关键词角色，并把词库用于Listing与广告结构。",
    "关键词是买家需求的文字表达，研究关键词的核心是识别搜索意图，而不是堆砌高流量词。",
    ["核心大词承接品类需求", "属性词说明容量、接口、颜色等明确条件", "场景词与痛点词通常更接近真实使用需求", "竞品词用于商品投放或防守，不应硬塞进Listing"],
    ["搜索量/搜索频率排名", "相关性", "广告CTR与CVR", "搜索词订单量", "自然排名"],
    ["收集品牌分析、广告搜索词和竞品词", "按核心、属性、场景、问题和竞品分组", "把高相关词分配到标题、五点、A+和后台词", "通过广告验证词的点击与成交质量"],
    "把搜索量等同于购买意图；标题重复堆词；把低相关大词当核心词；只看广告关键词不看客户搜索词。",
    "关键词研究不是找流量最大的词，而是找到与产品高度相关、能够成交的搜索意图。我会先分核心词、属性词和场景词，再通过广告搜索词报告验证点击率、转化率和订单质量。",
    "我会先建立词库，再做词与页面、广告的分工。核心高相关词进入标题和精准广告；属性及场景词进入五点、A+和词组投放；自动与广泛广告负责拓词。判断一个词是否值得加预算，不只看曝光，还要看CTR、CVR、订单量、ACOS以及是否带动自然排名。"),
  lesson(4, "竞品及Review拆解", "能从竞品表现倒推消费者决策与我方突破口。",
    "竞品拆解不是照抄页面，而是找出对手为什么被点击、为什么成交、为什么被差评。",
    ["选1个直接主竞品、2至3个维度竞品", "拆主图、标题、价格、Coupon、Review和变体结构", "把好评理解为购买理由，把差评理解为产品机会", "区分可复制的表达和必须由产品解决的问题"],
    ["价格与优惠", "评分、评论数与近期评论速度", "主图信息密度", "核心词自然/广告位置", "差评主题及频率"],
    ["建立竞品快照", "按点击、转化、信任、履约四层拆解", "统计高频好评与差评主题", "形成必须追平、可差异化、不可复制清单"],
    "只看头部竞品；把评论多当成唯一壁垒；复制对方文案；忽略近期差评和变体评论相关性。",
    "拆竞品时，我重点看三个问题：它为什么被点击、为什么成交、为什么被差评。主图和价格解释点击，卖点、Review和履约解释转化，差评则告诉我产品和页面可以怎样补位。",
    "我会选择与价格、人群和功能最接近的主竞品，再选择内容、评价或价格单项优秀的参考竞品。拆解时不仅记录表面字段，还把信息归因到点击、转化、信任和履约。最终输出不是抄什么，而是我们必须达到的市场门槛、可以建立的差异点以及不能通过运营掩盖的产品缺陷。"),
  lesson(5, "产品定位、版本与价格结构", "能区分首代产品、改良版本和延伸款的经营角色，而不是只靠低价竞争。",
    "定位是明确产品为谁、在什么场景、解决什么问题，并用价格与变体结构降低选择成本。",
    ["首代产品用于验证需求，但不能带着集中缺陷继续放量", "改良版必须明确解决Review中的核心问题", "组合装或升级款可承担客单与利润角色", "版本和变体关系必须真实且符合平台政策"],
    ["各变体Sessions、CVR与销量占比", "价格弹性", "贡献利润", "Review共享的合规性", "退货原因"],
    ["定义每个容量的目标人群与角色", "测算价格、Coupon和广告后的单件利润", "主图和文案突出共同价值，容量差异清晰", "按变体表现分配库存和广告"],
    "用最低价变体吸引点击但页面选择困难；所有容量用同一广告预算；为合并评论创建不合规变体；只看销售额不看单件利润。",
    "NanoSteamer案例说明，第一代产品与改良版本不能被当成同一个经营问题。先解决Review暴露的产品缺陷，再讨论主推款、组合装和利润款，不能用降价掩盖体验问题。",
    "版本与变体策略的核心是让买家容易选择，同时让运营看清每个SKU的经营角色。NanoSteamer首代暴露产品问题后，改良版必须先证明体验已修复；后续再根据Sessions、CVR、广告效率、利润和库存决定主推款、组合装与升级款的资源分配。"),
  lesson(6, "利润、盈亏平衡ACOS与预算", "能正确计算盈亏平衡ACOS，并理解ACOS与TACOS的分工。",
    "广告是否可接受，必须以贡献利润和阶段目标判断，不能用统一ACOS标准处理所有ASIN。",
    ["单件广告前利润=售价-采购-头程-FBA费-佣金-其他变动成本", "盈亏平衡ACOS=单件广告前利润÷售价", "ACOS=广告花费÷广告销售额", "TACOS=广告花费÷总销售额"],
    ["毛利率/贡献利润率", "ACOS与TACOS", "广告订单占比", "每单广告成本", "退款后的真实利润"],
    ["先确认完整成本口径", "按ASIN和站点计算盈亏平衡线", "起盘允许有计划地高于目标线，但设预算与期限", "每周结合自然订单增长判断投放质量"],
    "把ACOS越低越好；混用币种；忽略退款、Coupon和仓储；用广告销售额代替总销售额计算TACOS。",
    "盈亏平衡ACOS等于广告前单件利润除以售价。实际目标ACOS要低于这条线，为退款、波动和净利润留空间；起盘期可以阶段性放宽，但必须有预算上限和自然排名目标。",
    "我会先按站点核算售价扣除采购、头程、FBA费、佣金及其他变动成本后的广告前利润，再得到盈亏平衡ACOS。执行中不只看ACOS，还看TACOS和自然订单占比。如果ACOS偏高但核心词排名和自然订单改善，可以视为有计划的投入；如果长期高ACOS且自然端没有增长，就不是有效放量。"),
  lesson(7, "Listing内容与转化逻辑", "能从买家决策顺序设计Listing，而不是机械填满模块。",
    "Listing的任务是让正确的买家快速理解产品、确认适配、相信承诺并完成购买。",
    ["主图负责识别和点击，不能依赖违规文字装饰", "标题表达品类、关键属性和兼容信息", "五点按利益点、证据、适配和风险说明组织", "A+用场景、对比和品牌信息完成深度说服"],
    ["CTR", "Unit Session Percentage", "退货率", "问答和客服高频问题", "各变体转化差异"],
    ["用关键词与Review确定信息优先级", "首屏回答是什么、适合谁、核心优势", "明确接口、容量口径、系统兼容和使用限制", "A/B测试主图、标题或A+并保持单变量"],
    "只追求关键词密度；夸大速度或容量；隐藏兼容限制；同时改多个元素导致无法归因。",
    "Listing优化不是把词写满，而是按买家决策顺序消除疑问。对家用美容仪来说，要优先讲使用场景、效果边界、操作步骤、安全提示和清洁维护，减少错误预期和误用。",
    "我会把Listing看成转化漏斗。搜索结果页先用主图、标题、价格和评分赢得点击；详情页再用五点、图片、视频、A+和Review证明价值。NanoSteamer的页面应把产品改良点、使用方法和适用边界讲清楚，并用CTR、CVR、退货原因和咨询问题验证。"),
  lesson(8, "Sponsored Products广告结构", "能建立承担不同任务的广告结构并控制预算。",
    "广告结构的价值是把拓词、验证、收割和防守分开，保证数据可解释、预算可控制。",
    ["自动广告用于发现搜索词和商品机会", "广泛/词组用于扩展相关流量", "精准用于控制已验证的高价值词", "商品投放用于竞品截流、类目拓展和品牌防守"],
    ["Impressions、CTR、CPC", "CVR、Orders", "ACOS与TACOS", "搜索词份额", "预算利用率"],
    ["按站点、ASIN、匹配方式和目标拆分", "给核心词、拓词和商品投放不同预算", "建立搜索词迁移与否定规则", "避免多个活动无目的争抢同一流量"],
    "活动过度碎片化；自动广告无否定；只按ACOS关词；预算集中在断货风险SKU；用同一竞价覆盖所有匹配方式。",
    "我会把广告分成拓词、验证、收割和防守四类。自动和广泛负责发现机会，精准承接已验证搜索词，商品投放负责竞品与类目流量，每类计划用不同预算和判断标准。",
    "广告结构要让每一笔花费都能回答目的。冷启动先用自动、广泛和少量核心精准获取样本；发现有订单的搜索词后迁入精准，原计划做适当否定以减少内部竞争。核心词即使ACOS阶段性偏高，也要结合自然排名判断；低相关、高点击无订单的流量则优先降价、否定或暂停。"),
  lesson(9, "搜索词分析和广告优化", "能基于样本与相关性采取加价、降价、迁词或否定动作。",
    "广告优化的对象是客户真实搜索词，动作应由相关性、样本量、转化和利润共同决定。",
    ["高相关有订单：迁入精准并观察增量", "高相关无订单：先检查样本、价格和Listing承接", "低相关有点击无订单：否定或降低探索成本", "高ACOS核心词：先拆竞价、位置和转化问题，不机械暂停"],
    ["搜索词点击和订单", "CVR与CPA", "ACOS", "Placement表现", "自然排名变化"],
    ["按7至14天和更长窗口分层查看", "设基于目标转化率的无单点击阈值", "每次小幅调整竞价并记录", "将省下预算转移到库存安全的高效流量"],
    "数据不足就频繁调整；只看活动平均值；把target与search term混为一谈；无视归因窗口。",
    "搜索词优化先看相关性，再看数据是否足够，最后看转化和利润。高相关成交词迁精准，低相关消耗词否定；核心词高ACOS时先降低竞价或调整位置，不会直接一刀切暂停。",
    "我通常按搜索词层级分析，而不是只看活动平均ACOS。动作顺序是确认相关性、检查点击样本、判断转化，再结合盈亏线和战略价值处理。对于高相关但无单的词，还要排查价格、Review和Listing是否没有承接；对于低相关词，即使点击便宜，也不应持续浪费预算。"),
  lesson(10, "Vine、评价、退货与合规", "能讲清合规获取评价的方式，并把评价用于产品改进。",
    "评价资产必须通过合规方式积累；运营的重点是获得真实反馈并解决导致差评和退货的根因。",
    ["符合条件时使用Amazon Vine获取诚实评价", "使用Seller Central的Request a Review功能", "不得用返现、礼品、筛选满意用户等方式影响评价", "评价、退货和VoC要形成产品与页面改进清单"],
    ["评分与Review数量", "近期评价速度", "差评主题", "退货率与退货原因", "Voice of the Customer状态"],
    ["上线前排查质量与说明问题", "按规则评估Vine", "统一使用亚马逊允许的评价请求方式", "每周归类差评并明确产品、页面或服务责任"],
    "把售后满意度筛选后再索评；承诺奖励换评价；只追求五星数量；删除或压制真实负面反馈。",
    "亚马逊评价运营首先是合规。可使用Vine和Request a Review获取真实反馈，但不能用奖励或只向满意客户索评。差评的价值在于帮助我们定位产品、页面和履约问题。",
    "评价不是单独的增长技巧，而是信任和产品质量的结果。新品可以在符合条件时使用Vine，订单则通过亚马逊Request a Review统一请求。运营每周应把差评、退货和VoC按产品缺陷、描述不清、兼容误购、物流损坏等归因，并推动页面或供应链修复。"),
  lesson(11, "FBA库存、补货和断货风险", "能把销售速度、到货时间和安全库存放在一个模型中管理。",
    "库存管理是在不断货和不积压之间控制销售速度，爆款放量必须服从可售天数与补货确定性。",
    ["可售天数=FBA可售库存÷预测日销", "库存覆盖需考虑生产、头程、入仓和安全缓冲", "在途库存只有到仓时间可信时才能计入放量", "断货前应优先保护自然排名和核心词，而非全量平均降预算"],
    ["FBA Available", "Inbound与ETA", "预测日销", "可售天数", "库存周转与仓储成本"],
    ["按SKU和站点滚动预测", "设置安全、预警和高风险阈值", "缺货风险时降低低效广告和非核心流量", "到货不确定时准备限流、调价或其他履约方案"],
    "只看总库存不分站点和变体；把在途全部当可售；临近断货仍冲排名；统一削减所有广告伤害核心词。",
    "库存放量先看可售天数和补货ETA。缺货风险出现时，我会优先压缩低效、低相关流量，保留核心词和自然排名保护，避免所有广告统一降预算。",
    "爆款最怕流量起来后断货，因此库存必须进入广告决策。计算时按SKU、站点分别用FBA可售和预测日销得到可售天数，再加入生产、运输、入仓和安全缓冲。若覆盖不足，先停低相关和高消耗流量，再逐步控制非核心广告；核心词是否降速要结合排名和断货日期谨慎处理。"),
  lesson(12, "放量门槛与异常诊断", "能用门槛决定何时加预算，并按漏斗定位异常。",
    "放量不是销量一涨就加预算，而是在产品、转化、利润和库存同时达到最低门槛后扩大有效流量。",
    ["曝光低：检查收录、相关性、竞价和预算", "CTR低：检查主图、标题、价格和评分", "点击高转化低：检查页面、Review、价格、适配和流量质量", "销量增长利润恶化：检查广告依赖、促销和成本"],
    ["CTR与CVR达到自身/类目基准", "核心词有稳定订单", "目标ACOS或可解释投入", "退货和差评无异常", "库存覆盖安全"],
    ["建立放量检查表", "每次增加10%至20%预算或竞价", "观察至少一个合理归因窗口", "异常时回到漏斗层级而非全盘推倒"],
    "一次加倍预算；同时改价格、页面和广告；只看订单不看流量质量；库存不足仍继续放量。",
    "我只会在转化、利润、评价和库存达到基本门槛后放量。放量采用小步增加，并观察新增流量的CTR、CVR、ACOS和自然排名，确保增长来自有效流量。",
    "放量前我会检查五件事：页面转化是否稳定、核心词是否有订单、ACOS是否在计划内、售后是否正常、库存是否能够覆盖。执行时按10%至20%的幅度逐步增加预算或竞价，并按漏斗诊断异常。曝光、点击、转化和利润分别对应不同问题，不能用统一降价或停广告解决。"),
  lesson(13, "NanoSteamer经典案例复盘", "能从首代失败、Review归因、产品改良到二代放大完整复盘爆款形成过程。",
    "NanoSteamer案例的价值不在于复制某个广告技巧，而在于展示如何把失败产品的真实用户反馈转成可持续产品竞争力。",
    ["第一代家用面部蒸脸器因产品问题和差评未获成功", "团队选择清理首代库存，而不是继续用广告掩盖问题", "团队利用Amazon客户评价改进产品，推出明显改善的第二代", "NanoSteamer后来成为长期畅销产品，并支撑Pure Daily Care扩展"],
    ["差评主题与频率", "改款前后评分和退货变化", "Listing转化", "核心词自然排名", "广告依赖与贡献利润"],
    ["把差评分成产品、说明、预期和履约问题", "定义必须由产品解决的缺陷", "改款后用小批量重新验证转化与售后", "达到门槛后再扩大广告、库存和产品线"],
    "把首代失败全部归因于广告；删除或忽视差评；只改Listing不改产品；二代未验证就大量备货；把品牌后来的规模全部归因于单一产品。",
    "NanoSteamer首代失败的核心不是流量不足，而是产品体验导致差评。团队没有继续放大，而是清理库存、利用Review改良产品，再推出第二代。这个案例说明，运营不能掩盖产品问题，Review应该进入产品迭代。",
    "完整复盘可以分四步。第一，识别首代失败属于产品与体验问题，而不只是曝光问题；第二，把差评转成可执行的改款清单；第三，第二代重新上市后，小规模验证评分、转化、退货和关键词表现；第四，在模型成立后扩大广告和库存，并将成功能力复制到品牌产品线。公开资料未披露具体ACOS、库存和改款字段，因此这些数字不能虚构。"),
  lesson(14, "模拟专业交流与综合考核", "能在不同对象面前用结论、证据和边界清楚表达。",
    "专业表达不是堆术语，而是在有限时间内给出可验证的判断、行动和风险边界。",
    ["先回答结论，再给2至3个关键证据", "明确下一步动作、负责人或观察周期", "主动说明风险和缺失数据", "区分事实、判断和建议"],
    ["表达结构完整度", "数据准确性", "亚马逊术语准确性", "行动可执行性", "风险边界"],
    ["30秒回答核心观点", "2分钟补充逻辑和例子", "接受追问时回到数据和假设", "结束时给出下一次复盘节点"],
    "先讲大量背景；为了自信给出没有依据的数字；被追问时不断换话题；只有建议没有验收指标。",
    "我的观点是先判断是否值得打，再验证能否转化，最后才放量。每一步都要有数据门槛，尤其是利润和库存，不能只看销量。具体动作会明确观察周期和复盘标准。",
    "在讨论一个ASIN是否具备爆款潜力时，我会先给结论，再说明依据来自市场需求、产品差异、转化表现、广告效率和库存利润。若数据不足，我会明确哪些是事实、哪些是假设。建议必须落到动作、指标和时间，例如未来7天验证哪些词、目标CVR和预算上限，复盘后决定放量、优化还是停止。")
];

const flashCards = buildFlashCards([
  card(1, "什么是可持续爆款？", "在核心需求下持续获得流量与稳定转化，广告、利润、评价和库存均可承接，并逐步沉淀自然排名的核心ASIN。",
    ["核心需求", "持续流量", "稳定转化", "利润可控", "库存可控", "自然排名", "核心ASIN"]),
  card(1, "判断爆款不能只看什么？", "不能只看销量或BSR，还要看自然排名、转化、TACOS、贡献利润、评价和库存。"),
  card(2, "判断一个品类是否值得进入，要看哪四个核心维度？", "需求强度、竞争门槛、利润空间、我方进入能力。"),
  card(2, "为什么类目销量高不等于值得进入？", "销量高可能同时伴随头部垄断、价格战、Review门槛高或利润不足，必须寻找我方可进入的细分需求。"),
  card(3, "做关键词研究时，最核心的目标是什么？", "识别买家搜索意图，并判断哪些词与产品高度相关且能够成交，而不是只找搜索量最大的词。"),
  card(3, "亚马逊关键词通常可以分成哪四种角色？", "核心词、属性词、场景词、竞品词。"),
  card(4, "拆解竞品时，最需要回答哪三个问题？", "竞品为什么被点击、为什么成交、为什么被差评。"),
  card(4, "竞品Review如何使用？", "好评提炼购买理由，差评识别产品和页面机会，近期Review用于判断当前真实体验。"),
  card(5, "经营多个版本或变体时，为什么要区分各自角色？", "不同变体可能分别承担引流、主推和利润任务，需要独立看转化、利润、广告和库存。"),
  card(5, "产品问题能否用降价和广告解决？", "不能。若差评来自质量、功能或体验缺陷，必须先改产品；降价和广告只会放大负面反馈。"),
  card(6, "ACOS怎样计算，它反映什么？", "ACOS = 广告花费 ÷ 广告销售额。它衡量广告归因销售的效率。"),
  card(6, "TACOS怎样计算，它反映什么？", "TACOS = 广告花费 ÷ 总销售额。它更适合观察广告投入与整体业务、自然订单之间的关系。"),
  card(6, "盈亏平衡ACOS怎样计算？", "盈亏平衡ACOS = 广告前单件利润 ÷ 售价。实际目标通常需要低于该线。"),
  card(7, "Unit Session Percentage怎样计算，它能说明什么？", "订购商品数量 ÷ Sessions，可作为Listing整体转化效率的重要参考。"),
  card(7, "广告曝光充足但CTR偏低时，应优先排查什么？", "主图、标题、价格、Coupon、评分以及流量相关性。"),
  card(8, "亚马逊广告通常承担哪四类任务？", "拓词、验证、收割、防守。不同任务应使用不同结构、预算和判断标准。"),
  card(8, "自动广告在新品运营中的主要作用是什么？", "发现客户搜索词和商品机会，而不是长期无人管理地消耗预算。"),
  card(9, "客户搜索词和广告投放词有什么区别？", "投放词是卖家设置的target；搜索词是买家真实输入或触发广告的查询。"),
  card(9, "高相关核心词ACOS偏高怎么办？", "先检查竞价、广告位、CPC和Listing转化；可小幅降价或拆分，不应直接暂停。"),
  card(10, "新品阶段可以通过哪些合规方式积累评价？", "符合条件时使用Amazon Vine和Request a Review；不得用奖励、返现或筛选满意用户影响评价。"),
  card(10, "差评和退货数据可以帮助运营判断什么？", "帮助区分产品缺陷、描述不清、兼容误购、包装或履约问题，并推动修复。"),
  card(11, "FBA可售天数怎样计算？", "可售天数 = FBA可售库存 ÷ 预测日销。在途库存需结合可靠ETA单独评估。"),
  card(11, "出现缺货风险时，广告应该遵循什么处理原则？", "优先削减低相关、低效率流量，谨慎保护核心词和自然排名。"),
  card(12, "一个ASIN满足哪五项门槛后才适合放量？", "转化稳定、核心词有订单、广告投入可解释、售后无异常、库存覆盖安全。"),
  card(12, "广告点击较高但转化偏低时，应优先排查什么？", "搜索意图、价格、Review、Listing说服力、兼容和规格说明。"),
  card(13, "NanoSteamer首代失败后，团队采取了什么关键动作？", "清理问题产品库存，并使用客户Review反推产品改良，而不是继续增加广告。"),
  card(13, "NanoSteamer从失败到畅销形成了怎样的运营闭环？", "差评归因、产品改良、小规模重测、指标达标后放大、复制到品牌产品线。"),
  card(14, "专业汇报可以使用哪五个表达步骤？", "结论、依据、动作、风险、复盘。"),
  card(14, "面对追问时，怎样避免越说越乱？", "先区分事实、判断和建议；缺少数据时明确边界，再给出下一步验证方法。")
]);

const speakingQuestions = [
  speak("同行交流", "基础", "你怎么定义亚马逊爆款？", 1,
    "我认为亚马逊爆款不是短期销量高，而是一个ASIN在核心关键词下能够持续获得曝光和订单，同时转化、利润、评价与库存都能稳定承接。",
    "展开时我会从五个方面判断：市场需求是否真实、产品是否有竞争力、Listing能否稳定转化、广告能否带动自然排名、利润和库存能否支持持续销售。只有这些环节形成闭环，才算可持续核心单品。"),
  speak("领导追问", "基础", "为什么这个产品值得投入资源打造爆款？", 2,
    "我会先证明它同时具备需求、差异和利润，而不是因为竞品卖得好就建议投入。具体要看搜索需求、竞争门槛、用户痛点、我方产品优势和利润空间。",
    "汇报时我会给出核心词趋势、主流价格带、头部集中度、竞品Review缺口和单件利润测算。如果需求稳定、痛点可解决、我方供应链能承接，并且投入后的回收路径清楚，我才建议立项；否则先小规模验证。"),
  speak("同行交流", "进阶", "你会怎样做亚马逊关键词研究，并把结果用于Listing和广告？", 3,
    "我会先按核心词、属性词、场景词和竞品词建立词库，再根据相关性和购买意图分配到Listing与不同广告结构中，并用搜索词报告持续验证。",
    "核心高相关词进入标题和精准广告；属性及场景词进入五点、A+和词组投放；自动与广泛负责拓词。后续根据CTR、CVR、订单、ACOS和自然排名，把有效搜索词迁入精准，把低相关消耗词否定。"),
  speak("跨部门协作", "进阶", "你希望产品和设计同事如何配合竞品及Review拆解？", 4,
    "我会把竞品信息拆成产品问题和表达问题：产品同事判断哪些痛点能通过材质、规格或包装解决，设计同事负责把已确认的优势转成主图和A+中的清晰证据。",
    "运营先整理竞品的点击因素、购买理由和高频差评，再形成三张清单：必须追平的市场门槛、可建立的差异点、不可通过页面掩盖的产品缺陷。产品、设计和运营分别确认解决方案、素材需求和验证指标。"),
  speak("领导追问", "进阶", "为什么不能只看ACOS判断广告好坏？", 6,
    "因为ACOS只反映广告归因销售效率，不代表整体利润和自然增长。判断广告还要结合盈亏平衡ACOS、TACOS、自然订单占比、关键词排名和阶段目标。",
    "新品起盘时，部分核心词ACOS可能较高，但如果自然排名和自然订单正在改善，这笔投入可能有战略价值。反过来，ACOS很低也可能只是品牌词收割，没有带来增量。因此我会同时看利润边界、TACOS趋势和自然端变化。"),
  speak("同行交流", "进阶", "自动、广泛、词组和精准广告分别承担什么任务？", 8,
    "自动广告负责发现搜索词和商品机会，广泛负责扩展流量，词组控制搜索意图范围，精准承接已经验证的高价值词。",
    "我会把它们放在拓词、验证和收割的流程中管理。自动和广泛获得样本，词组验证某一需求方向，精准负责稳定控制；有订单的搜索词迁入精准，低相关消耗词做否定，避免不同活动无目的争抢流量。"),
  speak("领导追问", "高频", "核心词ACOS很高，你为什么不直接暂停？", 9,
    "核心词除了直接订单，还承担自然排名和品类入口价值，所以不能只凭短期ACOS直接暂停。我会先判断相关性、样本量、竞价、广告位和Listing转化。",
    "如果词高度相关并能带来订单，我会优先小幅降竞价、调整Placement或单独拆组，同时观察自然排名和TACOS；如果点击样本充分却持续不转化，再排查价格、Review和页面承接。只有确认没有战略价值或无法改善时才暂停。"),
  speak("跨部门协作", "高频", "Listing转化率低，你如何判断是页面问题还是产品问题？", 7,
    "我会先按流量质量、页面表达和产品体验三层排查，不能看到转化低就直接让设计改图。",
    "先确认进入页面的搜索词是否相关；再看价格、评分、主图、五点和兼容说明是否达到竞品门槛；最后结合差评、退货原因和客服问题判断产品本身。页面信息缺失或表达不清属于页面问题，质量、功能和真实体验无法满足需求则必须回到产品端解决。"),
  speak("领导追问", "高频", "销量正在增长但库存可能断货，你准备怎么处理？", 11,
    "我会先计算各SKU可售天数和可靠补货ETA，然后分层控制流量：优先削减低相关、低效率广告，谨慎保护核心词和自然排名。",
    "同时确认生产、运输和入仓时间，按断货风险决定降竞价、控预算、调价或暂停活动。不能所有广告统一收缩，也不能为了排名继续全量放量。到货计划变化后，每3至7天重算允许日销和广告上限。"),
  speak("同行交流", "合规", "新品阶段你会怎样积累Review？", 10,
    "新品评价积累首先要合规。我会在符合条件时使用Amazon Vine，并通过Seller Central的Request a Review请求真实评价，同时优先解决质量和使用说明问题。",
    "我不会使用返现、赠品换评价或只向满意客户索评。运营上会把Vine、Review、退货和VoC反馈按产品缺陷、描述不清、兼容误购和物流损坏归因，再推动产品、页面或包装改进。"),
  speak("领导追问", "进阶", "满足什么条件，你才会给一个ASIN增加广告预算？", 12,
    "我只会在转化稳定、核心词有订单、投入在计划内、售后无异常且库存能够覆盖时增加预算。",
    "放量前检查页面CVR、关键词订单、目标ACOS或可解释的排名投入、退货差评和库存可售天数。执行时按10%至20%小步增加，并观察新增流量的CTR、CVR、ACOS、TACOS和自然排名，避免一次翻倍导致失控。"),
  speak("领导追问", "实战", "请用两分钟复盘NanoSteamer为什么能从首代失败走向畅销。", 13,
    "NanoSteamer首代失败的核心是产品问题和差评，而不是简单缺流量。团队及时清理问题库存，并用Amazon Review反推产品改良，第二代重新验证后才逐步成为长期畅销品。",
    "这个过程可以拆成失败归因、产品改良、重新验证和规模放大四步。关键经验是运营不能用广告掩盖产品缺陷，差评要进入产品路线图；改款后先验证评分、转化、退货和关键词表现，再增加广告与库存。公开资料没有披露具体ACOS和库存数字，汇报时要说明边界。"),
  speak("同行交流", "实战", "NanoSteamer案例对新品运营最大的启示是什么？", 5,
    "最大的启示是先解决产品价值，再放大流量。首代差评说明产品体验没有过关，继续投广告只会加速失败。",
    "新品测试要提前设置淘汰和改款机制。出现集中差评时，先区分产品缺陷、说明不清和误用；产品问题由供应链修复，表达问题由Listing修复。改款后重新小批量测试，达到转化、评价、退货和利润门槛后再放量。"),
  speak("跨部门协作", "实战", "如何向供应链解释为什么广告策略需要补货ETA？", 11,
    "广告决定销售速度，而补货ETA决定我们能承受多快的销售速度。没有可靠ETA，就无法判断应该放量还是控速，也无法保护排名和避免断货。",
    "我会把生产、头程、入仓和安全缓冲拆开，用FBA可售库存除以预测日销计算可售天数，再与ETA比较。供应链每次更新到货时间，运营就重算允许日销和预算；这样广告与补货使用同一套风险判断。"),
  speak("领导追问", "复盘", "一个爆款项目失败，你会从哪些层面归因？", 12,
    "我会从市场判断、产品竞争力、流量、转化、利润、库存履约和执行节奏七个层面归因，并先区分是方向错误还是执行不到位。",
    "先看需求和关键词是否判断错误，再看产品、价格和Review门槛是否有竞争力；随后按曝光、点击、转化拆广告和Listing；最后检查利润、退款、库存、补货及执行是否按节点完成。每个结论都要有数据证据，并输出可修复问题、不可修复问题和下一轮停止或重测条件。"),
  speak("同行交流", "专业", "短期销量款和可持续核心单品有什么区别？", 1,
    "短期销量款可能依赖低价、活动或高额广告获得订单；可持续核心单品则能沉淀自然排名、稳定转化和评价，并在利润与库存可控的情况下持续销售。",
    "我会比较两者的自然订单占比、TACOS、核心词排名、贡献利润、复购或关联价值、退货率和库存周转。如果活动结束或广告收缩后销量立即消失，它更像阶段性销量款；如果自然端能够承接并形成可复制模型，才是核心单品。")
];

const quizQuestions = [
  quiz("判断一个ASIN是否成为可持续爆款，以下哪组指标最完整？",
    ["销量、BSR、广告曝光", "销量、自然排名、转化、TACOS、利润和库存", "Review数量、主图数量、广告活动数", "销售额、Coupon和CPC"], 1,
    "可持续爆款必须同时看增长、自然流量、转化、整体广告依赖、利润和履约。", 1),
  quiz("某产品售价100美元，广告前单件利润为25美元，盈亏平衡ACOS是多少？",
    ["15%", "20%", "25%", "40%"], 2, "25÷100=25%。实际目标还要为退款和净利润留空间。", 6),
  quiz("以下哪种评价运营方式符合计划中的合规原则？",
    ["给好评客户返现", "先询问满意度，只向满意客户索评", "使用Vine和Request a Review", "包裹卡承诺礼品换五星"], 2,
    "Vine和亚马逊提供的Request a Review是合规路径；不得操纵或奖励评价。", 10),
  quiz("广告搜索词高相关、已有多单且ACOS可接受，优先动作是什么？",
    ["立即否定", "迁入精准并继续观察", "降低Listing价格", "暂停原ASIN"], 1,
    "已验证的高价值搜索词应迁入精准结构，并管理原计划中的重复流量。", 9),
  quiz("曝光充足但CTR明显偏低，最应先检查哪一层？",
    ["主图、标题、价格与流量相关性", "FBA长期仓储费", "采购MOQ", "退款到账周期"], 0,
    "CTR对应搜索结果页吸引力和流量相关性。", 12),
  quiz("NanoSteamer公开案例中，首代失败后最关键的转折动作是什么？",
    ["继续加大广告", "通过低价清库存后放弃品类", "利用客户Review改良产品并推出第二代", "只更换主图和标题"], 2,
    "公开报道显示，团队清理首代问题产品，并使用Amazon客户评价打造明显改良的第二代。", 13),
  quiz("库存紧张时，合理的广告处理方式是？",
    ["所有活动预算统一减半", "只保留低相关便宜流量", "优先削减低效流量并谨慎保护核心词", "继续全量冲排名直到断货"], 2,
    "库存控制要分流量价值，不能统一收缩并伤害核心排名。", 11),
  quiz("TACOS下降且总销售增长，通常更可能说明什么？",
    ["CPC一定上涨", "自然销售承接可能改善", "Review一定减少", "库存一定不足"], 1,
    "TACOS衡量广告花费占总销售额比例，下降并伴随增长通常意味着整体广告依赖改善，但仍需结合更多数据确认。", 6),
  quiz("竞品拆解的正确目标是？",
    ["复制竞品文案", "找到对手成交原因、市场门槛和突破口", "只记录销量最高的ASIN", "只比较价格"], 1,
    "竞品拆解最终要输出必须追平的门槛、差异机会和产品风险。", 4),
  quiz("放量时更稳妥的做法是？",
    ["预算一次翻倍", "同时更换主图、降价、加预算", "按10%至20%小步增加并观察归因窗口", "忽略库存先抢排名"], 2,
    "小步放量可降低波动，并保留对结果的归因能力。", 12),
  fillQuiz("ACOS = ______ ÷ ______。", ["广告花费", "广告销售额"],
    "ACOS = 广告花费 ÷ 广告销售额。", "两个核心字段都需要填写正确。", 6),
  fillQuiz("TACOS = ______ ÷ ______。", ["广告花费", "总销售额"],
    "TACOS = 广告花费 ÷ 总销售额。", "TACOS的分母是全部销售额，而不是广告销售额。", 6),
  fillQuiz("可售天数 = ______ ÷ ______。", ["FBA可售库存", "预测日销"],
    "可售天数 = FBA可售库存 ÷ 预测日销。", "在途库存应结合可靠ETA单独评估。", 11),
  fillQuiz("专业表达五步法是：结论、______、动作、______、复盘。", ["依据", "风险"],
    "结论、依据、动作、风险、复盘。", "先给判断，再说明证据、动作和边界。", 14),
  essayQuiz("为什么类目销量很高，仍然可能不值得进入？",
    "类目销量高只代表市场有需求，不代表我方有进入机会。还要检查头部集中度、Review门槛、价格战、产品差异、利润空间和供应链能力；如果竞争已固化或利润无法覆盖投放与售后，就不应仅凭销量立项。",
    "建议同时覆盖需求、竞争、利润和进入能力。", 2),
  essayQuiz("请说明核心词ACOS偏高时，你会怎样分析和处理。",
    "我会先确认关键词相关性和数据量，再检查CPC、竞价、广告位、Listing转化和自然排名。高相关且能带来订单的核心词可小幅降竞价或拆分观察，不直接暂停；若充分点击后仍不转化，则排查价格、Review和页面承接，并设置停止条件。",
    "回答应包含判断顺序、优化动作和暂停边界。", 9),
  essayQuiz("库存可能断货时，广告与补货应该怎样联动？",
    "先按SKU和站点计算FBA可售天数，并与生产、运输、入仓和安全缓冲后的可靠ETA比较。广告端优先削减低相关低效率流量，谨慎保护核心词；供应链更新ETA后，运营重新计算允许日销、预算和活动节奏。",
    "回答应同时包含库存计算、广告分层和ETA复盘。", 11),
  essayQuiz("一个爆款项目失败，你会如何进行归因？",
    "我会从市场判断、产品竞争力、流量、转化、利润、库存履约和执行节奏七个层面归因。先区分方向错误还是执行不到位，再用曝光、点击、转化、广告、退款、利润和库存数据找到证据，最后输出可修复问题、不可修复问题以及重测或停止条件。",
    "回答应体现分层归因、数据证据和后续决策。", 14)
];

const caseMetrics = [
  ["首代产品", "上市失败", "差评暴露多类产品问题", "没有把流量不足误判为唯一原因"],
  ["止损动作", "清理库存", "停止持续放大问题产品", "为改款释放资金与注意力"],
  ["核心输入", "客户Review", "从真实反馈提炼改良方向", "把评价变成产品需求清单"],
  ["第二代", "明显改良", "重新建立产品价值和用户体验", "先修产品，再谈流量放大"],
  ["长期结果", "持续畅销", "报道称NanoSteamer自2020年以来保持畅销", "形成可持续核心单品"],
  ["品牌放大", "扩展产品线", "Pure Daily Care持续扩充美容健康产品", "单品能力沉淀为品牌能力"]
];

let state = loadState();
let currentModule = Math.min(Math.max(state.currentModule || 1, 1), 14);
let currentCard = 0;
let cardRevealed = false;
let currentSpeak = speakingQuestions[0];
let currentQuiz = 0;
let selectedQuizOption = null;
let timerSeconds = 120;
let timerId = null;
let recorder = null;
let audioChunks = [];

const $ = (id) => document.getElementById(id);

function lesson(day, title, goal, definition, logic, metrics, actions, mistakes, shortSpeech, longSpeech) {
  return { day, title, goal, definition, logic, metrics, actions, mistakes, shortSpeech, longSpeech };
}
function card(module, front, back, requiredConcepts = []) {
  return { module, front, back, requiredConcepts };
}
function buildFlashCards(seedCards) {
  return modules.flatMap(moduleItem => explicitLessonCards(moduleItem));
}
function explicitLessonCards(moduleItem) {
  const q = {
    1: [
      ["为什么短期销量高不等于打造出了可持续爆款？", moduleItem.definition,
        ["非单纯销量高", "核心需求", "持续流量", "稳定转化", "利润可控", "库存可控", "自然排名", "核心ASIN"]],
      ["判断一个ASIN是否可持续，应同时检查哪些经营结果？", moduleItem.metrics.join("；")],
      ["打造爆款时，市场需求、产品、转化和经营承接分别要满足什么条件？", moduleItem.logic.join("；")],
      ["正式投入资源前，应该先完成哪四个步骤？", moduleItem.actions.join("；")],
      ["打造爆款时最容易出现哪些错误判断？", moduleItem.mistakes],
      ["如果领导问“什么是亚马逊爆款”，你会怎样回答？", moduleItem.shortSpeech],
      ["为什么广告投入不能被当成爆款成功的唯一标准？", "广告只能帮助获取流量和数据，是否成功还要看转化、自然排名、利润、评价和库存能否持续承接。"],
      ["一个新品从立项到成为核心单品，需要形成怎样的闭环？", "市场和关键词判断、竞品拆解、产品与Listing建设、广告验证、库存利润承接、复盘迭代。"]
    ],
    2: [
      ["判断一个类目是否值得进入，要综合看哪四个维度？", "需求强度、竞争门槛、利润空间和我方进入能力。"],
      ["分析市场需求时，为什么要同时看核心词、长尾词和季节性？", moduleItem.logic[0]],
      ["如何判断一个类目的竞争格局是否允许新品进入？", moduleItem.logic[1]],
      ["竞品Review和退货原因能帮助我们发现什么？", moduleItem.logic[2]],
      ["为什么还要把认证、物流和供应链能力放进类目判断？", moduleItem.logic[3]],
      ["完成类目分析后，应该输出什么明确结论？", moduleItem.actions[3]],
      ["为什么不能看到类目销量高就立即立项？", moduleItem.mistakes],
      ["如何向领导简要说明一个类目值不值得做？", moduleItem.shortSpeech]
    ],
    3: [
      ["关键词研究的核心目的是什么？", moduleItem.definition],
      ["核心词、属性词、场景词和竞品词分别代表什么需求？", moduleItem.logic.join("；")],
      ["判断一个关键词是否值得投放，要看哪些数据？", moduleItem.metrics.join("；")],
      ["建立亚马逊关键词库时，应该按什么步骤进行？", moduleItem.actions.join("；")],
      ["为什么搜索量最大的词不一定是最值得投放的词？", moduleItem.mistakes],
      ["高相关核心词应该怎样分配到Listing和广告中？", "核心高相关词进入标题和精准广告，并通过点击、转化、订单与自然排名持续验证。"],
      ["自动广告和广泛广告在关键词研究中承担什么任务？", "负责发现新的客户搜索词和需求方向，再把有效词迁入更可控的广告结构。"],
      ["如何用30秒讲清关键词研究方法？", moduleItem.shortSpeech]
    ],
    4: [
      ["竞品拆解最需要回答哪三个问题？", "竞品为什么被点击、为什么成交、为什么被差评。"],
      ["为什么要同时选择主竞品和维度竞品？", moduleItem.logic[0]],
      ["拆解竞品时应重点比较哪些内容？", moduleItem.logic[1]],
      ["竞品好评和差评分别能给运营什么信息？", moduleItem.logic[2]],
      ["哪些竞品优势可以学习，哪些问题必须由产品解决？", moduleItem.logic[3]],
      ["竞品拆解常用哪些指标和信息？", moduleItem.metrics.join("；")],
      ["竞品拆解最后应该形成哪三张清单？", "必须追平的市场门槛、可以建立的差异点、不能通过运营掩盖的产品缺陷。"],
      ["为什么竞品拆解不能变成照抄文案？", moduleItem.mistakes]
    ],
    5: [
      ["产品定位需要明确哪几个问题？", moduleItem.definition],
      ["首代产品出现集中差评后，为什么不能继续放量？", moduleItem.logic[0]],
      ["改良版本重新上市前，最重要的验证是什么？", moduleItem.logic[1]],
      ["组合装或升级款在产品结构中通常承担什么角色？", moduleItem.logic[2]],
      ["为什么不能为了共享Review创建不合规变体？", moduleItem.logic[3]],
      ["判断不同版本或变体表现，要看哪些数据？", moduleItem.metrics.join("；")],
      ["如何确定主推款、引流款和利润款？", moduleItem.actions.join("；")],
      ["产品问题为什么不能只靠降价和广告解决？", moduleItem.mistakes]
    ],
    6: [
      ["广告前单件利润应该怎样计算？", moduleItem.logic[0]],
      ["盈亏平衡ACOS应该怎样计算？", moduleItem.logic[1]],
      ["ACOS和TACOS分别反映什么？", `${moduleItem.logic[2]}；${moduleItem.logic[3]}`],
      ["制定目标ACOS前，为什么必须先确认完整成本？", moduleItem.actions[0]],
      ["新品起盘期ACOS高于平时目标时，怎样判断是否可接受？", moduleItem.actions[2]],
      ["为什么ACOS不是越低越好？", moduleItem.mistakes],
      ["判断广告是否真正带动业务增长，还要观察哪些数据？", moduleItem.metrics.join("；")],
      ["如何向领导解释盈亏平衡ACOS？", moduleItem.shortSpeech]
    ],
    7: [
      ["Listing的核心任务是什么？", moduleItem.definition],
      ["主图、标题、五点和A+分别承担什么任务？", moduleItem.logic.join("；")],
      ["判断Listing优化是否有效，要看哪些结果？", moduleItem.metrics.join("；")],
      ["优化Listing时，信息优先级应该从哪里来？", moduleItem.actions[0]],
      ["家用美容仪Listing需要重点说明哪些信息？", moduleItem.shortSpeech],
      ["为什么产品限制和使用条件也要写清楚？", "减少错误预期、误购、误用、差评和退货。"],
      ["为什么A/B测试应该尽量保持单变量？", moduleItem.actions[3]],
      ["Listing优化最常见的错误有哪些？", moduleItem.mistakes]
    ],
    8: [
      ["为什么要把拓词、验证、收割和防守广告分开？", moduleItem.definition],
      ["自动广告主要承担什么任务？", moduleItem.logic[0]],
      ["广泛和词组匹配分别适合什么阶段？", moduleItem.logic[1]],
      ["精准广告适合承接什么样的关键词？", moduleItem.logic[2]],
      ["商品投放可以实现哪些目标？", moduleItem.logic[3]],
      ["评价一个广告结构要看哪些数据？", moduleItem.metrics.join("；")],
      ["发现有效搜索词后应该如何迁移和否定？", moduleItem.actions[2]],
      ["广告结构最常见的管理问题有哪些？", moduleItem.mistakes]
    ],
    9: [
      ["广告优化为什么要回到客户真实搜索词？", moduleItem.definition],
      ["高相关且有订单的搜索词应该怎样处理？", moduleItem.logic[0]],
      ["高相关但没有订单的搜索词应该先检查什么？", moduleItem.logic[1]],
      ["低相关且有消耗的搜索词应该怎样处理？", moduleItem.logic[2]],
      ["核心词ACOS偏高时，为什么不能直接暂停？", moduleItem.logic[3]],
      ["搜索词优化需要同时看哪些数据？", moduleItem.metrics.join("；")],
      ["为什么不能在数据不足时频繁调竞价？", moduleItem.mistakes],
      ["如何简要说明搜索词优化的判断顺序？", moduleItem.shortSpeech]
    ],
    10: [
      ["亚马逊评价运营的首要原则是什么？", moduleItem.definition],
      ["新品可以通过哪些合规方式积累真实评价？", `${moduleItem.logic[0]}；${moduleItem.logic[1]}`],
      ["哪些索评方式会触碰合规风险？", moduleItem.logic[2]],
      ["为什么Review、退货和VoC需要一起分析？", moduleItem.logic[3]],
      ["评价运营应该重点监控哪些指标？", moduleItem.metrics.join("；")],
      ["如何把差评转成产品和页面改进任务？", moduleItem.actions[3]],
      ["为什么不能只追求五星评价数量？", moduleItem.mistakes],
      ["如何向同事说明新品评价积累方法？", moduleItem.shortSpeech]
    ],
    11: [
      ["可售天数应该怎样计算？", moduleItem.logic[0]],
      ["计算库存覆盖时，需要考虑哪些时间？", moduleItem.logic[1]],
      ["为什么不能把全部在途库存直接当成可售库存？", moduleItem.logic[2]],
      ["断货风险出现时，广告应该怎样分层处理？", moduleItem.logic[3]],
      ["库存管理每天或每周要关注哪些数据？", moduleItem.metrics.join("；")],
      ["如何建立安全、预警和高风险库存阈值？", moduleItem.actions[1]],
      ["为什么广告策略必须使用可靠的补货ETA？", moduleItem.shortSpeech],
      ["库存管理最常见的错误有哪些？", moduleItem.mistakes]
    ],
    12: [
      ["什么条件满足后，才适合给ASIN放量？", moduleItem.definition],
      ["曝光不足时，应该优先排查什么？", moduleItem.logic[0]],
      ["CTR偏低时，应该优先排查什么？", moduleItem.logic[1]],
      ["点击高但转化低时，应该优先排查什么？", moduleItem.logic[2]],
      ["销量增长但利润恶化时，应该检查什么？", moduleItem.logic[3]],
      ["放量前需要检查哪些门槛？", moduleItem.metrics.join("；")],
      ["为什么预算或竞价应该小步增加？", moduleItem.actions[1]],
      ["放量时最容易犯哪些错误？", moduleItem.mistakes]
    ],
    13: [
      ["NanoSteamer首代失败的核心原因是什么？", moduleItem.logic[0]],
      ["首代产品失败后，团队为什么选择清理库存？", moduleItem.logic[1]],
      ["Amazon Review在NanoSteamer改款中发挥了什么作用？", moduleItem.logic[2]],
      ["第二代产品成功后，品牌如何继续放大？", moduleItem.logic[3]],
      ["复盘产品改款效果时，应该看哪些指标？", moduleItem.metrics.join("；")],
      ["从差评到第二代重新上市，应该经过哪些步骤？", moduleItem.actions.join("；")],
      ["NanoSteamer案例最需要避免哪些错误理解？", moduleItem.mistakes],
      ["如何用30秒复盘NanoSteamer案例？", moduleItem.shortSpeech]
    ],
    14: [
      ["专业表达为什么要先讲结论？", moduleItem.definition],
      ["给出结论后，应该补充哪些证据？", moduleItem.logic[0]],
      ["建议中为什么要明确动作和观察周期？", moduleItem.logic[1]],
      ["数据不完整时，应该怎样表达风险边界？", moduleItem.logic[2]],
      ["怎样区分事实、判断和建议？", moduleItem.logic[3]],
      ["评价一次运营表达是否专业，要看哪些维度？", moduleItem.metrics.join("；")],
      ["被追问时怎样避免越说越乱？", moduleItem.actions.join("；")],
      ["专业沟通最常见的问题有哪些？", moduleItem.mistakes]
    ]
  };
  const extra = {
    1: [
      ["如果销量增长但TACOS、退款率和断货风险同时上升，这算成功爆款吗？为什么？", "不能直接算成功。销量增长若依赖更高广告投入，并伴随售后与库存风险，说明经营模型尚未稳定。"],
      ["判断爆款是否进入稳定期，自然流量应该出现什么变化？", "核心词自然排名和自然订单占比应逐步改善，对付费流量的绝对依赖应下降。"]
    ],
    2: [
      ["头部商品销量很高但新品很少进入前排，说明什么风险？", "可能存在较高的头部集中度、Review壁垒或品牌壁垒，新品进入成本较高。"],
      ["类目需求存在，但利润只能依靠平台活动补贴时应该怎样决策？", "应谨慎或暂缓进入，先验证常态价格下是否能覆盖成本、广告、退款和目标利润。"]
    ],
    3: [
      ["客户搜索词有订单后，应该怎样沉淀到广告结构中？", "将高相关成交词迁入精准投放，并管理原活动中的重复流量和否定关系。"],
      ["关键词点击很多却没有订单，可能有哪些原因？", "搜索意图不匹配、价格或Review缺乏竞争力、Listing承接不足，或点击样本仍不充分。"]
    ],
    4: [
      ["竞品主图点击力强，但近期差评集中，这给我方什么机会？", "先追平搜索结果页的价值表达，同时针对差评中的可修复产品或说明问题建立差异化。"],
      ["为什么竞品快照需要定期更新，而不是立项时只做一次？", "价格、促销、排名、评价和内容都会变化，旧快照可能让后续决策失真。"]
    ],
    5: [
      ["一个低价版本销量高但持续亏损，应该继续把它作为引流款吗？", "不能只看销量。应检查它是否带动主推款、整体客单和利润；若没有增量价值，应调整价格、流量或退出。"],
      ["不同版本的广告预算为什么不能平均分配？", "各版本的需求、转化、利润和库存不同，预算应按经营角色和边际回报分配。"]
    ],
    6: [
      ["某产品售价100美元，广告前利润25美元，盈亏平衡ACOS是多少？", "25%，计算方式为25÷100。实际目标通常还要低于25%。"],
      ["ACOS下降但TACOS上升，可能说明什么？", "广告归因效率看似改善，但整体销售对广告的依赖可能增加，需要检查自然销售是否下降。"]
    ],
    7: [
      ["Listing点击率提高但转化率下降，可能说明什么？", "新素材吸引了更多点击，但流量意图不够精准，或页面、价格、Review没有承接新增流量。"],
      ["Review中反复出现同一个使用疑问，Listing应该怎样处理？", "在图片、五点、视频或A+中前置说明使用方法、适用边界和常见误区。"]
    ],
    8: [
      ["一个广告活动同时承担拓词和核心词收割，会带来什么问题？", "预算和数据混在一起，难以判断各目标效率，也可能让探索流量挤占核心词预算。"],
      ["为什么不同匹配方式不应长期使用完全相同的竞价？", "流量范围、相关性和转化确定性不同，应根据各自价值和表现设置竞价。"]
    ],
    9: [
      ["一个搜索词12次点击无订单，能否直接否定？还要看什么？", "不能机械处理。还要看相关性、目标转化率、CPC、客单价、归因窗口和页面承接。"],
      ["优化后ACOS改善，但核心词自然排名持续下降，应该怎样理解？", "可能是过度收缩了战略流量。需要在利润与排名之间重新分配竞价和预算。"]
    ],
    10: [
      ["Vine出现负面评价时，正确处理方式是什么？", "接受真实反馈，排查产品与页面问题并进行修复，不能干预或奖励评价。"],
      ["评价数量增加但评分持续下降，为什么不能继续盲目放量？", "说明产品体验或预期管理可能存在系统性问题，继续放量会扩大差评和转化损失。"]
    ],
    11: [
      ["FBA可售库存能卖20天，但可靠补货需要35天，应该怎样处理？", "库存覆盖不足，应提前控速、调整广告和活动，并与供应链确认更快或替代补货方案。"],
      ["总库存充足，为什么某个站点仍可能断货？", "库存必须按站点和SKU分别计算；其他站点或在途库存未必能及时用于当前站点销售。"]
    ],
    12: [
      ["曝光下降、CTR和CVR正常时，问题更可能在哪一层？", "更可能在收录、关键词覆盖、竞价、预算或广告资源层，而不是优先修改Listing。"],
      ["放量后订单增长但退款率明显上升，下一步应该做什么？", "暂停继续加速，排查产品、描述、误购和履约问题，确认售后风险可控后再决定是否恢复。"]
    ],
    13: [
      ["如果NanoSteamer第二代改款后评分改善但转化仍低，下一步查什么？", "检查价格、竞品门槛、主图与Listing表达、关键词相关性和Review数量是否仍不足。"],
      ["NanoSteamer案例为什么不能被总结成“多看差评就能成功”？", "成功还需要产品真正可改、团队执行改良、重新验证需求与经济模型，并在达标后正确放大。"]
    ],
    14: [
      ["汇报时只有建议却没有验收指标，会造成什么问题？", "无法判断动作是否有效，也无法明确何时继续、调整或停止。"],
      ["领导追问一个尚无数据支持的问题时，应该怎样回答？", "明确当前已知事实和未知项，给出暂时判断、风险边界以及获取数据的验证计划。"]
    ]
  };
  const questions = [...(q[moduleItem.day] || []), ...(extra[moduleItem.day] || [])].slice(0, 10);
  return questions.map(([front, back, requiredConcepts = []]) =>
    card(moduleItem.day, front, back, requiredConcepts));
}
function speak(category, difficulty, question, module, shortAnswer, longAnswer) {
  return { id: `s-${module}-${question}`, category, difficulty, question, module, shortAnswer, longAnswer };
}
function quiz(question, options, answer, explanation, module) { return { id: `q-${module}-${question}`, question, options, answer, explanation, module }; }
function fillQuiz(question, keywords, reference, explanation, module) {
  return { id: `q-fill-${module}-${question}`, type: "fill", question, keywords, reference, explanation, module };
}
function essayQuiz(question, reference, explanation, module) {
  return { id: `q-essay-${module}-${question}`, type: "essay", question, reference, explanation, module };
}

function defaultState() {
  return { version: 1, currentModule: 1, learned: [], cardKnown: [], cardAttempts: [], quizCorrect: [], quizAttempts: [], mistakes: [], speakingScores: [], writtenAnswers: [], practiceCount: 0 };
}
function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved && saved.version === 1 ? { ...defaultState(), ...saved } : defaultState();
  } catch { return defaultState(); }
}
function saveState() {
  state.currentModule = currentModule;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderProgress();
}

function init() {
  modules.forEach(m => $("moduleSelect").add(new Option(`Day ${String(m.day).padStart(2, "0")} · ${m.title}`, m.day)));
  bindEvents();
  renderLesson();
  renderCard();
  chooseSpeakingQuestion(false);
  renderQuiz();
  renderCase();
  renderMistakes();
  renderProgress();
  renderScoreInputs();
}

function bindEvents() {
  document.querySelectorAll(".nav-item").forEach(btn => btn.addEventListener("click", () => switchView(btn.dataset.view)));
  document.querySelectorAll("[data-today-step]").forEach(btn => btn.addEventListener("click", () => switchView(btn.dataset.todayStep)));
  $("startToday").addEventListener("click", () => switchView("learn"));
  $("moduleSelect").addEventListener("change", e => {
    currentModule = Number(e.target.value);
    currentCard = 0;
    currentQuiz = 0;
    renderLesson();
    renderCard();
    chooseSpeakingQuestion(false);
    renderQuiz();
    saveState();
  });
  $("prevModule").addEventListener("click", () => moveModule(-1));
  $("nextModule").addEventListener("click", () => moveModule(1));
  $("markLearned").addEventListener("click", markLearned);
  $("flashCard").addEventListener("click", flipCard);
  $("cardAgain").addEventListener("click", () => rateCard(false));
  $("cardKnown").addEventListener("click", () => rateCard(true));
  $("scoreCardAnswer").addEventListener("click", scoreCardAnswer);
  $("questionCategory").addEventListener("change", () => chooseSpeakingQuestion(false));
  $("nextSpeakQuestion").addEventListener("click", () => chooseSpeakingQuestion(true));
  $("showReference").addEventListener("click", showReference);
  $("startTimer").addEventListener("click", toggleTimer);
  $("recordAudio").addEventListener("click", toggleRecording);
  $("submitWrittenAnswer").addEventListener("click", submitWrittenAnswer);
  $("saveSpeakingScore").addEventListener("click", saveSpeakingScore);
  $("markSpeakMistake").addEventListener("click", () => addMistake(currentSpeak.id, "口述题", currentSpeak.question, currentSpeak.shortAnswer));
  $("submitQuiz").addEventListener("click", submitQuiz);
  $("nextQuiz").addEventListener("click", nextQuiz);
  $("clearMistakes").addEventListener("click", clearMistakes);
  $("exportProgress").addEventListener("click", exportProgress);
  $("resetProgress").addEventListener("click", resetProgress);
}

function switchView(name) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(v => v.classList.toggle("active", v.dataset.view === name));
  $(`${name}View`).classList.add("active");
  if (name === "cards") { currentCard = 0; renderCard(); }
  if (name === "speak") chooseSpeakingQuestion(false);
  if (name === "quiz") { currentQuiz = 0; renderQuiz(); }
  if (name === "mistakes") renderMistakes();
  document.querySelector(".workspace").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderLesson() {
  const m = modules[currentModule - 1];
  $("moduleSelect").value = currentModule;
  $("lessonContent").innerHTML = `
    <div class="lesson-lead"><strong>一句话定义</strong><p>${m.definition}</p></div>
    <div class="lesson-grid">
      ${block("核心逻辑", list(m.logic))}
      ${block("关键指标", list(m.metrics))}
      ${block("实际动作", list(m.actions))}
      ${block("常见误区", `<p>${m.mistakes}</p>`)}
      ${block("30秒表达", `<p>${m.shortSpeech}</p>`, "speech full")}
      ${block("2分钟专业表达", `<p>${m.longSpeech}</p>`, "speech long full")}
    </div>`;
  $("markLearned").textContent = state.learned.includes(currentModule) ? "已掌握，点击取消" : "标记已掌握";
  $("prevModule").disabled = currentModule === 1;
  $("nextModule").disabled = currentModule === 14;
}
function block(title, content, cls = "") { return `<section class="lesson-block ${cls}"><h3>${title}</h3>${content}</section>`; }
function list(items) { return `<ul>${items.map(x => `<li>${x}</li>`).join("")}</ul>`; }
function moveModule(delta) { currentModule = Math.min(14, Math.max(1, currentModule + delta)); renderLesson(); saveState(); }
function markLearned() {
  state.learned = toggleArray(state.learned, currentModule);
  if (state.learned.includes(currentModule) && currentModule < 14) state.currentModule = Math.max(state.currentModule, currentModule + 1);
  state.practiceCount++;
  renderLesson();
  saveState();
}
function toggleArray(arr, value) { return arr.includes(value) ? arr.filter(x => x !== value) : [...arr, value]; }

function renderCard() {
  const cards = moduleCards();
  const c = cards[currentCard] || cards[0];
  cardRevealed = false;
  $("flashCard").classList.remove("revealed");
  $("cardFront").textContent = c.front;
  $("cardBack").textContent = c.back;
  $("cardCounter").textContent = `第${currentModule}课 · ${currentCard + 1} / ${cards.length}`;
  $("cardWrittenAnswer").value = "";
  $("cardScoreResult").hidden = true;
}
function flipCard() { cardRevealed = !cardRevealed; $("flashCard").classList.toggle("revealed", cardRevealed); }
function rateCard(known) {
  const cards = moduleCards();
  const activeCard = cards[currentCard];
  const id = activeCard.front;
  if (known && !state.cardKnown.includes(id)) state.cardKnown.push(id);
  if (!known) {
    state.cardKnown = state.cardKnown.filter(x => x !== id);
    addMistake(`card-${id}`, `第${currentModule}课闪卡`, id, activeCard.back, false);
  }
  state.practiceCount++;
  const unknown = cards.map((_, i) => i).filter(i => !state.cardKnown.includes(cards[i].front) && i !== currentCard);
  currentCard = unknown.length ? unknown[Math.floor(Math.random() * unknown.length)] : (currentCard + 1) % cards.length;
  renderCard();
  saveState();
}
function moduleCards() {
  return flashCards.filter(cardItem => cardItem.module === currentModule);
}
function scoreCardAnswer() {
  const activeCard = moduleCards()[currentCard];
  const answer = $("cardWrittenAnswer").value.trim();
  if (!answer) {
    $("cardScoreResult").innerHTML = "<p class=\"score-feedback\">请先输入你的答案，再进行评分。</p>";
    $("cardScoreResult").hidden = false;
    return;
  }

  const result = assessAnswer(answer, activeCard.back, activeCard.requiredConcepts);
  const { concepts, matched, missed, accuracy, completeness, total } = result;

  state.cardAttempts.push({
    module: currentModule,
    question: activeCard.front,
    answer,
    accuracy,
    completeness,
    total,
    date: new Date().toISOString()
  });
  state.practiceCount++;
  if (total >= 80 && !state.cardKnown.includes(activeCard.front)) state.cardKnown.push(activeCard.front);
  if (total < 60) addMistake(`card-${activeCard.front}`, `第${currentModule}课闪卡`, activeCard.front, activeCard.back, false);

  $("cardScoreResult").innerHTML = `
    <div class="score-summary">
      <div><span>综合得分</span><strong>${total}</strong></div>
      <div><span>准确度</span><strong>${accuracy}%</strong></div>
      <div><span>完整度</span><strong>${completeness}%</strong></div>
    </div>
    <p class="score-feedback"><b>已覆盖：</b>${matched.length ? matched.join("、") : "暂未识别到关键概念"}<br>
    <b>${missed.length ? "建议补充" : "评分说明"}：</b>${missed.length ? missed.join("、") : "核心答案已完整；参考答案中的扩展内容不作为扣分项。"}<br>
    <small>本评分采用本地关键词与长度规则，仅用于记忆训练。</small></p>`;
  $("cardScoreResult").hidden = false;
  cardRevealed = true;
  $("flashCard").classList.add("revealed");
  saveState();
}
function extractConcepts(reference) {
  const stopWords = new Set(["什么", "为什么", "以及", "同时", "不能", "需要", "进行", "通过", "使用", "相关", "不同", "判断", "实际", "当前", "可以", "应该", "负责", "而不是", "不等同于", "一个", "一种", "主要", "通常"]);
  const clauses = reference
    .split(/[，。；：、,（）()\/\s=÷+\-]+/)
    .map(item => item.trim())
    .filter(item => item.length >= 2 && !stopWords.has(item));
  const candidates = clauses.flatMap(item => {
    if (item.length <= 12) return [item];
    return item.split(/与|和|及|并|或|但|则|后|前/).map(part => part.trim()).filter(part => part.length >= 2 && part.length <= 14);
  });
  return [...new Set(candidates)].slice(0, 10);
}
function normalizeText(value) {
  return value.toLowerCase()
    .replace(/百分之/g, "%")
    .replace(/除以|除于/g, "÷")
    .replace(/[\s，。；：、,.（）()\-_'"]/g, "");
}
function assessAnswer(answer, reference, requiredConcepts = []) {
  const normalizedAnswer = normalizeText(answer);
  const normalizedReference = normalizeText(reference);
  const concepts = extractConcepts(reference);

  if (normalizedAnswer === normalizedReference) {
    return { concepts, matched: concepts, missed: [], accuracy: 100, completeness: 100, total: 100 };
  }

  if (requiredConcepts.length) {
    const requiredMatched = requiredConcepts.filter(concept => requiredConceptMatch(normalizedAnswer, concept));
    const requiredMissed = requiredConcepts.filter(concept => !requiredMatched.includes(concept));
    const requiredCoverage = requiredMatched.length / requiredConcepts.length;
    if (requiredCoverage === 1) {
      return {
        concepts: requiredConcepts,
        matched: requiredMatched,
        missed: [],
        accuracy: 100,
        completeness: 100,
        total: 100
      };
    }
    const requiredAccuracy = Math.round(requiredCoverage * 100);
    const requiredLength = Math.min(1, normalizedAnswer.length / Math.max(18, requiredConcepts.join("").length));
    const requiredCompleteness = Math.round((requiredCoverage * .8 + requiredLength * .2) * 100);
    return {
      concepts: requiredConcepts,
      matched: requiredMatched,
      missed: requiredMissed,
      accuracy: requiredAccuracy,
      completeness: requiredCompleteness,
      total: Math.round(requiredAccuracy * .7 + requiredCompleteness * .3)
    };
  }

  const matched = concepts.filter(concept => conceptMatch(normalizedAnswer, concept));
  const missed = concepts.filter(concept => !matched.includes(concept));
  const conceptCoverage = concepts.length ? matched.length / concepts.length : 1;
  const similarity = diceSimilarity(normalizedAnswer, normalizedReference);
  const containment = normalizedAnswer.includes(normalizedReference) || normalizedReference.includes(normalizedAnswer);

  let accuracy = Math.round((conceptCoverage * .72 + similarity * .28) * 100);
  if (containment) accuracy = Math.max(accuracy, 92);

  const lengthRatio = Math.min(1, normalizedAnswer.length / Math.max(1, normalizedReference.length));
  const answerPoints = answer.split(/[，。；、,\n]/).map(item => item.trim()).filter(Boolean).length;
  const referencePoints = reference.split(/[，。；、,\n]/).map(item => item.trim()).filter(Boolean).length;
  const structureRatio = Math.min(1, answerPoints / Math.max(1, referencePoints));
  let completeness = Math.round((conceptCoverage * .55 + lengthRatio * .3 + structureRatio * .15) * 100);
  if (containment) completeness = Math.max(completeness, 95);

  accuracy = Math.min(100, accuracy);
  completeness = Math.min(100, completeness);
  return {
    concepts,
    matched,
    missed,
    accuracy,
    completeness,
    total: Math.round(accuracy * .65 + completeness * .35)
  };
}
function requiredConceptMatch(normalizedAnswer, concept) {
  const groups = {
    "核心需求": ["核心需求", "核心市场需求", "真实需求"],
    "非单纯销量高": ["不是单纯销量高", "并不是单纯的销量高", "不只是销量高", "不能只看销量", "短期销量高不等于"],
    "持续流量": ["持续流量", "持续获取流量", "持续获得流量", "稳定流量"],
    "稳定转化": ["稳定转化", "持续转化", "转化稳定"],
    "利润可控": ["利润可控", "利润能够承接", "可控利润", "盈利可控", "利润和库存可控", "利润、库存可控"],
    "库存可控": ["库存可控", "库存能够承接", "库存稳定", "库存安全", "利润和库存可控", "利润、库存可控"],
    "自然排名": ["自然排名", "自然位", "关键词自然排名"],
    "核心asin": ["核心asin", "核心产品", "核心单品"]
  };
  const normalizedConcept = normalizeText(concept);
  return (groups[normalizedConcept] || [concept]).some(item =>
    normalizedAnswer.includes(normalizeText(item))
  );
}
function conceptMatch(normalizedAnswer, concept) {
  const normalizedConcept = normalizeText(concept);
  if (!normalizedConcept) return false;
  if (normalizedAnswer.includes(normalizedConcept)) return true;
  if (normalizedConcept.length >= 4 && bestLocalSimilarity(normalizedAnswer, normalizedConcept) >= .68) return true;
  const aliases = {
    "广告花费": ["广告支出", "广告费用", "spend"],
    "广告销售额": ["广告销售", "广告归因销售额", "adssales"],
    "总销售额": ["整体销售额", "全部销售额", "总营收"],
    "预测日销": ["预计日销", "日均销量", "预测销量"],
    "fba可售库存": ["fba库存", "可售库存", "fbaavailable"],
    "自然排名": ["自然位", "关键词排名", "organicrank"],
    "转化率": ["cvr", "转化"],
    "点击率": ["ctr", "点击"],
    "广告花费占比": ["tacos"],
    "盈亏平衡acos": ["break-evenacos", "保本acos"],
    "单件广告前利润": ["广告前单件利润", "单件广告前毛利", "广告前利润"],
    "采购": ["采购成本", "产品成本", "货值成本"],
    "头程": ["头程费用", "头程运费"],
    "fba费": ["fba费用", "fba配送费", "配送费"],
    "佣金": ["平台佣金", "销售佣金"],
    "其他变动成本": ["其他成本", "其他费用", "变动成本"]
  };
  return (aliases[normalizedConcept] || []).some(alias => normalizedAnswer.includes(normalizeText(alias)));
}
function bestLocalSimilarity(text, term) {
  if (text.includes(term)) return 1;
  if (text.length <= term.length + 2) return diceSimilarity(text, term);
  let best = 0;
  const minSize = Math.max(2, term.length - 2);
  const maxSize = Math.min(text.length, term.length + 3);
  for (let size = minSize; size <= maxSize; size++) {
    for (let start = 0; start <= text.length - size; start++) {
      best = Math.max(best, diceSimilarity(text.slice(start, start + size), term));
      if (best >= .9) return best;
    }
  }
  return best;
}
function diceSimilarity(a, b) {
  if (a === b) return 1;
  if (!a.length || !b.length) return 0;
  if (a.length === 1 || b.length === 1) return a === b ? 1 : 0;
  const pairs = new Map();
  for (let i = 0; i < b.length - 1; i++) {
    const pair = b.slice(i, i + 2);
    pairs.set(pair, (pairs.get(pair) || 0) + 1);
  }
  let matches = 0;
  for (let i = 0; i < a.length - 1; i++) {
    const pair = a.slice(i, i + 2);
    const count = pairs.get(pair) || 0;
    if (count > 0) {
      pairs.set(pair, count - 1);
      matches++;
    }
  }
  return (2 * matches) / ((a.length - 1) + (b.length - 1));
}

function chooseSpeakingQuestion(countPractice = true) {
  const cat = $("questionCategory").value;
  let pool = moduleSpeakingQuestions().filter(q => cat === "all" || q.category === cat);
  if (!pool.length) pool = moduleSpeakingQuestions();
  const mistakeIds = new Set(state.mistakes.map(m => m.id));
  const weighted = [...pool, ...pool.filter(q => mistakeIds.has(q.id)), ...pool.filter(q => mistakeIds.has(q.id))];
  const alternatives = weighted.filter(q => q.id !== currentSpeak?.id);
  currentSpeak = (alternatives.length ? alternatives : weighted)[Math.floor(Math.random() * (alternatives.length || weighted.length))];
  $("speakCategory").textContent = currentSpeak.category;
  $("speakDifficulty").textContent = currentSpeak.difficulty;
  $("speakQuestion").textContent = currentSpeak.question;
  $("referenceAnswer").hidden = true;
  $("showReference").textContent = "展开参考答案";
  $("showReference").setAttribute("aria-expanded", "false");
  $("selfScore").hidden = true;
  $("writtenAnswer").value = "";
  $("writtenStatus").textContent = "建议先独立作答，再查看参考答案。";
  resetTimer();
  if (countPractice) { state.practiceCount++; saveState(); }
}
function moduleSpeakingQuestions() {
  const lesson = modules[currentModule - 1];
  const manual = speakingQuestions.filter(q => q.module === currentModule);
  const generated = [
    speak("同行交流", "本课", `请用30秒解释：${lesson.title}`, currentModule, lesson.shortSpeech, lesson.longSpeech),
    speak("领导追问", "本课", `这一课最重要的判断标准是什么？`, currentModule, lesson.definition, `可从核心逻辑展开：${lesson.logic.join("；")}`),
    speak("跨部门协作", "本课", `如果要把这一课落地，你会安排哪些具体动作？`, currentModule, lesson.actions.join("；"), `执行时同步观察这些指标：${lesson.metrics.join("；")}`)
  ];
  const byId = new Map([...manual, ...generated].map(item => [item.id, item]));
  return [...byId.values()];
}
function showReference() {
  const willShow = $("referenceAnswer").hidden;
  if (!willShow) {
    $("referenceAnswer").hidden = true;
    $("selfScore").hidden = true;
    $("showReference").textContent = "展开参考答案";
    $("showReference").setAttribute("aria-expanded", "false");
    return;
  }
  renderReferenceAnswer($("writtenAnswer").value.trim());
  $("referenceAnswer").hidden = false;
  $("selfScore").hidden = false;
  $("showReference").textContent = "收起参考答案";
  $("showReference").setAttribute("aria-expanded", "true");
}
function submitWrittenAnswer() {
  const answer = $("writtenAnswer").value.trim();
  if (!answer) {
    $("writtenStatus").textContent = "请先填写你的判断，关键词或完整答案都可以。";
    $("writtenAnswer").focus();
    return;
  }
  state.writtenAnswers.push({
    questionId: currentSpeak.id,
    question: currentSpeak.question,
    answer,
    date: new Date().toISOString()
  });
  state.practiceCount++;
  $("writtenStatus").textContent = "已保存。请对照参考答案检查是否包含结论、依据和动作。";
  renderReferenceAnswer(answer);
  $("referenceAnswer").hidden = false;
  $("selfScore").hidden = false;
  $("showReference").textContent = "收起参考答案";
  $("showReference").setAttribute("aria-expanded", "true");
  saveState();
}
function renderReferenceAnswer(userAnswer = "") {
  $("referenceAnswer").innerHTML = `${userAnswer ? `<div class="user-answer"><h3>你的文字答案</h3>${escapeHtml(userAnswer)}</div>` : ""}
    <h3>参考表达</h3><p>${currentSpeak.shortAnswer}</p><p><b>展开时可补充：</b>${currentSpeak.longAnswer}</p>`;
}
function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" }[char]));
}
function renderScoreInputs() {
  const labels = ["结论清晰", "数据依据", "逻辑结构", "术语准确", "行动与风险"];
  $("scoreInputs").innerHTML = labels.map((label, i) => `
    <label class="score-row"><span>${label}</span><input data-score="${i}" type="range" min="1" max="5" value="3"><b data-score-value="${i}">3</b></label>`).join("");
  document.querySelectorAll("[data-score]").forEach(input => input.addEventListener("input", () => {
    document.querySelector(`[data-score-value="${input.dataset.score}"]`).textContent = input.value;
  }));
}
function saveSpeakingScore() {
  const scores = [...document.querySelectorAll("[data-score]")].map(x => Number(x.value));
  state.speakingScores.push({ question: currentSpeak.question, date: new Date().toISOString(), scores, average: scores.reduce((a,b) => a+b,0)/scores.length });
  state.mistakes = state.mistakes.filter(m => m.id !== currentSpeak.id);
  state.practiceCount++;
  saveState();
  chooseSpeakingQuestion(false);
}

function resetTimer() {
  clearInterval(timerId);
  timerId = null;
  timerSeconds = 120;
  $("timerDisplay").textContent = "02:00";
  $("startTimer").textContent = "开始计时";
}
function toggleTimer() {
  if (timerId) { clearInterval(timerId); timerId = null; $("startTimer").textContent = "继续计时"; return; }
  $("startTimer").textContent = "暂停";
  timerId = setInterval(() => {
    timerSeconds--;
    $("timerDisplay").textContent = `${String(Math.floor(timerSeconds / 60)).padStart(2,"0")}:${String(timerSeconds % 60).padStart(2,"0")}`;
    if (timerSeconds <= 0) { clearInterval(timerId); timerId = null; $("startTimer").textContent = "重新计时"; }
  }, 1000);
  if (timerSeconds <= 0) { resetTimer(); toggleTimer(); }
}
async function toggleRecording() {
  if (recorder?.state === "recording") { recorder.stop(); $("recordAudio").textContent = "本地录音"; return; }
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    $("recordStatus").textContent = "当前浏览器不支持录音，仍可使用计时和自评完成训练。";
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioChunks = [];
    recorder = new MediaRecorder(stream);
    recorder.ondataavailable = e => audioChunks.push(e.data);
    recorder.onstop = () => {
      const url = URL.createObjectURL(new Blob(audioChunks, { type: recorder.mimeType || "audio/webm" }));
      $("audioPlayback").src = url;
      $("audioPlayback").hidden = false;
      $("recordStatus").textContent = "录音已生成，可立即回放自评；刷新页面后会自动清除。";
      stream.getTracks().forEach(track => track.stop());
    };
    recorder.start();
    $("recordAudio").textContent = "停止录音";
    $("recordStatus").textContent = "录音中，仅在当前浏览器页面内处理……";
  } catch {
    $("recordStatus").textContent = "未获得麦克风权限。你仍可正常使用计时、参考答案和自评功能。";
  }
}

function renderQuiz() {
  const pool = moduleQuizQuestions();
  if (currentQuiz >= pool.length) currentQuiz = 0;
  const q = pool[currentQuiz];
  selectedQuizOption = null;
  const type = q.type || "choice";
  const typeLabel = { choice: "选择题", fill: "填空题", essay: "问答题" }[type];
  $("quizProgress").textContent = `第${currentModule}课 · ${typeLabel} · ${currentQuiz + 1} / ${pool.length}`;
  let answerArea = "";
  if (type === "choice") {
    answerArea = q.options.map((o,i) => `<button class="option" data-option="${i}">${String.fromCharCode(65+i)}. ${o}</button>`).join("");
  } else if (type === "fill") {
    answerArea = `<input id="quizTextAnswer" class="quiz-text-input" type="text" placeholder="填写完整公式或关键词"><p class="quiz-hint">多个空可以直接写在同一句中，顺序不限。</p>`;
  } else {
    answerArea = `<textarea id="quizTextAnswer" class="quiz-text-input" placeholder="请写出你的判断、依据和处理动作……"></textarea><p class="quiz-hint">系统按关键概念覆盖率和答案完整度进行本地评分。</p><details class="quiz-answer-hint"><summary>查看参考答案提示</summary><p>${q.reference}</p></details>`;
  }
  $("quizCard").innerHTML = `<span class="quiz-type">${typeLabel}</span><h3>${q.question}</h3>${answerArea}`;
  if (type === "choice") {
    document.querySelectorAll(".option").forEach(btn => btn.addEventListener("click", () => {
      selectedQuizOption = Number(btn.dataset.option);
      document.querySelectorAll(".option").forEach(x => x.classList.toggle("selected", x === btn));
    }));
  }
  $("quizFeedback").hidden = true;
  $("submitQuiz").hidden = false;
  $("nextQuiz").hidden = true;
}
function submitQuiz() {
  const q = moduleQuizQuestions()[currentQuiz];
  const type = q.type || "choice";
  let correct = false;
  let feedback = "";
  let answerRecord = "";

  if (type === "choice") {
    if (selectedQuizOption === null) return;
    correct = selectedQuizOption === q.answer;
    answerRecord = q.options[selectedQuizOption];
    feedback = `<b>${correct ? "回答正确" : `正确答案：${String.fromCharCode(65 + q.answer)}. ${q.options[q.answer]}`}</b><br>${q.explanation}`;
  } else {
    const answer = $("quizTextAnswer").value.trim();
    if (!answer) {
      $("quizFeedback").className = "quiz-feedback wrong";
      $("quizFeedback").innerHTML = "请先填写答案。";
      $("quizFeedback").hidden = false;
      return;
    }
    answerRecord = answer;
    if (type === "fill") {
      const normalized = normalizeText(answer);
      const matched = q.keywords.filter(keyword => normalized.includes(normalizeText(keyword)));
      const accuracy = Math.round(matched.length / q.keywords.length * 100);
      correct = matched.length === q.keywords.length;
      feedback = `<b>${correct ? "填空正确" : `准确度：${accuracy}%`}</b><br>
        已识别：${matched.length ? matched.join("、") : "暂无"}<br>
        参考答案：${q.reference}<br>${q.explanation}`;
    } else {
      const result = scoreTextResponse(answer, q.reference);
      correct = result.total >= 70;
      feedback = `<b>综合得分：${result.total}分</b>（准确度${result.accuracy}% · 完整度${result.completeness}%）<br>
        已覆盖：${result.matched.length ? result.matched.join("、") : "暂未识别到关键概念"}<br>
        建议补充：${result.missed.length ? result.missed.join("、") : "关键概念已覆盖"}<br>
        <b>参考答案：</b>${q.reference}<br>${q.explanation}<br>
        <small>本评分采用本地关键词与长度规则，仅用于训练。</small>`;
    }
  }

  $("quizFeedback").className = `quiz-feedback ${correct ? "correct" : "wrong"}`;
  $("quizFeedback").innerHTML = feedback;
  $("quizFeedback").hidden = false;
  $("submitQuiz").hidden = true;
  $("nextQuiz").hidden = false;
  state.quizAttempts.push({ id: q.id, type, answer: answerRecord, correct, date: new Date().toISOString() });
  if (correct) {
    if (!state.quizCorrect.includes(q.id)) state.quizCorrect.push(q.id);
    state.mistakes = state.mistakes.filter(m => m.id !== q.id);
  } else {
    addMistake(q.id, `${type === "choice" ? "选择" : type === "fill" ? "填空" : "问答"}题`, q.question, q.reference || q.explanation, false);
  }
  state.practiceCount++;
  saveState();
}
function scoreTextResponse(answer, reference) {
  return assessAnswer(answer, reference);
}
function nextQuiz() {
  const mistakeIds = new Set(state.mistakes.map(m => m.id));
  const pool = moduleQuizQuestions();
  const weighted = pool.flatMap((q, i) => mistakeIds.has(q.id) ? [i, i, i] : [i]);
  const alternatives = weighted.filter(i => i !== currentQuiz);
  currentQuiz = alternatives.length ? alternatives[Math.floor(Math.random() * alternatives.length)] : 0;
  renderQuiz();
}
function moduleQuizQuestions() {
  const lesson = modules[currentModule - 1];
  const manual = quizQuestions.filter(q => q.module === currentModule);
  const generated = [
    essayQuiz(`请概括第${currentModule}课「${lesson.title}」的核心判断。`, lesson.shortSpeech, "回答应包含本课核心结论和至少一个判断依据。", currentModule),
    essayQuiz(`第${currentModule}课常见误区是什么？应该如何避免？`, `${lesson.mistakes}。避免方式：先回到数据、指标和实际动作，不用单一表象下结论。`, "回答应包含误区和避免方法。", currentModule),
    essayQuiz(`把第${currentModule}课落地到工作中，你会先做哪三件事？`, lesson.actions.join("；"), "回答应包含可执行动作，而不是只讲概念。", currentModule)
  ];
  const byId = new Map([...manual, ...generated].map(item => [item.id, item]));
  return [...byId.values()];
}

function addMistake(id, type, question, answer, shouldSave = true) {
  if (!state.mistakes.some(m => m.id === id)) state.mistakes.push({ id, type, question, answer, date: new Date().toISOString() });
  if (shouldSave) { state.practiceCount++; saveState(); }
}
function renderMistakes() {
  if (!state.mistakes.length) {
    $("mistakeList").innerHTML = `<div class="empty"><h3>错题本目前是空的</h3><p>闪卡选择“还没记住”、测验答错或主动收藏口述题后，会出现在这里。</p></div>`;
    return;
  }
  $("mistakeList").innerHTML = state.mistakes.map(m => `
    <article class="mistake-item"><small>${m.type}</small><h3>${m.question}</h3><p>${m.answer}</p><button class="text-button" data-remove-mistake="${m.id}">标记已掌握</button></article>`).join("");
  document.querySelectorAll("[data-remove-mistake]").forEach(btn => btn.addEventListener("click", () => {
    state.mistakes = state.mistakes.filter(m => m.id !== btn.dataset.removeMistake);
    saveState(); renderMistakes();
  }));
}
function clearMistakes() {
  if (!state.mistakes.length || !confirm("确认清空全部错题记录？")) return;
  state.mistakes = [];
  saveState();
  renderMistakes();
}

function renderCase() {
  $("caseContent").innerHTML = `
    <article class="case-hero"><h3>Pure Daily Care · NanoSteamer</h3><p>一个比“从零一炮而红”更有学习价值的案例：首代家用面部蒸脸器因产品问题和差评失败，团队止损并利用Amazon Review改良产品，第二代后来成为长期畅销款。</p></article>
    <div class="data-notice"><b>证据边界：</b>下列“首代失败、清理库存、Review驱动改款、NanoSteamer长期畅销、品牌扩展”来自公开报道；具体关键词、ACOS、转化率、库存和改款参数未公开，相关执行方案属于教学推演。</div>
    <div class="case-grid">${caseMetrics.map(m => `<article class="case-metric"><span>${m[0]}</span><strong>${m[1]}</strong><small>${m[2]}</small><p>${m[3]}</p></article>`).join("")}</div>
    <section class="case-section"><h3>一、为什么首代产品会失败</h3>
      <ul><li><b>不能先归因广告：</b>公开采访明确提到首代产品存在多种问题并获得很差的评价，说明核心矛盾在产品体验。</li><li><b>差评是结果也是证据：</b>需要把差评按质量、功能、使用体验、说明和预期差距分类，确认哪些必须改产品。</li><li><b>及时止损：</b>团队选择清理首代库存，而不是继续为问题产品购买更多流量。</li><li><b>避免错误动作：</b>单纯换主图、降价或提高广告预算，只会让更多买家接触问题产品并累积负面反馈。</li></ul>
    </section>
    <section class="case-section"><h3>二、Review如何转成产品改良</h3>
      <ul><li>统计高频问题，而不是被单条极端评价带偏。</li><li>区分产品缺陷、页面承诺过度、使用方法不清和个别履约问题。</li><li>把问题转成“现象—影响—根因—改良要求—验收方式”的产品清单。</li><li>改款完成后重新验证评分、退货、咨询、转化和关键词表现，不能直接假设问题已解决。</li></ul>
    </section>
    <section class="case-section"><h3>三、第二代重新上市的教学推演</h3>
      <ol><li><b>D1-D3 产品验收：</b>确认首代高频问题是否逐项关闭，并设置质量抽检与售后预案。</li><li><b>D4-D7 页面重建：</b>围绕真实改良点更新主图、视频、五点、A+、使用说明和风险提示。</li><li><b>D8-D14 小流量验证：</b>用高相关词获取样本，重点观察CTR、CVR、差评、退货和咨询内容。</li><li><b>D15-D21 评价与搜索词复盘：</b>使用合规评价方式，迁移有效搜索词，排除低相关流量。</li><li><b>D22-D30 谨慎放量：</b>只有产品、转化、利润、售后和库存同时达到门槛，才逐步增加预算和备货。</li></ol>
    </section>
    <section class="case-section"><h3>四、案例任务：如果你接手首代失败项目</h3>
      <p class="case-task">请用“结论—依据—动作—风险—复盘”结构回答：你会选择继续优化、改款重测，还是直接淘汰？需要哪些数据才能决策？</p>
      <details><summary>展开参考要点</summary><p>结论：先暂停放量并进入改款评估，不凭短期销量决定。依据：集中差评若来自可修复的产品问题，品类需求仍可能存在。动作：统计Review和退货、测算改款成本、确认搜索需求和利润，再小批量重测。风险：改款无效、旧评价影响转化、库存再次积压。复盘：以评分、退货率、CVR、贡献利润和核心词表现设置继续或淘汰门槛。</p></details>
    </section>
    <section class="case-section"><h3>五、来源与使用方式</h3>
      <p>核心案例事实来自Business Insider对创始人Dave Dama的采访。报道还提到Pure Daily Care与AquaSonic后来在Amazon形成较大规模，但不能把品牌全部成功简单归因于NanoSteamer单品。</p>
      <p><a href="https://www.businessinsider.com/amazon-selling-advice-how-to-pick-products-ecommerce-top-seller-2025-9" target="_blank" rel="noopener">阅读公开案例来源</a></p>
    </section>`;
}

function renderProgress() {
  const learned = state.learned.length;
  const cards = state.cardKnown.length / flashCards.length;
  const quizRate = state.quizCorrect.length / quizQuestions.length;
  const speaking = state.speakingScores.length ? Math.min(1, state.speakingScores.reduce((s,x) => s + x.average, 0) / state.speakingScores.length / 5) : 0;
  const overall = Math.round((learned / 14 * .5 + cards * .2 + quizRate * .2 + speaking * .1) * 100);
  $("overallScore").textContent = `${overall}%`;
  $("overallBar").style.width = `${overall}%`;
  $("studySummary").textContent = `完成${learned}/14天 · 累计练习${state.practiceCount}次`;

  const nextDay = modules.find(m => !state.learned.includes(m.day))?.day || 14;
  const today = modules[nextDay - 1];
  $("todayDay").textContent = `DAY ${String(today.day).padStart(2, "0")}`;
  $("todayTitle").textContent = today.title;
  $("todayGoal").textContent = today.goal;

  const mapGroups = [
    ["01", "机会判断", "市场与关键词", [2,3]],
    ["02", "竞品洞察", "Review与门槛", [4]],
    ["03", "产品策略", "定位、变体、利润", [5,6]],
    ["04", "转化建设", "Listing与评价", [7,10]],
    ["05", "流量起盘", "广告与搜索词", [8,9]],
    ["06", "经营承接", "库存与放量", [11,12]],
    ["07", "复盘表达", "案例与沟通", [13,14]]
  ];
  $("knowledgeMap").innerHTML = mapGroups.map(g => {
    const done = g[3].every(x => state.learned.includes(x));
    const current = g[3].includes(nextDay);
    return `<article class="map-node ${done ? "done" : current ? "current" : ""}"><b>${g[0]}</b><span>${g[1]}</span><small>${g[2]} · ${done ? "已掌握" : current ? "进行中" : "待学习"}</small></article>`;
  }).join("");
  $("curriculum").innerHTML = modules.map(m => `<article class="day-card ${state.learned.includes(m.day) ? "done" : m.day === nextDay ? "current" : ""}"><b>DAY ${String(m.day).padStart(2,"0")}</b><span>${m.title}</span><small>${state.learned.includes(m.day) ? "已完成" : m.day === nextDay ? "今日建议" : "待学习"} · 30-45分钟</small></article>`).join("");
}

function exportProgress() {
  const report = {
    exportedAt: new Date().toISOString(),
    summary: { learnedDays: state.learned.length, knownCards: state.cardKnown.length, correctQuiz: state.quizCorrect.length, practices: state.practiceCount },
    ...state
  };
  const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `亚马逊爆款学习记录-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
}
function resetProgress() {
  if (!confirm("确认重置全部课程、闪卡、测验、口述评分和错题记录？此操作无法撤销。")) return;
  localStorage.removeItem(STORAGE_KEY);
  state = defaultState();
  currentModule = 1;
  renderLesson(); renderCard(); renderQuiz(); renderMistakes(); renderProgress();
}

init();
