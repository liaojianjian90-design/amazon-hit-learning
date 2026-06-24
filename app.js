const STORAGE_KEY = "amazon-hit-learning-v2";

function lesson(day, title, goal, definition, logic, metrics, actions, mistakes, shortSpeech, longSpeech) {
  return { day, title, goal, definition, logic, metrics, actions, mistakes, shortSpeech, longSpeech };
}

const hitModules = [
  lesson(1, "爆款定义与完整经营模型", "能区分短期销量款与可持续核心单品，并讲清爆款形成条件。", "亚马逊爆款不是单纯销量高，而是在核心需求下持续获得流量、稳定转化、利润和库存可控，并能沉淀自然排名的核心商品。", ["需求真实：目标关键词有稳定搜索需求。", "供给有优势：产品、价格或体验至少一项形成差异。", "转化闭环：商品页面、评价、价格和履约共同降低决策阻力。", "经营可持续：广告、利润、库存与售后能够长期承接。"], ["销量与销售额", "访问量与页面转化率", "广告销售占比与广告花费占总销售额", "自然关键词排名", "贡献利润与库存可售天数"], ["先定义目标市场和核心词。", "拆解竞品流量、转化与评价门槛。", "建立产品、商品页面、广告、库存闭环。", "按周判断继续、优化或停止。"], "只看销量或类目排名；把大额广告等同于打造爆款；忽略毛利和库存；用短期低价订单判断长期需求。", "我理解的爆款不是短期冲高销量，而是一个商品在核心关键词下形成稳定曝光和转化，同时广告、利润、评价与库存都能承接。判断是否成功，要看自然排名、转化率、广告花费占总销售额和贡献利润能否逐步进入稳定区间。", "我会把爆款看成一个经营模型。前端是市场需求和关键词，中间是产品、价格、商品页面与评价形成转化，后端是广告、库存和利润承接。起盘阶段可以用广告获取数据和订单，但不能长期只靠亏损投放。真正进入稳定期后，核心词自然排名、自然订单占比和评价资产应该持续改善，同时补货节奏和售后风险可控。"),
  lesson(2, "市场容量、趋势与类目判断", "能判断一个类目是否值得进入。", "类目机会不是销量大，而是需求、竞争、利润和进入能力同时成立的细分市场。", ["需求真实：核心词和长尾词有稳定搜索趋势。", "竞争可切入：头部、评价门槛和价格带没有锁死机会。", "利润能承接：售价能覆盖产品、物流、广告和退货成本。", "我方能进入：产品、供应链、合规和履约能真正落地。"], ["搜索趋势", "头部商品销量与评价门槛", "主流价格带", "新品与类目排名变化", "预估净利率"], ["建立关键词池。", "记录前20名竞品的价格、评分、评价量和卖点。", "按需求、竞争和利润评分。", "输出进入、暂缓或放弃结论。"], "只看总销量；用单日类目排名判断市场；看到头部销量高就盲目进入；忽略认证、物流和退货成本。", "我判断一个类目值不值得做，不会只看销量，而是同时看搜索需求、竞争门槛、价格带、用户痛点和利润空间。只有需求、差异和利润同时成立，才值得进入。", "我判断类目时先看需求，确认核心词和长尾词是否稳定；再看竞争，分析头部集中度、评价门槛、新品机会和价格带；然后测算利润，确认售价能覆盖产品、物流、广告和退货成本；最后结合产品差异、供应链、合规和履约能力，输出进入、暂缓或放弃结论。"),
  lesson(3, "关键词研究与搜索需求", "能识别关键词角色，并把词库用于商品页面和广告投放。", "关键词是买家需求的文字表达。关键词研究不是找流量最大的词，而是找到与产品高度相关、能够带来成交的搜索意图。", ["核心词承接品类需求，决定主战场。", "属性词说明规格、功能和适配条件。", "场景词和痛点词更接近真实使用需求。", "竞品词用于商品投放或防守，不应硬塞进商品页面。"], ["搜索量与搜索趋势", "关键词相关性", "广告点击率", "广告转化率", "搜索词订单量", "自然关键词排名"], ["收集品牌分析、广告搜索词和竞品词。", "按核心词、属性词、场景词、问题词和竞品词分组。", "把高相关词布局到标题、五点描述、详情页和后台词。", "通过广告验证点击和成交质量。"], "把搜索量等同于购买意图；标题重复堆词；把低相关大词当核心词；只看投放词，不看买家真实搜索词。", "关键词研究不是找流量最大的词，而是找到与产品高度相关、能够成交的搜索意图。我会先分核心词、属性词和场景词，再通过广告搜索词报告验证点击率、转化率和订单质量。", "我会先建立词库，再安排关键词在商品页面和广告中的角色。核心高相关词进入标题和精准投放；属性词和场景词进入五点描述、详情页和词组投放；自动和广泛投放负责拓词。判断一个词是否值得加预算，不只看曝光，还要看相关性、点击率、转化率、订单量和自然排名。最终目标不是词表好看，而是让关键词带来稳定流量和订单。"),
  lesson(4, "竞品与评价拆解", "能从竞品表现倒推买家决策和我方突破口。", "竞品拆解不是照抄页面，而是找出对手为什么被点击、为什么成交、为什么被差评。", ["主图和价格影响点击。", "卖点、评价和履约影响转化。", "好评说明买家购买理由。", "差评暴露产品和表达机会。"], ["价格与优惠", "评分、评价量和近期评价速度", "主图信息密度", "核心词位置", "差评主题频率"], ["选择主竞品和参考竞品。", "建立竞品快照。", "按点击、转化、信任和履约拆解。", "统计好评和差评。", "形成追平、差异化和不可复制清单。"], "只看头部；把评价多当成唯一壁垒；复制文案；忽略近期差评。", "我拆竞品不照抄页面，而是看它为什么被点击、为什么成交、为什么被差评。最后把信息分成必须追平、可以差异化和必须回到产品解决的三类。", "我会先选头部竞品看门槛，再选参考竞品看切入机会。点击层看主图、价格和优惠；转化层看卖点、评价、规格和履约；评价层重点统计好评中的购买理由和差评中的高频问题。最后输出追平项、差异化项和产品缺陷项，避免把产品问题误当成页面问题。"),
  lesson(5, "产品定位、版本与价格结构", "能区分首代、改良和延伸款角色，不只依赖低价。", "产品定位是明确产品卖给谁、在什么场景使用、解决什么问题，并用价格和版本结构降低买家选择成本。", ["首代验证需求。", "改良款解决集中问题。", "组合或升级款承担客单和利润。", "版本关系必须真实且合规。"], ["各版本访问量、转化率和销量占比", "价格弹性", "贡献利润", "评价共享合规性", "退货原因"], ["定义每个版本的人群和角色。", "测算价格、优惠和广告后的单件利润。", "表达共同价值和版本差异。", "按表现分配库存和广告。"], "用最低价版本引来点击却难以选择；所有版本共用预算；不合规合并版本；只看销售额不看单件利润。", "产品定位要讲清卖给谁、用在什么场景、解决什么问题。版本和价格各有角色，不能只靠低价拉流量，也不能让买家看不懂差异。", "我会先定义目标人群和使用场景，再安排版本角色：首代验证需求，改良款解决高频问题，组合或升级款承担客单和利润。每个版本都要算清广告后的单件利润，并在页面中说明共同价值和差异。上线后按访问量、转化、利润和退货原因分配广告与库存。"),
  lesson(6, "利润、盈亏平衡广告成本与预算", "能计算盈亏平衡广告成本，并理解广告成本与整体广告花费占比的分工。", "广告是否可接受，要看贡献利润和阶段目标，不能用统一广告成本标准处理所有商品。", ["单件广告前利润等于售价减产品、物流、配送、佣金和其他成本。", "盈亏平衡广告成本等于单件广告前利润除以售价。", "广告成本看广告效率。", "广告花费占总销售额看整体依赖。"], ["毛利和贡献利润", "广告成本", "广告花费占总销售额", "广告订单占比", "每单广告成本", "退款后真实利润"], ["确认完整成本。", "按商品和站点计算盈亏平衡线。", "设定起盘期预算和期限。", "按周观察自然订单变化。"], "认为广告成本越低越好；混用币种；忽略退款、优惠和仓储；用广告销售额代替总销售额。", "我不会只看广告成本高低。广告成本看单次投放效率，盈亏平衡广告成本看是否亏损，广告花费占总销售额看整体是否依赖广告，三者要结合商品阶段和贡献利润判断。", "我先算清售价扣除产品、物流、配送、佣金和其他成本后的广告前利润，再得出盈亏平衡广告成本。起盘期允许部分核心词投入偏高，但要设预算、周期和自然增长目标；成熟期更看重真实利润和整体广告依赖。每周还要把退款、优惠和仓储放回利润表，避免账面盈利。"),
  lesson(7, "商品页面内容与转化逻辑", "能按买家决策顺序设计商品页面。", "商品页面的任务是让正确买家理解产品、确认适配、相信承诺并购买。", ["主图影响点击。", "标题说明品类、属性和适配。", "五点描述讲利益、证据和风险。", "详情页用场景和对比完成说服。"], ["点击率", "页面转化率", "退货率", "问答和客服高频问题", "版本转化差异"], ["用关键词和评价确定信息优先级。", "首屏讲清产品、适合谁和核心优势。", "明确规格、兼容性和限制。", "一次只测试一个变量。"], "只追关键词密度；夸大性能；隐藏兼容限制；一次改多个内容。", "商品页面不是堆信息，而是按买家决策顺序降低顾虑：主图先争取点击，标题说明相关性，五点和详情页讲清价值与限制，评价提供信任。", "我会先用关键词和评价确定买家最关心什么，再把首屏信息集中在产品是什么、适合谁、有什么优势。主图负责点击，标题负责品类和适配，五点描述补充利益、证据和限制，详情页用场景和对比降低理解成本。优化后只改一个变量，并用点击率、转化率、退货和客服问题验证。"),
  lesson(8, "商品推广广告结构", "能建立不同任务的广告结构并控制预算。", "广告结构要把拓词、验证、收割和防守分开，才能让数据可解释、预算可控制。", ["自动投放发现机会。", "广泛和词组投放扩展流量。", "精准投放承接高价值词。", "商品投放用于截流和防守。"], ["曝光", "点击率", "单次点击成本", "转化率", "订单", "广告成本", "整体广告占比", "预算利用率"], ["按站点、商品和目标拆分活动。", "给不同任务设置独立预算。", "建立迁移和否定规则。", "避免内部竞争。"], "结构过于碎片化；自动投放没有否定；只看广告成本关词；预算集中在断货风险商品；活动之间互相抢流量。", "广告结构不是活动越多越好，而是让拓词、验证、收割和防守各自有任务、预算和判断标准。这样才能知道订单从哪里来，也能控制无效消耗。", "我会用自动投放发现搜索词和商品机会，用广泛和词组投放验证需求方向，用精准投放收割已验证的高价值词，用商品投放做竞品截流或防守。每类活动独立预算，并按搜索词迁移和否定，避免同一个词在多个活动里无意义竞争。"),
  lesson(9, "搜索词分析和广告优化", "能用样本和相关性判断加价、降价、迁词和否定。", "广告优化的对象是真实搜索词，相关性、样本、转化和利润共同决定动作。", ["高相关且有订单的词迁入精准投放。", "高相关无订单先检查样本、价格和页面。", "低相关有点击无订单要否定或降低探索。", "高成本核心词不能机械暂停。"], ["搜索词点击和订单", "转化率与单次获客成本", "广告成本", "广告位置", "自然排名"], ["使用7至14天观察窗口。", "设置无单点击阈值。", "小幅调整竞价并记录。", "把预算转向安全高效流量。"], "数据不足就频繁修改；只看活动平均值；混淆投放词和搜索词；忽略归因窗口。", "广告优化要看买家真实搜索词，不是只看活动平均值。相关性、样本量、转化和利润一起决定加价、降价、迁移还是否定。", "我会按7至14天窗口看搜索词。高相关且有订单的词迁入精准；高相关无订单先看点击样本、价格和页面；低相关有点击无订单就否定或降低探索；核心词即使广告成本高，也要同时看自然排名和整体利润。每次只小幅调整并记录结果。"),
  lesson(10, "试用计划、评价、退货与合规", "能合规积累评价，并把评价用于产品改进。", "评价必须合规积累，重点是真实反馈和解决差评、退货的根因。", ["符合条件时使用试用计划。", "使用平台评价请求功能。", "禁止返现、礼品和筛选满意买家。", "评价、退货和买家之声要转成改进清单。"], ["评分与评价数量", "近期评价速度", "差评主题", "退货率", "买家之声"], ["上线前排查质量和说明问题。", "评估是否参加试用计划。", "统一使用允许的评价请求方式。", "每周归类差评责任。"], "先筛满意买家再索评；用奖励换评价；只追五星；压制负面反馈。", "评价运营的重点不是追五星，而是合规获得真实反馈，并把差评和退货变成产品、页面和包装的改进清单。", "新品阶段我会先确保产品质量和说明清楚，符合条件时使用试用计划，并统一使用平台允许的评价请求方式。我不会返现、送礼或只向满意买家索评。每周把评价、退货和买家之声按产品缺陷、描述不清、兼容误购和物流损坏归类，推动对应改进。"),
  lesson(11, "亚马逊物流库存、补货和断货风险", "能把销售速度、到货时间和安全库存放进同一模型。", "库存管理是在不断货和不积压之间控制销售速度，放量必须服从可售天数和补货确定性。", ["可售天数等于可售库存除以预测日销。", "库存覆盖要考虑生产、运输、入仓和缓冲。", "在途库存只有到货时间可靠时才可计入。", "断货前要保护自然排名和核心词。"], ["可售库存", "在途和预计到货", "预测日销", "可售天数", "周转和仓储"], ["按商品和站点滚动预测。", "设置补货和限流阈值。", "对低效非核心流量先降速。", "到货不确定时用调价、限流和履约方案控制风险。"], "只看总库存；把全部在途都算可售；临近断货还猛冲；所有广告一起削减。", "库存不是只看有多少件，而是看还能卖多少天、补货何时可靠到仓。断货风险出现时，要优先削低效流量，谨慎保护核心词和自然排名。", "我会按商品和站点用可售库存除以预测日销计算可售天数，再与生产、运输、入仓和安全缓冲后的可靠到货时间比较。库存紧张时先降低低相关、低效率流量，核心词和自然排名谨慎保护；到货不确定时再结合限流、调价和履约方案控制销售速度。"),
  lesson(12, "放量门槛与异常诊断", "能用门槛决定是否加预算，并按漏斗定位异常。", "放量不是销量一涨就加预算，而是产品、转化、利润和库存同时达到门槛后，才扩大有效流量。", ["曝光低先检查收录、相关性、竞价和预算。", "点击率低检查主图、标题、价格和评分。", "点击高转化低检查页面、评价、适配和流量质量。", "销量增长但利润变差要检查促销和广告依赖。"], ["点击率和转化率", "核心词订单", "广告投入是否可解释", "退货与差评", "库存覆盖"], ["建立放量检查表。", "小幅增加预算和竞价。", "观察归因窗口。", "按漏斗定位问题。"], "一次把预算加倍；同时改价格、页面和广告；只看订单；库存不足仍然放量。", "放量的前提不是销量上涨，而是转化、利润、评价和库存都能承接。先用漏斗找问题，再小步扩大有效流量，才能知道增长是否健康。", "我放量前会检查核心词是否有订单、页面转化是否稳定、广告投入是否在计划内、退货差评是否正常，以及库存能否覆盖。执行时按小幅度加预算或竞价，并经过归因窗口再判断。出现异常就按曝光、点击、转化和利润漏斗定位，不同时改多个变量。"),
  lesson(13, "NanoSteamer经典案例复盘", "能从首代失败到二代放大的过程复盘经营逻辑。", "这个案例的价值不在复制广告技巧，而在把失败反馈转成可持续竞争力。", ["首代产品的差评说明产品问题。", "清理问题库存，不用广告掩盖缺陷。", "从评价中提炼改款方向。", "二代先验证，再放大。"], ["差评主题频率", "改款后的评分和退货", "页面转化", "自然排名", "广告依赖和利润"], ["分类差评。", "定义产品缺陷。", "小批量验证改款。", "达到门槛后再扩大广告、库存和产品线。"], "把失败全部归因于广告；忽略差评；只改页面不改产品；二代一开始大量备货；把品牌规模全部归功于单品。", "NanoSteamer案例说明，首代失败不一定是流量问题。先从差评找到产品缺陷，清理问题库存并改款，二代经过验证后再放量，才可能形成长期竞争力。", "我会把这个案例拆成失败归因、产品改良、重新验证和规模放大四步。首代的集中差评先说明产品体验没有过关，不能靠广告掩盖；团队应从真实反馈中定义改款方向，再用小批量验证评分、退货、转化和利润。达到门槛后才扩大广告和库存。公开资料没有披露所有经营数据，复盘时要明确数据边界。"),
  lesson(14, "模拟专业交流与综合考核", "能面对不同对象，把结论、证据、动作和边界说清楚。", "专业表达不是堆术语，而是在有限时间内给出可验证的判断、行动和风险边界。", ["先给结论，再给证据。", "说明动作和观察周期。", "说明风险和缺失数据。", "区分事实、判断和建议。"], ["表达结构完整度", "数据准确性", "平台术语准确性", "行动可执行性", "风险边界"], ["先用30秒说核心结论。", "再用2分钟补充依据和例子。", "被追问时回到数据和假设。", "结束时给出复盘节点。"], "铺垫太多；没有证据就报数字；被追问后换话题；只有建议没有验收标准。", "专业表达的重点不是术语多，而是让对方快速听懂结论、证据、下一步动作和风险边界，并知道何时复盘。", "我会先用30秒说结论和最关键依据，再用2分钟补充数据、动作、风险和观察周期。面对追问时，不确定的数据要说明假设和缺口，不能把判断说成事实。最后给出复盘节点和验收标准，让沟通变成可执行的计划。")
];

