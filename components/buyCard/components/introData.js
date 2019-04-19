var introArr = [
	{ height: 440, 
		bColor: '#FFFFFF', 
		itemArr: [
			{ type: 'image', url: require('../../../assets/images/giftIntro-01.png') },
			{ 
				type: 'des', title: '分类定制', origin: 'gift',
				desList: ['零食、母婴、家庭保洁', '只要您需要，', '统统都可以定制。']
			}
		]
	},
	{ height: 440, 
		bColor: '#f5f6f7', 
		itemArr: [
			{ 
				type: 'des', title: '价格定制', origin: 'gift',
				desList: ['多档价格随心选择，', '灵活搭配个性化方案，', '满足不同采购需求']
			},
			{ type: 'image', url: require('../../../assets/images/giftIntro-02.png') }
		]
	},
	{ height: 440, 
		bColor: '#FFFFFF', 
		itemArr: [
			{ type: 'image', url: require('../../../assets/images/giftIntro-03.png') },
			{ 
				type: 'des', title: '节日定制', origin: 'gift',
				desList: ['根据节日特色定制化搭配，', '每种商品都有用，',	'让员工福利不在鸡肋']
			}
		]
	}
]

var solutionArr = [
	{title: '中秋礼盒', url: require('../../../assets/images/giftsolution-01.png')},
	{title: '三八节礼盒', url: require('../../../assets/images/giftsolution-02.png')},
	{title: '贺岁礼包', url: require('../../../assets/images/giftsolution-03.png')},
	{title: '劳动节礼包', url: require('../../../assets/images/giftsolution-04.png')},
	{title: '双十一礼盒', url: require('../../../assets/images/giftsolution-05.png')},
	{title: '公司活动伴手礼', url: require('../../../assets/images/giftsolution-06.png')},
	{title: '公司活动伴手礼', url: require('../../../assets/images/giftsolution-07.png')},
	{title: '员工福利', url: require('../../../assets/images/giftsolution-08.png')},
];

var usageList = [
  { name: "孝敬长辈", url: require("../../../assets/images/cardusage-01.png") },
  { name: "感恩礼品", url: require("../../../assets/images/cardusage-02.png") },
  { name: "员工福利", url: require("../../../assets/images/cardusage-03.png") },
  { name: "佳节送礼", url: require("../../../assets/images/cardusage-04.png") }
];

var advantageList = [
  { type: "image", url: require("../../../assets/images/cardadvantage-01.png") },
  {
    type: "text",
    title: "自由定制",
    des: [
      "提供个性化定制服务，按需求定制",
      "卡面、卡套；另有￥100、￥200、",
      "￥500、￥1000卡面额供您选择；"
    ]
  },
  { type: "image", url: require("../../../assets/images/cardadvantage-03.png") },
  {
    type: "text",
    title: "专卡专店",
    des: [
      "邀请码进店制度，本店消费，",
      "店与店之间互不相通，拒绝恶",
      "性比价竞争"
    ]
  },
  { type: "image", url: require("../../../assets/images/cardadvantage-02.png") },
  {
    type: "text",
    title: "正规发票",
    des: [
      "所有祺易卡均可依据面额开具",
      "足额增值税发票，符合国家规",
      "定，让您购卡无忧。"
    ]
  }
];

export { introArr, solutionArr, usageList, advantageList};
