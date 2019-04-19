const advantagesArr = [
	{
		height: 480,
		bColor: '#FFFFFF',
		itemArr: [
			{
				type: 'des', title: '资金占用压力大？', origin: 'ship',
				desList: ['长青采购中心提供多样进货方式，', '无需囤货,0成本也能轻松开店;', '赊账额度循环利用，', '销售所得即时到账，', '不让账期成为您的创业阻碍。']
			},
			{ type: 'image', url: require('../../assets/images/shipadvantage-01.png') }
		]
	},
	{
		height: 474,
		bColor: '#f5f6f7',
		itemArr: [
			{ type: 'image', url: require('../../assets/images/shipadvantage-02.png') },
			{
				type: 'des', title: '爆款商品采购困难？', origin: 'ship',
				desList: ['长青采购中心拥有强劲的', '供应链采购实力，', '火热爆款稳定供货，', '海外采购保质保量，', '不以代工商品以次充好。']
			}
		]
	},
	{
		height: 480,
		bColor: '#FFFFFF',
		itemArr: [
			{
				type: 'des', title: '商品推广无头绪？', origin: 'ship',
				desList: ['长青采购中心提供海量推广素材，', '一键复制，轻松转发；', '专业团队随时待命，', '定期更新软文;', '您想要的，应有尽有。']
			},
			{ type: 'image', url: require('../../assets/images/shipadvantage-03.png') }
		]
	},
	{
		height: 463,
		bColor: '#f5f6f7',
		itemArr: [
			{ type: 'image', url: require('../../assets/images/shipadvantage-04.png') },
			{
				type: 'des', title: '管理店铺劳心费力？', origin: 'ship',
				desList: ['长青采购中心重磅推出自动化运营功能，', '商品自动上架，自动改价，', '云端仓储一件代发。', '利润设置随心控，', '销售收益一目了然，', '傻瓜式管理店铺。']
			}
		]
	},
];

const shipExamplesList = [
	{
		name: 'BLACK', type: '在校学生', imgUrl: require('../../assets/images/shipexamples-01.png'),
		leftImg: require('../../assets/images/shipexamples-caochang.png'),
		txt: '校园生活轻松惬意，但是学业之余，也想有一份自己的收入，为辛劳的父母送上一份惊喜。作为一名学生，由于资金方面的匮乏，其实可选择的创业领域很窄，但是我的幸运，在于我遇到了长青。无需占用资金，一定额度范围内进货甚至可以赊账，简直是最适合学生的创业选择。长青，可以说是我梦开始的方向，不仅仅是给了我一份额外的收入，也让我清晰了毕业之后的职业方向。'
	},
	{ name: '刘嫂', type: '家庭主妇', imgUrl: require('../../assets/images/shipexamples-02.png'),
		leftImg: require('../../assets/images/shipexamples-kitchen.png'),
		txt: '有了孩子之后，为了更好地照顾宝宝，我离开工作岗位做了全职妈妈。看着宝宝一天天长大，看着老公忙碌的身影，看着每个月的账单，也有一种无力的感觉。一次朋友聚餐时，身为店主的朋友向我推荐了长青，仿佛为我打开了另一扇大门。现在，不仅自家宝宝和家庭用品我在长青上采购，更向身边朋友安利了一批实用好货，长青，真真正正的自用省钱，分享赚钱！'
	},
	{ name: '姗姗', type: '都市白领', imgUrl: require('../../assets/images/shipexamples-03.png'),
		leftImg: require('../../assets/images/shipexamples-office.png'),
		txt: '一成不变地上班，工作，下班，虽然稳定，但是也很乏味。每个月都拿着死工资，看着朋友们光鲜亮丽地生活，也想寻求出口突破收入瓶颈。一个偶然的机会，我接触到了长青。工作间隙随时随地可以通过APP处理订单，不会耽误本职工作，又可以赚些零花钱，相信坚持下去，这也可以成为我的一份事业，为我的生活填上浓墨重彩的一笔。'
	}
]


const userWordsList = [
	{
		txt: '手机端随时随地查看订单，碎片化时间就能做成大生意，外出游玩也能轻松管理店铺，再也不用牺牲空余时间呆坐在电脑前啦!',
		avatar: require('../../assets/images/userwords-01.png'),
		name: 'L珊珊',
		type: '自由职业'
	},
	{
		txt: '最喜欢商品批量上架改价功能，轻轻点几下，上百个商品瞬间就可以设置好利润完成上架，太方便了~',
		avatar: require('../../assets/images/userwords-02.png'),
		name: '颜大壮',
		type: '商场售货员'
	},
	{
		txt: '不想低质量地刷屏，自己写软文又没有素材，还好有长青的商品素材库，现在卖货不怕没软文发朋友圈，而是怕软文太多挑花了眼~',
		avatar: require('../../assets/images/userwords-03.png'),
		name: '包zI',
		type: '新媒体运营工作者'
	},
]

const clientsImgList = [
	{url: require('../../assets/images/shopclients-01.png')},
	{url: require('../../assets/images/shopclients-02.png')},
	{url: require('../../assets/images/shopclients-03.png')},
	{url: require('../../assets/images/shopclients-04.png')},
	{url: require('../../assets/images/shopclients-05.png')},
	{url: require('../../assets/images/shopclients-06.png')},
	{url: require('../../assets/images/shopclients-07.png')},
	{url: require('../../assets/images/shopclients-08.png')}
]

export { advantagesArr, shipExamplesList, userWordsList, clientsImgList};