const gptModules = [
  {
    day: 1,
    title: "用GPT写Listing和广告选词",
    goal: "记住视频的9步方法，并能完整说明“运营定规则，GPT做执行”。",
    definition: "先用竞品和关键词数据筛出相关词，再让GPT生成广告词和Listing。",
    sections: [
      ["核心流程", ["相似竞品 → H10关键词 → 删无搜索量词 → 按自然排名筛词 → 用竞品属性验证 → 生成广告词 → 写后台词、标题和五点。"]],
      ["关键规则", ["竞品必须高度相似。", "关键词属性必须被竞品标题和五点描述支持。", "不相关词删除。"]],
      ["广告选词", ["自然排名第1的词做精准匹配。", "多个词重复的核心属性组合成广泛匹配词。"]],
      ["Listing写作", ["后台词删除重复、品牌和侵权词。", "标题写核心词、功能属性和使用场景。", "五点描述参考竞品并自然加入关键词。"]],
      ["核心结论", ["运营先定规则，GPT再按规则执行，不能让GPT自由发挥。"]]
    ],
    shortSpeech: "我会先找高度相似的竞品，从H10下载关键词，再按搜索量、自然排名和产品属性筛词。筛完后，用核心词做精准广告，用重复属性做广泛广告，再让GPT生成后台词、标题和五点描述。重点是运营先定方法，GPT负责执行。",
    longSpeech: "这套方法先找相似竞品并下载关键词数据，删除无搜索量词，再按自然排名保留候选词。接着汇总竞品标题和五点描述，验证关键词里的功能、尺寸和属性，不相关词全部删除。筛完后，把自然排名第1的词用于精准匹配，把重复出现的核心属性组合成广泛匹配词，再生成后台搜索词、标题和五点描述。整个过程不是让GPT自己想，而是运营先把规则写清楚，让GPT按步骤完成。",
    questions: [
      ["定义", "请用一句话说明：如何用GPT写Listing和广告选词？", "先用竞品和关键词数据筛出相关词，再让GPT生成广告词和Listing。"],
      ["核心流程", "请按顺序说明视频中的完整操作流程。", "相似竞品 → H10关键词 → 删无搜索量词 → 按自然排名筛词 → 用竞品属性验证 → 生成广告词 → 写后台词、标题和五点。"],
      ["关键规则", "筛选关键词时，最重要的三条规则是什么？", "竞品必须高度相似；关键词属性必须被竞品标题和五点描述支持；不相关词删除。"],
      ["广告选词", "视频中如何选择精准匹配词和广泛匹配词？", "自然排名第1的词做精准匹配；多个词重复的核心属性组合成广泛匹配词。"],
      ["Listing写作", "视频中如何生成后台搜索词、标题和五点描述？", "后台词删除重复、品牌和侵权词；标题写核心词、功能属性和使用场景；五点描述参考竞品并自然加入关键词。"],
      ["30秒回答", "同事问你如何用GPT完成广告选词和Listing，请给出30秒回答。", "30秒回答：我会先找高度相似的竞品，从H10下载关键词，再按搜索量、自然排名和产品属性筛词。筛完后，用核心词做精准广告，用重复属性做广泛广告，再让GPT生成后台词、标题和五点描述。重点是运营先定方法，GPT负责执行。"],
      ["2分钟回答", "请完整说明视频中的GPT选词和Listing写作方法。", "2分钟回答：这套方法先找相似竞品并下载关键词数据，删除无搜索量词，再按自然排名保留候选词。接着汇总竞品标题和五点描述，验证关键词里的功能、尺寸和属性，不相关词全部删除。筛完后，把自然排名第1的词用于精准匹配，把重复出现的核心属性组合成广泛匹配词，再生成后台搜索词、标题和五点描述。整个过程不是让GPT自己想，而是运营先把规则写清楚，让GPT按步骤完成。"]
    ]
  }
];

