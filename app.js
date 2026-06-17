const STORAGE_KEY = "amazon-hit-learning-v2";

function lesson(day, title, goal, definition, logic, metrics, actions, mistakes, shortSpeech, longSpeech) {
  return { day, title, goal, definition, logic, metrics, actions, mistakes, shortSpeech, longSpeech };
}

const modules = [
  lesson(
    1,
    "爆款定义与完整经营模型",
    "把“销量高”升级为“可持续核心ASIN”的完整判断。",
    "亚马逊爆款不是单纯销量高，而是在核心需求下持续获取流量、稳定转化、利润和库存可控，并能沉淀自然排名的核心ASIN。",
    ["需求真实且可持续", "流量、转化、利润、评价、库存同时成立", "广告能推动自然排名，而不是长期买量", "增长过程有可复盘的数据闭环"],
    ["Sessions", "CTR", "CVR", "ACOS/TACOS", "自然排名", "评分与退货率", "可售天数"],
    ["定义阶段目标", "建立指标看板", "确认放量门槛", "设置风险阈值", "按周复盘自然增长"],
    "只看销量或短期订单，忽视利润、库存、评价和自然排名。",
    "我理解的亚马逊爆款，不是单纯销量高，而是在核心需求下持续获得流量、稳定转化、利润和库存可控，并能沉淀自然排名的核心ASIN。",
    "判断爆款要看完整经营模型。第一是需求真实，有稳定搜索和复购或场景需求；第二是流量和转化能跑通，CTR、CVR、订单和评价不互相拖累；第三是利润与库存能承接，ACOS和TACOS在阶段目标内，可售天数能支撑放量；第四是广告投入能带来自然排名提升，而不是一直靠广告买单。复盘时我会按流量、转化、利润、评价、库存五个层面判断增长是否健康。"
  ),
  lesson(
    2,
    "市场容量、趋势与类目判断",
    "学会判断类目机会，而不是被单一销量迷惑。",
    "类目机会不是销量越大越好，而是需求规模、增长趋势、竞争强度、利润空间和我方进入能力同时匹配。",
    ["先确认搜索需求和趋势", "再判断头部集中度与Review门槛", "继续测算价格带、成本和广告承压能力", "最后结合供应链与差异化能力决定进入、暂缓或放弃"],
    ["核心词搜索量", "长尾词数量", "BSR稳定性", "头部Review数量", "价格带", "平均评分", "新品进入速度"],
    ["建立关键词需求表", "拆Top竞品销量与Review", "识别季节性和趋势", "估算利润与广告成本", "输出立项结论"],
    "只看类目销量大就认为值得进入，忽视竞争门槛、利润空间和进入能力。",
    "类目判断不能只看销量。我会先看核心词和长尾词确认需求，再看头部集中度、Review门槛和新品机会，接着测算价格带、成本、广告和退货，最后结合供应链与差异化能力判断是否进入。",
    "做类目机会判断时，我会按五层走。第一看需求，核心词有没有搜索量，长尾词是否丰富，趋势是上升还是衰退；第二看竞争，头部ASIN是否垄断、Review门槛多高、新品是否能进入；第三看利润，价格带能不能覆盖采购、头程、FBA、佣金、广告和退货；第四看我方能力，包括供应链、差异化、交付和内容能力；第五输出结论，不是简单说能不能做，而是写清进入、暂缓或放弃的依据和风险。"
  ),
  lesson(
    3,
    "关键词研究与搜索需求",
    "把关键词从“词表”变成Listing和广告动作。",
    "关键词研究是把买家真实搜索需求拆成核心词、属性词、场景词和竞品词，并用于Listing布局、广告验证和自然排名沉淀。",
    ["核心词决定主战场", "长尾词验证细分需求", "搜索词报告反映真实买家语言", "广告数据要反哺Listing和词库"],
    ["Search Query Volume", "CTR", "CVR", "CPC", "订单数", "搜索词ACOS", "自然排名"],
    ["建立分层词库", "把核心词布局到标题和要点", "广告冷启动验证词", "按搜索词迁移精准词", "否定低相关词"],
    "只追高搜索量词，忽略相关性、转化和自然排名价值。",
    "关键词研究不是堆词，而是把真实搜索需求拆成核心词、属性词、场景词和竞品词，再分别用于Listing布局、广告验证和自然排名沉淀。",
    "我会先建立分层词库：核心词确定类目主战场，属性词体现规格和卖点，场景词承接具体使用需求，竞品词用于防守和对比。然后把高相关关键词放进标题、五点和A+，用广告冷启动验证点击和转化。搜索词报告出来后，能出单的词迁移到精准投放，低相关高花费词做否定。最终目标不是词表好看，而是让关键词带来稳定流量、订单和自然排名。"
  ),
  lesson(
    4,
    "竞品及Review拆解",
    "从竞品中找到市场门槛、用户痛点和突破口。",
    "竞品拆解不是照抄，而是拆出点击、转化、信任、履约和差评痛点，判断我方必须追平什么、可以差异化什么。",
    ["主图与价格影响点击", "Listing与Review影响转化", "差评暴露产品改良方向", "履约和库存决定体验稳定性"],
    ["价格", "Rating", "Review数量", "BSR", "主图卖点", "差评主题", "Coupon与促销"],
    ["选择Top竞品和新品竞品", "拆主图标题五点A+", "归类Review痛点", "对比价格与规格", "形成追平和差异化清单"],
    "只看竞品卖得好就照抄页面，忽略用户痛点和我方能力边界。",
    "竞品拆解的重点不是照抄，而是判断市场门槛和突破口。我会看点击、转化、信任、履约和差评痛点，再形成必须追平、可以差异化和不能靠运营掩盖的清单。",
    "拆竞品时我会分两类：头部竞品代表门槛，新品竞品代表进入机会。具体会看主图、标题、价格、Coupon、Review数量、评分、差评主题和库存履约。正面信息告诉我买家为什么购买，差评告诉我哪里有改良空间。最后我不会直接照抄，而是输出三张清单：必须追平的基础能力、可以差异化的卖点、以及产品本身必须解决的问题。"
  ),
  lesson(
    5,
    "产品定位、变体与价格结构",
    "用产品和价格结构承接不同流量与利润目标。",
    "产品定位要明确目标人群、核心场景、主推版本、利润版本和引流版本，让变体与价格结构共同服务转化和利润。",
    ["定位决定谁买和为什么买", "变体承担不同流量角色", "价格结构影响点击、转化和利润", "产品体验先于广告放量"],
    ["各变体Sessions", "CVR", "毛利率", "退款率", "评分", "变体销售占比", "价格带"],
    ["明确目标人群和场景", "设计引流款、主推款、利润款", "测算各变体利润", "观察差评和退货", "调整资源分配"],
    "所有变体平均用力，或只靠低价抢销量，导致利润和评价失控。",
    "产品定位要回答卖给谁、解决什么场景、为什么选我。变体和价格不能随便摆，要让引流款、主推款和利润款各自承担角色。",
    "我会先明确目标人群和核心场景，再设计变体角色：引流款负责降低点击门槛，主推款负责规模订单，利润款负责提高利润和客单。然后测算每个变体的采购、头程、FBA、佣金、广告和退货成本，确认不会卖得越多亏得越多。上线后看各变体Sessions、CVR、毛利、评分和退款率，决定预算和库存向哪个版本倾斜。"
  ),
  lesson(
    6,
    "利润、盈亏平衡ACOS与预算",
    "学会把广告效率放进利润和阶段目标里判断。",
    "ACOS只能说明广告销售效率，盈亏平衡ACOS说明广告可承受边界，TACOS说明广告对整体销售的健康度。",
    ["新品期ACOS可高于成熟期，但要换来自然增长", "盈亏平衡ACOS来自单件广告前利润", "TACOS下降通常代表自然销售占比提升", "预算要绑定阶段目标"],
    ["ACOS", "TACOS", "毛利率", "单件广告前利润", "CPC", "CVR", "预算消耗率"],
    ["计算单件利润", "设定盈亏平衡ACOS", "区分拓词和收割预算", "监控自然订单变化", "按周调整预算"],
    "只用ACOS高低判断广告好坏，忽略新品阶段、自然排名和整体利润。",
    "我不会只看ACOS判断广告。ACOS看广告效率，盈亏平衡ACOS看亏不亏，TACOS看广告是否带动整体销售和自然增长。",
    "判断广告预算时，我会先算单件广告前利润，并得到盈亏平衡ACOS。新品期如果ACOS高，但核心词排名、自然订单和Review在改善，可以接受阶段性投入；成熟期则要更严格看利润和TACOS。如果ACOS下降但TACOS上升，可能只是广告收缩导致总销售变差。因此预算不能只看一个指标，要结合阶段目标、自然增长和利润承压能力。"
  ),
  lesson(
    7,
    "Listing内容与转化逻辑",
    "按买家决策顺序提升点击和转化。",
    "Listing是把搜索流量转化为订单的页面系统，主图解决点击，标题解决相关性，五点和A+解决购买理由，Review解决信任。",
    ["搜索结果页先争取点击", "详情页要降低理解成本", "卖点必须对应买家痛点", "内容优化要用CTR和CVR验证"],
    ["CTR", "CVR", "Sessions", "Unit Session Percentage", "关键词排名", "评分", "退货原因"],
    ["优化主图和标题", "重写五点卖点", "补充场景图和A+", "对照差评修正卖点", "A/B测试关键内容"],
    "把Listing优化当成美工问题，只追求好看，忽略搜索相关性和买家决策。",
    "Listing优化要按买家路径理解：主图负责点击，标题负责相关性，五点和A+负责说服，Review负责信任，最后用CTR和CVR验证。",
    "我会先从搜索结果页看CTR，如果曝光有但点击低，优先检查主图、价格、Rating和Coupon。点击进来后如果CVR低，再检查标题是否匹配需求，五点是否讲清核心卖点，图片是否覆盖场景和信任点，A+是否补足差异化。Listing优化不是单纯换图或写文案，而是让每个内容模块对应买家的一个决策障碍，并用CTR、CVR和退货原因验证。"
  ),
  lesson(
    8,
    "Sponsored Products广告结构",
    "让每个广告活动都有清晰目的。",
    "SP广告结构应分为拓词、验证、收割和防守，避免一个活动同时承担所有目标导致数据混乱。",
    ["自动广告用于发现搜索词", "广泛和词组用于扩展需求", "精准用于收割高相关词", "商品投放用于竞品防守和拦截"],
    ["Impressions", "CTR", "CPC", "CVR", "ACOS", "订单数", "搜索词相关性"],
    ["搭建自动和手动结构", "区分拓词与收割预算", "定期迁移出单词", "否定低相关词", "按目标调竞价"],
    "把所有关键词放在一个广告活动里，导致预算、竞价和搜索词判断都混乱。",
    "SP广告结构要分工：自动拓词，广泛和词组扩词，精准收割，商品投放做竞品防守。每个活动都要有明确目标。",
    "我会把广告拆成四类。自动广告负责发现真实搜索词；广泛和词组负责扩展相近需求；精准广告负责收割已经验证的高相关词；商品投放负责竞品页面拦截和防守。这样做的好处是预算和竞价可以分开管理，搜索词报告也更清楚。优化时我会把出单词迁移到精准，把低相关高花费词否定，把预算向高转化和有排名价值的词倾斜。"
  ),
  lesson(
    9,
    "搜索词分析和广告优化",
    "用真实买家查询指导加价、降价、迁词和否定。",
    "搜索词优化是根据相关性、点击、转化、花费和排名价值，对真实买家查询做分层处理。",
    ["高相关有订单要沉淀", "高相关无订单要看样本量和页面转化", "低相关高花费要否定", "核心词不能只因ACOS高就直接停"],
    ["Search Term", "Spend", "Orders", "ACOS", "CTR", "CVR", "CPC", "自然排名"],
    ["下载搜索词报告", "按相关性分层", "迁移高转化词", "否定低相关词", "对核心词分阶段降本"],
    "看到ACOS高就直接暂停，可能切断核心词排名和自然流量。",
    "搜索词优化不是简单降ACOS，而是按相关性和转化处理。高相关有订单要沉淀，低相关高花费要否定，核心词要结合排名价值分步优化。",
    "我会先把搜索词分成三类。第一，高相关且有订单的词，迁移到精准并适当加预算；第二，高相关但暂时无订单的词，要看点击样本、页面转化和竞价，不一定马上否定；第三，低相关且持续花费的词，及时否定。对于核心词，ACOS高也不能直接停，要看它是否影响自然排名和类目入口，可以通过降竞价、缩预算、优化Listing和分时段处理来降低成本。"
  ),
  lesson(
    10,
    "Vine、评价、退货与合规",
    "用合规方式积累信任，并把反馈转成产品改进。",
    "评价运营不是索评技巧，而是通过Vine、Request a Review、退货与VoC反馈，合规建立信任并推动产品迭代。",
    ["Vine适合新品早期获取真实反馈", "Request a Review是合规提醒", "差评和退货原因是产品问题信号", "任何诱导好评都不可做"],
    ["Review数量", "Rating", "Vine评价", "退货率", "VoC", "差评主题", "买家消息"],
    ["报名Vine", "使用Request a Review", "归类差评痛点", "分析退货原因", "反馈产品和Listing修正"],
    "把评价当成可操控资源，做诱导、补偿或筛选好评，带来合规风险。",
    "评价运营要合规。新品可以用Vine获取真实反馈，用Request a Review提醒评价，同时把差评、退货和VoC转成产品改进。",
    "我会把评价看成信任和产品反馈系统。新品阶段可以报名Vine，但要接受真实评价；订单完成后可以使用Request a Review，但不能诱导好评、补偿好评或筛选买家。出现差评时先归类问题：是产品体验、说明不清、包装履约还是预期不一致。再把这些反馈同步到产品、Listing和客服流程。评分和退货率如果恶化，就不能盲目放量。"
  ),
  lesson(
    11,
    "FBA库存、补货和断货风险",
    "让库存节奏支撑广告和自然排名。",
    "FBA库存管理要把可售库存、预测日销、在途库存和补货ETA放在一起看，决定广告能否继续放量。",
    ["库存不足会打断排名积累", "补货周期决定广告控速", "可售天数要覆盖可靠到货时间", "断货前要提前调整预算和促销"],
    ["FBA可售库存", "日均销量", "可售天数", "在途库存", "补货ETA", "库容限制", "断货日期"],
    ["计算可售天数", "确认可靠补货ETA", "设置预警线", "按库存调整广告", "优先保障核心变体"],
    "只看总库存，不看站点、变体、在途和可靠到货时间。",
    "库存不是仓库问题，它会决定广告能不能放量。我要同时看FBA可售、日销、在途和补货ETA，判断可售天数是否覆盖到货周期。",
    "我会先用FBA可售库存除以预测日销，得到可售天数；再看在途库存和可靠补货ETA。如果可售天数低于补货周期，就要提前控广告、收缩促销、保护核心词排名，并优先补主推变体。如果库存充足且转化稳定，才适合继续放量。库存管理的目标不是不缺货这么简单，而是避免断货打断自然排名和广告学习。"
  ),
  lesson(
    12,
    "放量门槛与异常诊断",
    "知道什么时候该加速，什么时候该刹车。",
    "放量必须建立在页面转化稳定、广告词有效、利润可承受、评价健康、库存可覆盖的基础上。",
    ["放量前先确认转化和利润", "放量中分小步增加预算和竞价", "异常要按漏斗定位", "不能用广告解决所有问题"],
    ["CTR", "CVR", "ACOS", "TACOS", "退款率", "评分", "可售天数", "自然排名"],
    ["设置放量门槛", "每次小幅加预算", "监控新增流量质量", "按曝光点击转化利润分层诊断", "及时降速复盘"],
    "看到订单增长就继续加预算，忽略退款、评分、利润和库存风险。",
    "放量前要确认转化、利润、评价和库存都能承接。放量时小步增加预算，并观察CTR、CVR、ACOS、自然排名和库存。",
    "我会把放量当成有门槛的动作。先看Listing转化是否稳定，广告是否有可放大的高相关词，利润是否能承压，评分和退货是否健康，库存是否覆盖补货周期。放量时不一次性猛加，而是每次10%到20%调整预算或竞价。异常时按漏斗排查：曝光问题看竞价和词，点击问题看主图价格和评分，转化问题看页面和产品，利润问题看CPC、CVR和成本，库存问题及时控速。"
  ),
  lesson(
    13,
    "NanoSteamer完整案例复盘",
    "用公开案例练习完整复盘表达。",
    "NanoSteamer案例的关键不是一开始成功，而是从首代失败和差评中找到改款方向，再用第二代产品重新验证市场。",
    ["首代失败暴露产品问题", "Review成为产品改良输入", "第二代修正体验后再放量", "单品成功后扩展品牌能力"],
    ["差评主题", "评分变化", "转化表现", "退货原因", "销量趋势", "产品迭代点"],
    ["复盘失败原因", "归类Review痛点", "改良产品体验", "小规模重新验证", "再决定放量与扩品"],
    "把案例简单理解成多看差评就能成功，忽略产品改良、重新验证和放量节奏。",
    "NanoSteamer案例说明，爆款不是靠硬推出来的。首代失败后，要从Review和退货中找到真实痛点，改良产品，再通过小规模验证决定是否放量。",
    "我会这样复盘NanoSteamer：第一，首代产品失败说明市场需求存在不等于产品能承接；第二，差评和Review不是负面信息，而是产品改良输入；第三，第二代要先解决体验问题，再讨论Listing、广告和放量；第四，重新验证时要看转化、评分、退货和销量趋势；第五，单品跑通后，才能把方法复制到品牌产品线。这个案例的核心是失败归因、产品迭代、验证和放量节奏。"
  ),
  lesson(
    14,
    "模拟专业交流与综合考核",
    "把14天内容整理成可汇报、可讨论、可追问的表达。",
    "专业表达要遵循结论、依据、动作、风险、复盘，清楚区分事实、判断和建议。",
    ["先给结论降低沟通成本", "依据要来自数据和业务逻辑", "动作要能执行", "风险要提前说清", "复盘要有指标和时间点"],
    ["目标", "数据依据", "动作完成率", "结果指标", "风险项", "复盘周期"],
    ["准备30秒版本", "准备2分钟版本", "列出可能追问", "用数据支撑判断", "形成复盘计划"],
    "只讲建议不讲依据，或只讲数据不讲动作，导致沟通不能推动决策。",
    "我汇报运营判断时会先给结论，再讲依据，然后说动作、风险和复盘。这样别人能快速知道我判断什么、为什么、下一步怎么做。",
    "面对领导或同行交流，我会把表达控制在一个结构里：结论是什么，依据来自哪些数据和业务逻辑，下一步动作是什么，风险在哪里，多久用什么指标复盘。比如爆款打造失败，我不会只说广告没跑好，而会从市场、产品、Listing、广告、评价、库存和利润分层归因。这样表达既不空泛，也不会越界。"
  )
];

