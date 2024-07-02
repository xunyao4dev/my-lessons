<template>
	<view class="input-container">
		<uni-easyinput v-model="localHours.hours1v1" type="text" placeholder="1v1课时" trim @input="validateInput($event, 'hours1v1')">
			<template #right>
				<view class="unit">1v1</view>
			</template>
		</uni-easyinput>
		<uni-easyinput v-model="localHours.hours1v3" type="text" placeholder="1v3课时" trim @input="validateInput($event, 'hours1v3')">
			<template #right>
				<view class="unit">1v3</view>
			</template>
		</uni-easyinput>
	</view>
</template>

<script>
	import {
		reactive,
		watch,
		nextTick
	} from 'vue'
	export default {
		props: {
			remainHours: {
				type: Object,
				required: true
			}
		},
		setup( props, {
			emit
		} ) {
			const localHours = reactive( {
				...props.remainHours
			} );
			const validateInput = ( value, field ) => {
				nextTick(() => {
					value = value.replace( /\D/g, '' )
					localHours[ field ] = value
					emit( 'update:remainHours', {
						...localHours
					} )
				})
				
			};
			watch( () => props.remainHours, ( newVal ) => {
				Object.assign( localHours, newVal );
			} );
			return {
				validateInput,
				localHours
			}
		}
	}

</script>

<style scoped>
	.input-container {
		display: flex;
		flex-direction: row;
		gap: 10px;
	}

	.unit {
		display: block;
		padding: 0 10px;
		color: #777;
		font-weight: bold;
		font-size: 14px;
		height: 35px;
		line-height: 35px;
		background-color: #e6e6e6;
	}

</style>
