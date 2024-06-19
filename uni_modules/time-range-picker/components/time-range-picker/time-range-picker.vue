<template>
	<div class="datetime-picker">
		<div class="datetime-picker__inputs">
			<input type="text" placeholder="请选择开始时间" readonly class="datetime-picker__input" :value="formattedStartTime"
				@click="show" />
			<span class="datetime-picker__separator">-</span>
			<input type="text" placeholder="请选择结束时间" readonly class="datetime-picker__input" :value="formattedEndTime"
				@click="show" />
		</div>

		<uni-popup ref="popup" type="bottom" background-color="#fff">
			<div class="datetime-picker__content">
				<div class="datetime-picker__header">
					<button class="datetime-picker__cancel" @click="close">取消</button>
					<div class="datetime-picker__tip">{{ formattedStartTime + ' - ' + formattedEndTime }}</div>
					<button class="datetime-picker__complete" @click="complete">完成</button>
				</div>

				<div class="datetime-picker__pickers">
					<picker-view indicator-style="100rpx" @change="updateTime('start', $event)" :value="pickerIndexLeft"
						class="picker-view">
						<picker-view-column>
							<view class="datetime-picker__item" v-for="(hour, index) in hours" :key="index">{{ hour }}
							</view>
						</picker-view-column>
						<picker-view-column>
							<view class="datetime-picker__item" v-for="(minute, index) in minutes" :key="index">
								{{ minute }}</view>
						</picker-view-column>
					</picker-view>
					<picker-view indicator-style="100rpx" @change="updateTime('end', $event)" :value="pickerIndexRight"
						class="picker-view">
						<picker-view-column>
							<view class="datetime-picker__item" v-for="(hour, index) in hours" :key="index">{{ hour }}
							</view>
						</picker-view-column>
						<picker-view-column>
							<view class="datetime-picker__item" v-for="(minute, index) in minutes" :key="index">
								{{ minute }}</view>
						</picker-view-column>
					</picker-view>
				</div>
			</div>
		</uni-popup>
	</div>
</template>

<script>
	import {
		ref,
		watch
	} from 'vue';

	export default {
		name: 'TimeRangePicker',
		props: {
			datetimeVal: {
				type: String,
				default: '00:00-00:00',
			},
		},
		emits: ['complete'],
		data() {
			return {
				hours: Array.from({
					length: 24
				}, (_, i) => (i < 10 ? '0' : '') + i),
				minutes: Array.from({
					length: 6
				}, (_, i) => (i * 10 < 10 ? '0' : '') + i * 10),
				formattedStartTime: '00:00',
				formattedEndTime: '00:00',
				pickerIndexLeft: [0, 0],
				pickerIndexRight: [0, 0],
				popup: null,
			};
		},
		watch: {
			datetimeVal: {
				immediate: true,
				handler(newVal) {
					const [start, end] = newVal.split('-');
					this.formattedStartTime = start;
					this.formattedEndTime = end;
				},
			},
		},
		methods: {
			updateTime(type, e) {
				const val = e.detail.value;
				const selectedTime = `${this.hours[val[0]]}:${this.minutes[val[1]]}`;
				if (type === 'start') {
					this.formattedStartTime = selectedTime;
				} else {
					this.formattedEndTime = selectedTime;
				}
			},
			show() {
				const getIndex = (time) => {
					const [hour, minute] = time.split(':');
					return [this.hours.indexOf(hour), this.minutes.indexOf(minute)];
				};
				this.pickerIndexLeft = getIndex(this.formattedStartTime);
				this.pickerIndexRight = getIndex(this.formattedEndTime);
				this.popup.open();
			},
			close() {
				this.popup.close();
			},
			complete() {
				this.$emit('complete', `${this.formattedStartTime}-${this.formattedEndTime}`);
				this.popup.close();
			},
		},
		mounted() {
			this.popup = this.$refs.popup;
		},
	};
</script>

<style lang="scss" scoped>
	.datetime-picker {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;

		&__inputs {
			display: flex;
			width: 100%;
		}

		&__input {
			flex: 1;
			height: 35px;
			line-height: 35px;
			border: 1px solid #ccc;
			border-radius: 4px;
			text-align: center;
			font-size: 14px;
			color: #666;
		}

		&__separator {
			flex-shrink: 0;
			margin: 0 5px;
			line-height: 35px;
		}

		&__content {
			background: #fff;
			height: 400rpx;
			width: 100%;
		}

		&__header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 20px;
			height: 80rpx;
			border-bottom: 1px solid #ddd;
		}

		&__cancel,
		&__complete {
			color: #0055ff;
			border: none;
			background: none;
			font-size: 16px;
			cursor: pointer;
		}

		&__tip {
			color: #939393;
		}

		&__pickers {
			display: flex;
			justify-content: space-between;
		}

		.picker-view {
			width: 48%;
			height: 500rpx;
		}

		&__item {
			line-height: 100rpx;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>