const caseMetrics = [
  ["首代产品", "上市失败", "差评暴露产品体验问题", "不能把失败简单归因为流量不足"],
  ["关键输入", "Review反馈", "从真实评价中提炼改良方向", "评价是产品迭代线索"],
  ["第二代产品", "体验改良", "先修产品，再谈放量", "产品承接能力决定广告效率"],
  ["验证动作", "重新测试", "观察转化、评分、退货和销量", "放量前必须小规模验证"],
  ["长期结果", "持续畅销", "公开报道提到NanoSteamer长期保持销售", "单品能力沉淀为品牌能力"]
];

let state = loadState();
let currentModule = clamp(state.currentModule || 1, 1, 14);
let currentCard = 0;
let cardRevealed = false;
let currentSpeak = null;
let currentQuiz = 0;
let selectedQuizOption = null;
let timerSeconds = 120;
let timerId = null;
let recorder = null;
let audioChunks = [];

const $ = id => document.getElementById(id);

function defaultState() {
  return {
    version: 2,
    currentModule: 1,
    learned: [],
    cardKnown: [],
    cardAttempts: [],
    quizCorrect: [],
    quizAttempts: [],
    mistakes: [],
    speakingScores: [],
    writtenAnswers: [],
    practiceCount: 0
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved && saved.version === 2 ? { ...defaultState(), ...saved } : defaultState();
  } catch {
    return defaultState();
  }
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
  $("markSpeakMistake").addEventListener("click", () => addMistake(currentSpeak.id, "口述/文字题", currentSpeak.question, currentSpeak.shortAnswer));
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

function moveModule(delta) {
  currentModule = clamp(currentModule + delta, 1, 14);
  currentCard = 0;
  currentQuiz = 0;
  renderLesson();
  renderCard();
  chooseSpeakingQuestion(false);
  renderQuiz();
  saveState();
}

function markLearned() {
  state.learned = toggleArray(state.learned, currentModule);
  if (state.learned.includes(currentModule) && currentModule < 14) state.currentModule = Math.max(state.currentModule, currentModule + 1);
  state.practiceCount++;
  renderLesson();
  saveState();
}

function toggleArray(arr, value) {
  return arr.includes(value) ? arr.filter(x => x !== value) : [...arr, value];
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
}

function block(title, content, cls = "") {
  return `<section class="lesson-block ${cls}"><h3>${title}</h3>${content}</section>`;
}

function list(items) {
  return `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
}

function shortItems(items, count = 3) {
  return items.slice(0, count).join("、");
}

function cleanSentence(text) {
  return String(text).trim().replace(/[。；;,.，]+$/g, "");
}

function compactText(text, count = 2) {
  return cleanSentence(text)
    .split(/[、，；]/)
    .map(item => item.trim())
    .filter(Boolean)
    .slice(0, count)
    .join("、");
}

function naturalStart(text) {
  const value = cleanSentence(text);
  return /^我/.test(value) ? value : `我认为${value}`;
}

function reviewClause(text) {
  const value = compactText(text, 2);
  if (/^(看|重点看|按|用|参考|每一步|最后)/.test(value)) return value;
  return `用${value}来复盘`;
}

function actionClause(text) {
  const value = compactText(text, 2);
  if (/^(检查|回到|写出|用|逐项|执行|观察|分析|判断|确认)/.test(value)) return value;
  return `从${value}入手`;
}

function riskClause(text) {
  const value = compactText(text, 1);
  if (/^避免/.test(value)) return value;
  return `避免${value}`;
}

function conciseConclusion(m, fallback) {
  const custom = {
    1: "亚马逊爆款不是单纯销量高，而是能持续拿流量、稳转化、控利润和库存的核心ASIN",
    2: "类目机会不是销量越大越好，而是需求、竞争、利润和进入能力同时匹配",
    3: "关键词研究不是堆词，而是把真实搜索需求转成Listing和广告动作",
    4: "竞品拆解不是照抄，而是找到市场门槛、用户痛点和我方突破口",
    5: "产品定位要说清卖给谁、解决什么场景，以及不同变体承担什么角色",
    6: "广告预算不能只看ACOS，要同时看盈亏边界、TACOS和自然增长",
    7: "Listing优化不是做得好看，而是按买家决策路径提升点击和转化",
    8: "SP广告结构要分清拓词、验证、收割和防守，避免数据混在一起",
    9: "搜索词优化是按相关性、转化和排名价值分层处理真实买家查询",
    10: "评价运营不是索评技巧，而是用合规评价和退货反馈建立信任、改进产品",
    11: "库存管理不是只看总库存，而是看FBA可售、日销、在途和补货ETA",
    12: "放量不是简单加预算，而是在转化、利润、评价和库存都能承接时加速",
    13: "NanoSteamer案例的重点是从首代失败中改产品，再用第二代重新验证",
    14: "专业表达要先给结论，再讲依据、动作、风险和复盘"
  };
  if (!fallback || fallback === m.definition) return custom[m.day] || m.definition;
  return compactText(fallback, 2);
}

function structuredReference(m, options = {}) {
  const conclusion = conciseConclusion(m, options.conclusion);
  const evidence = options.evidence || shortItems(m.logic, 2);
  const action = options.action || shortItems(m.actions, 3);
  const risk = options.risk || m.mistakes;
  const review = options.review || `重点看${shortItems(m.metrics, 3)}`;
  return `${naturalStart(conclusion)}，核心看${compactText(evidence, 2)}。先${actionClause(action)}，${riskClause(risk)}，最后${reviewClause(review)}。`;
}

function buildFlashCards() {
  return modules.flatMap(m => lessonCards(m));
}

function lessonCards(m) {
  const cards = [
    [`第${m.day}课「${m.title}」的一句话定义是什么？`, m.definition, extractConcepts(m.definition)],
    [`第${m.day}课「${m.title}」的核心逻辑是什么？`, m.logic.join("；"), m.logic],
    [`第${m.day}课「${m.title}」应该关注哪些关键指标？`, m.metrics.join("、"), m.metrics],
    [`第${m.day}课「${m.title}」的实际动作是什么？`, m.actions.join("；"), m.actions],
    [`第${m.day}课「${m.title}」的常见误区是什么？`, m.mistakes, extractConcepts(m.mistakes)],
    [`第${m.day}课的30秒表达怎么说？`, m.shortSpeech, keyConcepts(m)],
    [`第${m.day}课的2分钟专业表达怎么说？`, m.longSpeech, keyConcepts(m)],
    [`如果领导问第${m.day}课“核心判断是什么”，直接回答哪一句？`, m.definition, extractConcepts(m.definition)],
    [`如果同事问第${m.day}课“要看什么数据”，直接回答什么？`, m.metrics.join("、"), m.metrics],
    [`如果要把第${m.day}课落地执行，直接回答什么？`, m.actions.join("；"), m.actions]
  ];
  return cards.map(([front, back, requiredConcepts]) => ({ module: m.day, front, back, requiredConcepts }));
}

function keyConcepts(m) {
  const custom = {
    1: ["不是单纯销量高", "核心需求", "持续获取流量", "稳定转化", "利润可控", "库存可控", "自然排名", "核心ASIN"],
    2: ["搜索需求", "趋势", "竞争强度", "Review门槛", "利润空间", "进入能力"],
    3: ["核心词", "长尾词", "搜索词报告", "Listing布局", "广告验证", "自然排名"],
    4: ["点击", "转化", "信任", "履约", "差评痛点", "差异化"],
    5: ["目标人群", "核心场景", "引流款", "主推款", "利润款", "价格结构"],
    6: ["ACOS", "TACOS", "盈亏平衡ACOS", "单件利润", "自然增长", "阶段目标"],
    7: ["主图", "标题", "五点", "A+", "Review", "CTR", "CVR"],
    8: ["自动广告", "广泛", "词组", "精准", "商品投放", "搜索词迁移"],
    9: ["相关性", "搜索词", "迁移", "否定", "核心词", "自然排名"],
    10: ["Vine", "Request a Review", "合规", "差评", "退货", "产品迭代"],
    11: ["FBA可售库存", "预测日销", "可售天数", "在途库存", "补货ETA", "广告控速"],
    12: ["放量门槛", "转化稳定", "利润承压", "评价健康", "库存覆盖", "漏斗诊断"],
    13: ["首代失败", "Review反馈", "产品改良", "重新验证", "第二代", "品牌能力"],
    14: ["结论", "依据", "动作", "风险", "复盘", "事实判断建议"]
  };
  return custom[m.day] || extractConcepts(m.definition).concat(m.logic.slice(0, 2), m.metrics.slice(0, 2), m.actions.slice(0, 2));
}

const flashCards = buildFlashCards();

function moduleCards() {
  return flashCards.filter(item => item.module === currentModule);
}

function renderCard() {
  const cards = moduleCards();
  if (currentCard >= cards.length) currentCard = 0;
  const c = cards[currentCard];
  cardRevealed = false;
  $("flashCard").classList.remove("revealed");
  $("cardFront").textContent = c.front;
  $("cardBack").textContent = c.back;
  $("cardCounter").textContent = `第${currentModule}课 · ${currentCard + 1} / ${cards.length}`;
  $("cardWrittenAnswer").value = "";
  $("cardScoreResult").hidden = true;
}

function flipCard() {
  cardRevealed = !cardRevealed;
  $("flashCard").classList.toggle("revealed", cardRevealed);
}

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

function scoreCardAnswer() {
  const activeCard = moduleCards()[currentCard];
  const answer = $("cardWrittenAnswer").value.trim();
  if (!answer) {
    $("cardScoreResult").innerHTML = `<p class="score-feedback">请先输入你的答案，再进行评分。</p>`;
    $("cardScoreResult").hidden = false;
    return;
  }
  const result = assessAnswer(answer, activeCard.back, activeCard.requiredConcepts);
  state.cardAttempts.push({ module: currentModule, question: activeCard.front, answer, ...result, date: new Date().toISOString() });
  state.practiceCount++;
  if (result.total >= 80 && !state.cardKnown.includes(activeCard.front)) state.cardKnown.push(activeCard.front);
  if (result.total < 60) addMistake(`card-${activeCard.front}`, `第${currentModule}课闪卡`, activeCard.front, activeCard.back, false);
  $("cardScoreResult").innerHTML = scoreMarkup(result, true);
  $("cardScoreResult").hidden = false;
  cardRevealed = true;
  $("flashCard").classList.add("revealed");
  saveState();
}

function moduleSpeakingQuestions() {
  const m = modules[currentModule - 1];
  return [
    speak(
      "同行交流",
      "系统学习原文",
      `请用系统学习里的30秒表达说明第${m.day}课「${m.title}」。`,
      m.shortSpeech,
      m.longSpeech
    ),
    speak(
      "领导追问",
      "系统学习原文",
      `如果领导问“第${m.day}课的一句话定义是什么”，直接回答什么？`,
      m.definition,
      m.longSpeech
    ),
    speak(
      "跨部门协作",
      "系统学习原文",
      `如果要把第${m.day}课落地到工作中，实际动作是什么？`,
      m.actions.join("；"),
      `关键指标：${m.metrics.join("、")}`
    ),
    speak(
      "领导追问",
      "系统学习原文",
      `第${m.day}课最容易踩的误区是什么？`,
      m.mistakes,
      `核心逻辑：${m.logic.join("；")}`
    )
  ];
}

function speak(category, difficulty, question, shortAnswer, longAnswer) {
  return { id: `s-${currentModule}-${category}-${question}`, category, difficulty, question, module: currentModule, shortAnswer, longAnswer };
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
  state.writtenAnswers.push({ questionId: currentSpeak.id, question: currentSpeak.question, answer, date: new Date().toISOString() });
  state.practiceCount++;
  $("writtenStatus").textContent = "已保存。请对照参考答案检查是否包含结论、依据、动作、风险和复盘。";
  renderReferenceAnswer(answer);
  $("referenceAnswer").hidden = false;
  $("selfScore").hidden = false;
  $("showReference").textContent = "收起参考答案";
  $("showReference").setAttribute("aria-expanded", "true");
  saveState();
}

function renderReferenceAnswer(userAnswer = "") {
  $("referenceAnswer").innerHTML = `${userAnswer ? `<div class="user-answer"><h3>你的文字答案</h3>${escapeHtml(userAnswer)}</div>` : ""}
    <h3>参考表达</h3>${formatReferenceHtml(currentSpeak.shortAnswer)}<p><b>展开时可补充：</b></p>${formatReferenceHtml(currentSpeak.longAnswer)}`;
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
  state.speakingScores.push({ question: currentSpeak.question, date: new Date().toISOString(), scores, average: scores.reduce((a, b) => a + b, 0) / scores.length });
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
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    $("startTimer").textContent = "继续计时";
    return;
  }
  if (timerSeconds <= 0) timerSeconds = 120;
  $("startTimer").textContent = "暂停";
  timerId = setInterval(() => {
    timerSeconds--;
    $("timerDisplay").textContent = `${String(Math.floor(timerSeconds / 60)).padStart(2, "0")}:${String(timerSeconds % 60).padStart(2, "0")}`;
    if (timerSeconds <= 0) {
      clearInterval(timerId);
      timerId = null;
      $("startTimer").textContent = "重新计时";
    }
  }, 1000);
}

async function toggleRecording() {
  if (recorder?.state === "recording") {
    recorder.stop();
    $("recordAudio").textContent = "本地录音";
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    $("recordStatus").textContent = "当前浏览器不支持录音，仍可使用计时、文字作答和自评。";
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
      $("recordStatus").textContent = "录音已生成，可立即回放自评；刷新页面后会清除。";
      stream.getTracks().forEach(track => track.stop());
    };
    recorder.start();
    $("recordAudio").textContent = "停止录音";
    $("recordStatus").textContent = "录音中，仅在当前浏览器页面内处理。";
  } catch {
    $("recordStatus").textContent = "未获得麦克风权限。你仍可使用计时、参考答案和自评功能。";
  }
}

function moduleQuizQuestions() {
  const m = modules[currentModule - 1];
  return [
    quiz(
      `第${m.day}课「${m.title}」最正确的学习方式是什么？`,
      ["只背一个指标，遇到问题时直接套用", "先讲结论，再结合判断框架、指标、动作和风险完整表达", "只看销量或ACOS，哪个变化大就优先处理", "先找一个竞品动作照抄，再看结果"],
      1,
      structuredReference(m, { action: "用结论、依据、动作、风险、复盘表达", review: "看自己是否能清楚复述" }),
      m.day
    ),
    fillQuiz(
      `补全第${m.day}课的完整判断框架：至少写出两个核心逻辑和两个关键指标。`,
      [...m.logic.slice(0, 2), ...m.metrics.slice(0, 2)],
      structuredReference(m, { conclusion: "本题要补全判断框架", evidence: shortItems(m.logic, 3), action: "写出核心逻辑和关键指标", risk: "不要只写一个零散指标", review: `参考${shortItems(m.metrics, 4)}` }),
      "填空题不强求顺序，重点是覆盖本课核心逻辑和关键指标。",
      m.day
    ),
    essayQuiz(
      `请完整概括第${m.day}课「${m.title}」的核心判断：结论、依据、动作分别是什么？`,
      structuredReference(m, { evidence: shortItems(m.logic, 3), action: shortItems(m.actions, 3), review: `看${shortItems(m.metrics, 3)}` }),
      "回答应包含本课核心结论、至少一个判断依据和一个落地动作。",
      m.day
    ),
    essayQuiz(
      `第${m.day}课常见误区是什么？如果遇到这个误区，你会如何纠正？`,
      structuredReference(m, { conclusion: "常见误区会导致判断失真", evidence: m.mistakes, action: `回到${shortItems(m.logic, 2)}，再执行${shortItems(m.actions, 2)}`, risk: "不要用单一表象下结论", review: `用${shortItems(m.metrics, 3)}复查` }),
      "回答应包含误区、纠正方法和复盘标准。",
      m.day
    ),
    essayQuiz(
      `把第${m.day}课落地到工作中，你会先做哪三件事？分别看什么指标？`,
      structuredReference(m, { conclusion: "落地要先变成可执行动作", evidence: shortItems(m.logic, 2), action: shortItems(m.actions, 3), review: `看${shortItems(m.metrics, 4)}` }),
      "回答应包含可执行动作和对应指标，而不是只讲概念。",
      m.day
    )
  ];
}

function quiz(question, options, answer, explanation, module) {
  return { id: `q-${module}-${question}`, type: "choice", question, options, answer, explanation, module };
}

function fillQuiz(question, keywords, reference, explanation, module) {
  return { id: `q-fill-${module}-${question}`, type: "fill", question, keywords, reference, explanation, module };
}

function essayQuiz(question, reference, explanation, module) {
  return { id: `q-essay-${module}-${question}`, type: "essay", question, reference, explanation, module };
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
    answerArea = q.options.map((o, i) => `<button class="option" data-option="${i}">${String.fromCharCode(65 + i)}. ${o}</button>`).join("");
  } else if (type === "fill") {
    answerArea = `<input id="quizTextAnswer" class="quiz-text-input" type="text" placeholder="填写完整公式或关键词"><p class="quiz-hint">多个空可以直接写在同一句中，顺序不限。</p>`;
  } else {
    answerArea = `<textarea id="quizTextAnswer" class="quiz-text-input" placeholder="请写出你的判断、依据、处理动作和风险复盘..."></textarea><p class="quiz-hint">系统按关键概念覆盖率和答案完整度进行本地评分。</p><details class="quiz-answer-hint"><summary>查看参考答案提示</summary>${formatReferenceHtml(q.reference)}</details>`;
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
      correct = matched.length >= Math.ceil(q.keywords.length * 0.6);
      feedback = `<b>${correct ? "填空基本正确" : `准确度：${accuracy}%`}</b><br>已识别：${matched.length ? matched.join("、") : "暂无"}<br><b>参考答案：</b>${formatReferenceHtml(q.reference)}${q.explanation}`;
    } else {
      const result = assessAnswer(answer, q.reference);
      correct = result.total >= 70;
      feedback = scoreMarkup(result, false, q.reference, q.explanation);
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

function nextQuiz() {
  const mistakeIds = new Set(state.mistakes.map(m => m.id));
  const pool = moduleQuizQuestions();
  const weighted = pool.flatMap((q, i) => mistakeIds.has(q.id) ? [i, i, i] : [i]);
  const alternatives = weighted.filter(i => i !== currentQuiz);
  currentQuiz = alternatives.length ? alternatives[Math.floor(Math.random() * alternatives.length)] : 0;
  renderQuiz();
}

function assessAnswer(answer, reference, requiredConcepts = []) {
  const normalizedAnswer = normalizeText(answer);
  const normalizedReference = normalizeText(reference);
  const concepts = (requiredConcepts.length ? requiredConcepts : extractConcepts(reference)).filter(Boolean).slice(0, 12);
  if (normalizedAnswer === normalizedReference) {
    return { concepts, matched: concepts, missed: [], accuracy: 100, completeness: 100, total: 100 };
  }
  const matched = concepts.filter(concept => conceptMatch(normalizedAnswer, concept));
  const missed = concepts.filter(concept => !matched.includes(concept));
  const conceptCoverage = concepts.length ? matched.length / concepts.length : 1;
  if (conceptCoverage === 1) {
    return { concepts, matched, missed: [], accuracy: 100, completeness: 100, total: 100 };
  }
  const similarity = diceSimilarity(normalizedAnswer, normalizedReference);
  const containment = normalizedAnswer.includes(normalizedReference) || normalizedReference.includes(normalizedAnswer);
  let accuracy = Math.round((conceptCoverage * 0.75 + similarity * 0.25) * 100);
  if (containment) accuracy = Math.max(accuracy, 96);
  if (conceptCoverage >= 0.75 && normalizedAnswer.length >= 24) accuracy = Math.max(accuracy, 90);
  const lengthRatio = Math.min(1, normalizedAnswer.length / Math.max(24, normalizedReference.length * 0.55));
  const answerPoints = answer.split(/[，。；、\n]/).map(x => x.trim()).filter(Boolean).length;
  const referencePoints = reference.split(/[，。；、\n]/).map(x => x.trim()).filter(Boolean).length;
  const structureRatio = Math.min(1, answerPoints / Math.max(1, Math.min(referencePoints, 5)));
  let completeness = Math.round((conceptCoverage * 0.6 + lengthRatio * 0.25 + structureRatio * 0.15) * 100);
  if (containment) completeness = Math.max(completeness, 96);
  if (conceptCoverage >= 0.75 && normalizedAnswer.length >= 32) completeness = Math.max(completeness, 90);
  accuracy = Math.min(100, accuracy);
  completeness = Math.min(100, completeness);
  return { concepts, matched, missed, accuracy, completeness, total: Math.round(accuracy * 0.65 + completeness * 0.35) };
}

function extractConcepts(reference) {
  const stop = new Set(["结论", "判断框架", "观察指标", "执行动作", "常见误区", "先做", "同步观察", "回答应包含"]);
  return [...new Set(String(reference)
    .split(/[，。；：、\n()（）\/=+\-]/)
    .map(x => x.trim())
    .filter(x => x.length >= 2 && !stop.has(x))
    .flatMap(x => x.length <= 16 ? [x] : x.split(/[和与及并或把将从再]/).map(p => p.trim()).filter(p => p.length >= 2 && p.length <= 18)))]
    .slice(0, 12);
}

function normalizeText(value) {
  return String(value).toLowerCase()
    .replace(/百分之/g, "%")
    .replace(/广告成本销售比/g, "acos")
    .replace(/广告花费占比/g, "tacos")
    .replace(/转化率/g, "cvr")
    .replace(/点击率/g, "ctr")
    .replace(/[\s，。；：、.（）()\-_'"]/g, "");
}

const conceptAliases = {
  "核心需求": ["真实需求", "用户需求", "核心市场需求"],
  "不是单纯销量高": ["不只是销量高", "不能只看销量", "并不是单纯的销量高", "短期销量高不等于爆款"],
  "持续获取流量": ["持续流量", "稳定获得流量", "持续获得流量"],
  "稳定转化": ["转化稳定", "持续转化", "稳定cvr"],
  "利润可控": ["可控利润", "盈利可控", "利润能承接", "利润和库存可控"],
  "库存可控": ["库存稳定", "库存安全", "库存能承接", "利润和库存可控"],
  "自然排名": ["自然位", "关键词自然排名", "沉淀自然排名"],
  "核心asin": ["核心单品", "核心产品"],
  "市场容量": ["需求规模", "类目容量", "搜索需求"],
  "竞争强度": ["竞争门槛", "头部集中", "review门槛"],
  "利润空间": ["毛利", "价格带", "成本结构"],
  "进入能力": ["供应链能力", "产品能力", "运营能力"],
  "fba可售库存": ["fba库存", "可售库存"],
  "可售天数": ["库存天数", "可支撑天数"]
};

function conceptMatch(normalizedAnswer, concept) {
  const normalizedConcept = normalizeText(concept);
  if (!normalizedConcept) return false;
  if (normalizedAnswer.includes(normalizedConcept)) return true;
  const aliases = conceptAliases[normalizedConcept] || [];
  if (aliases.some(alias => normalizedAnswer.includes(normalizeText(alias)))) return true;
  return normalizedConcept.length >= 4 && bestLocalSimilarity(normalizedAnswer, normalizedConcept) >= 0.62;
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
      if (best >= 0.9) return best;
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

function scoreMarkup(result, compact = false, reference = "", explanation = "") {
  return `
    <div class="score-summary">
      <div><span>综合得分</span><strong>${result.total}</strong></div>
      <div><span>准确度</span><strong>${result.accuracy}%</strong></div>
      <div><span>完整度</span><strong>${result.completeness}%</strong></div>
    </div>
    <div class="score-feedback"><b>已覆盖：</b>${result.matched.length ? result.matched.join("、") : "暂未识别到关键概念"}<br>
    <b>${result.missed.length ? "建议补充" : "评分说明"}：</b>${result.missed.length ? result.missed.join("、") : "核心答案已完整；扩展内容只用于帮助表达，不会强行扣分。"}<br>
    ${reference ? `<b>参考答案：</b>${formatReferenceHtml(reference)}${explanation}<br>` : ""}
    <small>本评分采用本地关键词、同义表达和长度规则，仅用于训练。</small></div>`;
}

function addMistake(id, type, question, answer, shouldSave = true) {
  if (!state.mistakes.some(m => m.id === id)) state.mistakes.push({ id, type, question, answer, date: new Date().toISOString() });
  if (shouldSave) { state.practiceCount++; saveState(); }
}

function renderMistakes() {
  if (!state.mistakes.length) {
    $("mistakeList").innerHTML = `<div class="empty"><h3>错题本目前是空的</h3><p>闪卡选择“还没记住”、测验答错或主动收藏追问后，会出现在这里。</p></div>`;
    return;
  }
  $("mistakeList").innerHTML = state.mistakes.map(m => `
    <article class="mistake-item"><small>${m.type}</small><h3>${m.question}</h3><p>${m.answer}</p><button class="text-button" data-remove-mistake="${m.id}">标记已掌握</button></article>`).join("");
  document.querySelectorAll("[data-remove-mistake]").forEach(btn => btn.addEventListener("click", () => {
    state.mistakes = state.mistakes.filter(m => m.id !== btn.dataset.removeMistake);
    saveState();
    renderMistakes();
  }));
}

function clearMistakes() {
  if (!state.mistakes.length || !confirm("确定清空错题本吗？")) return;
  state.mistakes = [];
  saveState();
  renderMistakes();
}

function renderCase() {
  $("caseContent").innerHTML = `
    <article class="case-hero"><h3>Pure Daily Care / NanoSteamer</h3><p>公开报道中的经典路径：首代产品失败，团队从Review和用户反馈中找到体验问题，改良第二代后重新验证并放量。这里用于训练复盘框架，不把公开资料中没有的数据虚构成结论。</p></article>
    <div class="data-notice"><b>训练重点：</b>失败归因、Review反馈、产品迭代、小规模验证、再放量。</div>
    <div class="case-grid">${caseMetrics.map(m => `<article class="case-metric"><span>${m[0]}</span><strong>${m[1]}</strong><small>${m[2]}</small><p>${m[3]}</p></article>`).join("")}</div>
    <section class="case-section"><h3>案例复盘问题</h3><p class="case-task">如果让你复盘NanoSteamer，你要如何解释“为什么首代失败不是广告问题，为什么第二代可以重新放量”？</p>
    <details><summary>参考答案</summary><p>我会从五层复盘：第一，首代失败说明市场需求存在不等于产品能承接；第二，Review和差评暴露真实体验问题，是产品改良输入；第三，第二代先修产品体验，再重新验证Listing和广告；第四，放量前要观察转化、评分、退货和销量趋势；第五，单品跑通后才能沉淀品牌和扩品能力。</p></details></section>
    <section class="case-section"><h3>公开资料来源</h3><p><a href="https://www.businessinsider.com/amazon-selling-advice-how-to-pick-products-ecommerce-top-seller-2025-9" target="_blank" rel="noopener">Business Insider关于Dave Damavandy与NanoSteamer的报道</a></p></section>`;
}

function renderProgress() {
  const learned = state.learned.length;
  const cards = state.cardKnown.length / flashCards.length;
  const totalQuiz = modules.length * moduleQuizQuestions().length;
  const quizRate = state.quizCorrect.length / Math.max(1, totalQuiz);
  const speaking = state.speakingScores.length ? Math.min(1, state.speakingScores.reduce((s, x) => s + x.average, 0) / state.speakingScores.length / 5) : 0;
  const overall = Math.round((learned / 14 * 0.5 + cards * 0.2 + quizRate * 0.2 + speaking * 0.1) * 100);
  $("overallScore").textContent = `${overall}%`;
  $("overallBar").style.width = `${overall}%`;
  $("studySummary").textContent = `完成${learned}/14天 · 累计练习${state.practiceCount}次`;
  const nextDay = modules.find(m => !state.learned.includes(m.day))?.day || 14;
  const today = modules[nextDay - 1];
  $("todayDay").textContent = `DAY ${String(today.day).padStart(2, "0")}`;
  $("todayTitle").textContent = today.title;
  $("todayGoal").textContent = today.goal;
  const mapGroups = [
    ["01", "机会判断", "市场、趋势、关键词", [1, 2, 3]],
    ["02", "竞品与产品", "竞品、产品、利润", [4, 5, 6]],
    ["03", "转化建设", "Listing、评价", [7, 10]],
    ["04", "广告增长", "结构、搜索词、放量", [8, 9, 12]],
    ["05", "库存与复盘", "FBA、案例、表达", [11, 13, 14]]
  ];
  $("knowledgeMap").innerHTML = mapGroups.map(g => {
    const done = g[3].every(x => state.learned.includes(x));
    const current = g[3].includes(nextDay);
    return `<article class="map-node ${done ? "done" : current ? "current" : ""}"><b>${g[0]}</b><span>${g[1]}</span><small>${g[2]}</small></article>`;
  }).join("");
  $("curriculum").innerHTML = modules.map(m => `<article class="day-card ${state.learned.includes(m.day) ? "done" : m.day === nextDay ? "current" : ""}"><b>DAY ${String(m.day).padStart(2, "0")}</b><span>${m.title}</span><small>${state.learned.includes(m.day) ? "已掌握" : m.day === nextDay ? "今日重点" : "待学习"} · 30-45分钟</small></article>`).join("");
}

function exportProgress() {
  const report = { exportedAt: new Date().toISOString(), summary: { learnedDays: state.learned.length, knownCards: state.cardKnown.length, correctQuiz: state.quizCorrect.length, practices: state.practiceCount }, ...state };
  const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `amazon-hit-learning-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
}

function resetProgress() {
  if (!confirm("确定重置全部学习记录吗？这会清除本地进度、错题、文字答案和评分。")) return;
  localStorage.removeItem(STORAGE_KEY);
  state = defaultState();
  currentModule = 1;
  currentCard = 0;
  currentQuiz = 0;
  renderLesson();
  renderCard();
  chooseSpeakingQuestion(false);
  renderQuiz();
  renderMistakes();
  renderProgress();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

function formatReferenceHtml(value) {
  return `<p class="structured-reference">${escapeHtml(value).replace(/\n/g, "<br>")}</p>`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

init();