const topics = {
  hit: { id: "hit", title: "爆款单品训练营", eyebrow: "14-DAY OPERATIONS BOOTCAMP", heroCopy: "以NanoSteamer“首代失败、Review驱动改款、二代成为畅销品”为主案例，建立从市场判断到放量复盘的亚马逊爆款经营框架。", mapTitle: "爆款生命周期", mapNote: "先判断机会，再构建转化，最后才是放量。", caseTitle: "NanoSteamer经典案例室", caseBadge: "公开资料 + 教学推演", curriculumTitle: "训练进度", curriculumNote: "课程不强制按自然日解锁，可按自己的节奏推进。", modules: hitModules },
  gpt: { id: "gpt", title: "GPT辅助Listing与广告选词", eyebrow: "GPT LISTING & KEYWORD WORKFLOW", heroCopy: "按照视频原始9步方法，训练“运营定规则，GPT做执行”的关键词筛选、广告选词和Listing写作流程。", mapTitle: "单课方法地图", mapNote: "先筛词，再生成广告词和Listing。", caseTitle: "阅读靠背枕案例室", caseBadge: "视频示例 + 学习复盘", curriculumTitle: "专题进度", curriculumNote: "本专题仅一课，可反复复习和背诵。", modules: gptModules }
};

let modules = hitModules;
const $ = id => document.getElementById(id);
const normalize = value => String(value || "").toLowerCase().replace(/[\s，。；、：:（）()【】\[\]“”"'！!？?]/g, "");
const stripLabel = value => String(value || "").replace(/^(30秒回答|2分钟回答)\s*[：:]/, "");

function questionBlueprint(m) {
  if (m.questions) return m.questions.map(([label, question, answer], index) => ({ key: `custom-${index + 1}`, label, question, answer, concepts: [stripLabel(answer)] }));
  return [
    { key: "definition", label: "定义", question: `请用一句话说明：第${m.day}课“${m.title}”的核心定义是什么？`, answer: m.definition, concepts: [m.definition] },
    { key: "logic", label: "核心逻辑", question: `处理“${m.title}”时，需要依次判断哪些核心逻辑？`, answer: m.logic.join("；"), concepts: m.logic },
    { key: "metrics", label: "关键指标", question: `判断“${m.title}”是否健康，应重点关注哪些关键指标？`, answer: m.metrics.join("；"), concepts: m.metrics },
    { key: "actions", label: "实际动作", question: `面对“${m.title}”这项工作，你会按什么步骤执行？`, answer: m.actions.join("；"), concepts: m.actions },
    { key: "mistakes", label: "常见误区", question: `做“${m.title}”时，最需要避免哪些常见误区？`, answer: m.mistakes, concepts: m.mistakes.split(/[；；]/).filter(Boolean) },
    { key: "short", label: "30秒回答", question: `同事问你“${m.title}怎么做”，请给出30秒回答。`, answer: `30秒回答：${m.shortSpeech}`, concepts: [m.shortSpeech] },
    { key: "long", label: "2分钟回答", question: `领导要求你说明“${m.title}”的完整判断和执行思路，请给出2分钟回答。`, answer: `2分钟回答：${m.longSpeech}`, concepts: [m.longSpeech] }
  ];
}

function lessonCards(m) {
  return questionBlueprint(m).map(item => ({ module: m.day, ...item, front: item.question, back: item.answer }));
}

function moduleQuizQuestions() {
  return modules.flatMap(m => questionBlueprint(m).map(item => ({ module: m.day, type: "essay", ...item })));
}

function defaultTopicState() {
  return { currentModule: 1, learned: [], cardKnown: [], cardAttempts: {}, quizCorrect: [], quizAttempts: {}, mistakes: [], practiceCount: 0 };
}

function defaultState() {
  return { version: 4, activeTopic: "hit", topics: { hit: defaultTopicState(), gpt: defaultTopicState() } };
}

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    if (stored.version >= 4 && stored.topics) return { ...defaultState(), ...stored, version: 4, topics: { hit: { ...defaultTopicState(), ...stored.topics.hit }, gpt: { ...defaultTopicState(), ...stored.topics.gpt } } };
    const legacy = { ...defaultTopicState(), ...stored };
    return { ...defaultState(), topics: { hit: legacy, gpt: defaultTopicState() } };
  } catch { return defaultState(); }
}

