<style lang="scss" scoped>
.intro-content{
	width: 1200px;
	display: flex;
	justify-content: flex-start;
	.intro-item-content{
		.intro-text, .intro-image, .ship-text{
			width: 600px;
			height: 100%;

			display: flex;
			align-items: center;
			justify-content: center;
		}

		.intro-text{
			.intro-txt-con{
				display: flex;
				flex-direction: column;
				justify-content: flex-start;

				h4{
					font-size: 30px;
					font-weight: 500;
					text-align: left;
					color: #333333;
				}

				.txt-sub-divid{
					width: 34px;
					height: 6px;
					margin-top: 13px;
					border-radius: 3px;
					background-color: #66c5c3;
				}

				.txt-des-list{
					margin-top: 35px;

					display: flex;
					flex-direction: column;
					justify-content: flex-start;

					p{
						font-size: 18px;
						font-weight: 500;
						line-height: 1.67;
						text-align: left;
						color: #333333;
					}
				}

			}
		}

		.ship-text{
			.ship-txt-con{
				display: flex;
				flex-direction: column;
				justify-content: flex-start;

				h4{
					font-size: 30px;
					font-weight: 500;
					letter-spacing: 0.2px;
					text-align: center;
					color: #57a1ee;
				}

				.ship-txt-des-list{
					margin-top: 49px;

					display: flex;
					flex-direction: column;

					span{
						font-size: 18px;
						font-weight: 500;
						line-height: 1.67;
						text-align: center;
						color: #333333;
					}

				}
			}
		}

		.intro-image{
			img{
				width: 520px;
				height: auto;
			}
		}
	}

}
</style>

<template>
	<div class="intro-content" :style="{'height':height+'px', 'background-color': color}">
		<div class="intro-item-content" v-for="(item, index) in introArr" :key="index">
			<div v-if="item.type === 'des' && item.origin === 'gift'" class="intro-text">
				<div class="intro-txt-con">
					<h4>{{item.title}}</h4>
					<div class="txt-sub-divid"></div>
					<div class="txt-des-list">
						<p v-for="(sitem, sindex) in item.desList" :key="index + '' + sindex">{{sitem}}</p>
					</div>
				</div>
			</div>

			<div v-if="item.type === 'des' && item.origin === 'ship'" class="ship-text">
				<div class="ship-txt-con">
					<h4>{{item.title}}</h4>
					<div class="ship-txt-des-list">
						<span v-for="(sitem, sindex) in item.desList" :key="index + '' + sindex">{{sitem}}</span>
					</div>
				</div>
			</div>

			<div v-else-if="item.type === 'image'" class="intro-image">
				<img :src="item.url" alt="introImg">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		color: {
			type: String,
			default: '#FFFFFF'
		},
		height: {
			type: Number,
			default: 400
		},
		introArr: {
			type: Array,
			default: () => {return []}
		}
	}
}
</script>