let state = loadState();
let activeTopicId = topics[state.activeTopic] ? state.activeTopic : "hit";
modules = topics[activeTopicId].modules;
function activeTopic() { return topics[activeTopicId]; }
function topicState() { return state.topics[activeTopicId]; }
let currentModule = Math.min(Math.max(topicState().currentModule || 1, 1), modules.length);
let currentCard = 0;
let cardRevealed = false;
let currentQuiz = 0;

function saveState() { topicState().currentModule = currentModule; state.activeTopic = activeTopicId; localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function activeModule() { return modules[currentModule - 1]; }
function cardId(card) { return `${card.module}-${card.key}`; }
function quizId(q) { return `${q.module}-${q.key}`; }
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

function renderList(title, items) { return `<section class="lesson-block"><h3>${title}</h3><ul>${items.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul></section>`; }
function renderLesson() {
  const m = activeModule();
  $("moduleSelect").value = m.day;
  const body = m.sections
    ? m.sections.map(([title, items], index) => `<section class="lesson-block ${index === 0 || title === "核心结论" ? "full" : ""}"><h3>${title}</h3><ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>`).join("")
    : `${renderList("核心逻辑", m.logic)}${renderList("关键指标", m.metrics)}${renderList("实际动作", m.actions)}<section class="lesson-block"><h3>常见误区</h3><p>${escapeHtml(m.mistakes)}</p></section>`;
  $("lessonContent").innerHTML = `<div class="lesson-lead"><strong>学习目标</strong><p>${escapeHtml(m.goal)}</p></div><div class="lesson-grid"><section class="lesson-block full"><h3>一句话定义</h3><p>${escapeHtml(m.definition)}</p></section>${body}<section class="lesson-block full speech"><h3>30秒回答</h3><p>${escapeHtml(m.shortSpeech)}</p></section><section class="lesson-block full speech long"><h3>2分钟回答</h3><p>${escapeHtml(m.longSpeech)}</p></section></div>`;
  $("markLearned").textContent = topicState().learned.includes(m.day) ? "已标记掌握" : "标记已掌握";
}

function renderCards(reset = false) {
  const cards = lessonCards(activeModule());
  if (reset) currentCard = 0;
  currentCard = Math.min(currentCard, cards.length - 1);
  const card = cards[currentCard];
  $("cardCounter").textContent = `第 ${currentCard + 1} / ${cards.length} 题`;
  $("cardFront").textContent = card.front;
  $("cardBack").textContent = card.back;
  $("flashCard").classList.toggle("revealed", cardRevealed);
  $("cardWrittenAnswer").value = "";
  $("cardScoreResult").hidden = true;
}

function extractConcepts(text) {
  return String(text).split(/[，。；、：:]/).map(x => x.trim()).filter(x => x.length >= 2).filter((x, i, a) => a.indexOf(x) === i);
}

function assessAnswer(answer, reference, concepts = []) {
  const normalizedAnswer = normalize(stripLabel(answer));
  const normalizedReference = normalize(stripLabel(reference));
  if (!normalizedAnswer) return { score: 0, accuracy: 0, completeness: 0, covered: [], missing: concepts.length ? concepts : ["请先作答"] };
  if (normalizedAnswer === normalizedReference) return { score: 100, accuracy: 100, completeness: 100, covered: concepts.length ? concepts : ["参考答案"], missing: [] };
  const targets = (concepts.length ? concepts : extractConcepts(reference)).map(x => ({ raw: x, normalized: normalize(x) })).filter(x => x.normalized.length > 1);
  const covered = targets.filter(t => normalizedAnswer.includes(t.normalized) || t.normalized.split(/(?<=.{2})/).filter(s => s.length >= 2).some(s => normalizedAnswer.includes(s))).map(t => t.raw);
  const completeness = targets.length ? Math.round(covered.length / targets.length * 100) : 0;
  const lengthScore = Math.min(100, Math.round(normalizedAnswer.length / Math.max(1, normalizedReference.length) * 100));
  const accuracy = Math.round(completeness * .75 + lengthScore * .25);
  return { score: Math.round(completeness * .7 + accuracy * .3), accuracy, completeness, covered, missing: targets.filter(t => !covered.includes(t.raw)).map(t => t.raw) };
}

function scoreCard() {
  const card = lessonCards(activeModule())[currentCard];
  const result = assessAnswer($("cardWrittenAnswer").value, card.back, card.concepts);
  const id = cardId(card); topicState().cardAttempts[id] = result.score;
  if (result.score < 70) addMistake(card.module, card.front, card.back, "闪卡");
  topicState().practiceCount++; saveState();
  $("cardScoreResult").hidden = false;
  $("cardScoreResult").innerHTML = `<div class="score-summary"><div><span>综合分</span><strong>${result.score}</strong></div><div><span>准确度</span><strong>${result.accuracy}%</strong></div><div><span>完整度</span><strong>${result.completeness}%</strong></div></div><p class="score-feedback">${result.covered.length ? `已覆盖：${escapeHtml(result.covered.join("；"))}` : "建议先补充核心概念。"}${result.missing.length ? `<br>可补充：${escapeHtml(result.missing.slice(0, 3).join("；"))}` : ""}</p>`;
  renderProgress(); renderMistakes();
}

function renderQuiz(reset = false) {
  const pool = moduleQuizQuestions().filter(q => q.module === currentModule);
  if (reset) currentQuiz = 0;
  currentQuiz = Math.min(currentQuiz, pool.length - 1);
  const q = pool[currentQuiz];
  $("quizProgress").textContent = `第 ${currentQuiz + 1} / ${pool.length} 题`;
  $("quizCard").innerHTML = `<span class="quiz-type">${q.label} · 问答题</span><h3>${escapeHtml(q.question)}</h3><textarea id="quizAnswer" class="quiz-text-input" placeholder="请输入你的回答……"></textarea><details class="quiz-answer-hint"><summary>查看参考答案提示</summary><p>${escapeHtml(q.answer)}</p></details>`;
  $("quizFeedback").hidden = true; $("nextQuiz").hidden = true;
}

function submitQuiz() {
  const q = moduleQuizQuestions().filter(item => item.module === currentModule)[currentQuiz];
  const result = assessAnswer($("quizAnswer").value, q.answer, q.concepts);
  const id = quizId(q); topicState().quizAttempts[id] = result.score;
  if (result.score >= 70) { if (!topicState().quizCorrect.includes(id)) topicState().quizCorrect.push(id); } else addMistake(q.module, q.question, q.answer, "知识测验");
  topicState().practiceCount++; saveState();
  const feedback = $("quizFeedback"); feedback.hidden = false; feedback.className = `quiz-feedback ${result.score >= 70 ? "correct" : "wrong"}`;
  feedback.innerHTML = `<b>${result.score >= 70 ? "回答已达标" : "还需要补充"}：${result.score}分</b><br>${result.covered.length ? `已覆盖：${escapeHtml(result.covered.join("；"))}` : "请先围绕参考答案的核心概念组织回答。"}${result.missing.length ? `<br>建议补充：${escapeHtml(result.missing.slice(0, 3).join("；"))}` : ""}`;
  $("nextQuiz").hidden = false; renderProgress(); renderMistakes();
}

function addMistake(module, question, answer, source) {
  const id = `${source}-${module}-${question}`;
  const existing = topicState().mistakes.find(x => x.id === id);
  if (existing) existing.count++;
  else topicState().mistakes.unshift({ id, module, question, answer, source, count: 1, date: new Date().toISOString() });
  topicState().mistakes = topicState().mistakes.slice(0, 120);
}

function renderMistakes() {
  const target = $("mistakeList");
  if (!topicState().mistakes.length) { target.innerHTML = `<div class="empty">暂无错题。完成闪卡或知识测验后，未达标题会出现在这里。</div>`; return; }
  target.innerHTML = topicState().mistakes.map(item => `<article class="mistake-item"><small>第${item.module}课 · ${escapeHtml(item.source)} · 已出现${item.count}次</small><h3>${escapeHtml(item.question)}</h3><details><summary>查看参考答案</summary><p>${escapeHtml(item.answer)}</p></details></article>`).join("");
}

function renderCase() {
  if (activeTopicId === "gpt") {
    $("caseContent").innerHTML = `<article class="case-hero"><h3>阅读靠背枕：视频中的GPT示例</h3><p>按视频流程，从竞品关键词到广告词、后台搜索词和Listing初稿。</p></article><p class="data-notice">以下内容为视频示例，用于记住流程；标题长度等规则按视频原话展示。</p><div class="case-grid">${[["第一步","H10关键词","删除无搜索量词"],["第二步","自然排名","保留优先候选词"],["第三步","属性验证","用竞品标题和五点删除不相关词"],["精准匹配","核心词","back pillow for sitting up in bed"],["广泛匹配","重复属性","+back +pillow +bed"],["后台搜索词","去重处理","删除重复、品牌和侵权词"],["标题","三段表达","核心词、功能属性、使用场景"],["五点描述","自然埋词","参考竞品描述写卖点"]].map(x => `<article class="case-metric"><span>${x[0]}</span><strong>${escapeHtml(x[1])}</strong><small>${escapeHtml(x[2])}</small></article>`).join("")}</div><section class="case-section"><h3>视频示例结果</h3><p><b>标题：</b>Back Pillow for Sitting Up in Bed, Reading & Gaming, Arms & Pockets, 22&quot; XL</p><p class="case-task">请按“竞品数据—两轮筛词—广告选词—Listing输出”的顺序，复述这个案例。</p></section>`;
    return;
  }
  $("caseContent").innerHTML = `<article class="case-hero"><h3>NanoSteamer：从首代失败到改款放大</h3><p>公开案例用于训练“先解决产品问题，再放大流量”的复盘逻辑；未披露的广告与库存数据不作虚构推断。</p></article><p class="data-notice">案例重点：差评不是只能由运营消化的信息，而是产品、页面和供应链的改进输入。</p><div class="case-grid">${[["首代产品","上市失败","集中差评暴露产品问题"],["止损动作","清理问题库存","不让广告继续放大缺陷"],["改款输入","真实评价","从买家反馈定义改良方向"],["二代验证","小批量测试","先看评分、退货、转化和利润"],["规模放大","达到门槛后","再扩广告、库存与产品线"],["复盘边界","公开资料有限","不虚构具体广告成本和销量"]].map(x => `<article class="case-metric"><span>${x[0]}</span><strong>${x[1]}</strong><small>${x[2]}</small></article>`).join("")}</div><section class="case-section"><h3>训练题</h3><p class="case-task">请用“失败归因—产品改良—重新验证—规模放大”四步，解释为什么不能把首代失败简单归因于广告不足。</p></section>`;
}

function renderKnowledgeMap() { $("knowledgeMap").innerHTML = modules.map(m => `<article class="map-node ${topicState().learned.includes(m.day) ? "done" : ""} ${m.day === currentModule ? "current" : ""}"><b>第${m.day}课</b><span>${escapeHtml(m.title)}</span><small>${topicState().learned.includes(m.day) ? "已掌握" : "待学习"}</small></article>`).join(""); }
function renderCurriculum() { $("curriculum").innerHTML = modules.map(m => `<article class="day-card ${topicState().learned.includes(m.day) ? "done" : ""} ${m.day === currentModule ? "current" : ""}"><b>${activeTopicId === "hit" ? "DAY " : "课程 "}${String(m.day).padStart(2, "0")}</b><span>${escapeHtml(m.title)}</span><small>${escapeHtml(m.goal)}</small></article>`).join(""); }
function renderProgress() {
  const learned = topicState().learned.length;
  const cards = Object.values(topicState().cardAttempts).filter(score => score >= 70).length;
  const quiz = topicState().quizCorrect.length;
  const total = modules.length * 7;
  const score = Math.round((learned / modules.length * .45 + cards / total * .25 + quiz / total * .30) * 100);
  $("overallScore").textContent = `${score}%`; $("overallBar").style.width = `${score}%`;
  $("studySummary").textContent = `完成${learned}/${modules.length}课 · 累计练习${topicState().practiceCount}次`;
  const m = activeModule(); $("todayDay").textContent = `DAY ${String(m.day).padStart(2, "0")}`; $("todayTitle").textContent = m.title; $("todayGoal").textContent = m.goal;
  $("topicEyebrow").textContent = activeTopic().eyebrow; $("heroCopy").textContent = activeTopic().heroCopy;
  $("mapTitle").textContent = activeTopic().mapTitle; $("mapNote").textContent = activeTopic().mapNote;
  $("caseTitle").textContent = activeTopic().caseTitle; $("caseBadge").textContent = activeTopic().caseBadge;
  $("curriculumTitle").textContent = activeTopic().curriculumTitle; $("curriculumNote").textContent = activeTopic().curriculumNote;
  document.querySelectorAll("[data-topic]").forEach(button => button.classList.toggle("active", button.dataset.topic === activeTopicId));
  renderKnowledgeMap(); renderCurriculum();
}

function switchView(name) {
  document.querySelectorAll(".view").forEach(x => x.classList.toggle("active", x.id === `${name}View`));
  document.querySelectorAll(".nav-item").forEach(x => x.classList.toggle("active", x.dataset.view === name));
  if (name === "cards") { cardRevealed = false; renderCards(true); }
  if (name === "quiz") renderQuiz(true);
  if (name === "mistakes") renderMistakes();
}

function changeModule(day) { currentModule = Number(day); currentCard = 0; currentQuiz = 0; saveState(); renderLesson(); renderProgress(); }
function changeTopic(id) { saveState(); activeTopicId = id; modules = activeTopic().modules; currentModule = Math.min(Math.max(topicState().currentModule || 1, 1), modules.length); currentCard = 0; currentQuiz = 0; cardRevealed = false; saveState(); renderAll(); }
function exportProgress() { const blob = new Blob([JSON.stringify({ exportedAt: new Date().toISOString(), activeTopic: activeTopic().title, state }, null, 2)], { type: "application/json" }); const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = "amazon-hit-learning-progress.json"; link.click(); URL.revokeObjectURL(link.href); }

function bindEvents() {
  $("moduleSelect").addEventListener("change", e => changeModule(e.target.value));
  $("prevModule").addEventListener("click", () => changeModule(Math.max(1, currentModule - 1)));
  $("nextModule").addEventListener("click", () => changeModule(Math.min(modules.length, currentModule + 1)));
  $("markLearned").addEventListener("click", () => { if (!topicState().learned.includes(currentModule)) topicState().learned.push(currentModule); saveState(); renderLesson(); renderProgress(); });
  $("flashCard").addEventListener("click", () => { cardRevealed = !cardRevealed; $("flashCard").classList.toggle("revealed", cardRevealed); });
  $("scoreCardAnswer").addEventListener("click", scoreCard);
  $("cardKnown").addEventListener("click", () => { const c = lessonCards(activeModule())[currentCard]; const id = cardId(c); if (!topicState().cardKnown.includes(id)) topicState().cardKnown.push(id); topicState().cardAttempts[id] = 100; topicState().practiceCount++; currentCard = (currentCard + 1) % 7; cardRevealed = false; saveState(); renderCards(); renderProgress(); });
  $("cardAgain").addEventListener("click", () => { currentCard = (currentCard + 1) % 7; cardRevealed = false; renderCards(); });
  $("submitQuiz").addEventListener("click", submitQuiz);
  $("nextQuiz").addEventListener("click", () => { currentQuiz = (currentQuiz + 1) % 7; renderQuiz(); });
  document.querySelectorAll(".nav-item").forEach(btn => btn.addEventListener("click", () => switchView(btn.dataset.view)));
  document.querySelectorAll("[data-today-step]").forEach(btn => btn.addEventListener("click", () => switchView(btn.dataset.todayStep)));
  document.querySelectorAll("[data-topic]").forEach(btn => btn.addEventListener("click", () => changeTopic(btn.dataset.topic)));
  $("startToday").addEventListener("click", () => switchView("learn"));
  $("clearMistakes").addEventListener("click", () => { topicState().mistakes = []; saveState(); renderMistakes(); });
  $("exportProgress").addEventListener("click", exportProgress);
  $("resetCurrentProgress").addEventListener("click", () => { if (confirm(`确定重置“${activeTopic().title}”的学习记录吗？`)) { state.topics[activeTopicId] = defaultTopicState(); currentModule = 1; saveState(); renderAll(); } });
  $("resetProgress").addEventListener("click", () => { if (confirm("确定重置全部专题的学习记录吗？")) { state = defaultState(); activeTopicId = "hit"; modules = hitModules; currentModule = 1; saveState(); renderAll(); } });
}

function renderAll() {
  $("moduleSelect").innerHTML = modules.map(m => `<option value="${m.day}">第${m.day}课 · ${escapeHtml(m.title)}</option>`).join("");
  renderLesson(); renderCards(true); renderQuiz(true); renderCase(); renderMistakes(); renderProgress();
}

document.addEventListener("DOMContentLoaded", () => { bindEvents(); renderAll(); });
