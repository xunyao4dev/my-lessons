<template>
	<view class="input-container">
		<uni-easyinput v-model.lazy="remainHours.hours1v1" placeholder="1v1课时" trim @input="validateInput($event, 'hours1v1')">
			<template #right>
				<view class="unit">1v1</view>
			</template>
		</uni-easyinput>
		<uni-easyinput v-model.lazy="remainHours.hours1v3" placeholder="1v3课时" trim @input="validateInput($event, 'hours1v3')">
			<template #right>
				<view class="unit">1v3</view>
			</template>
		</uni-easyinput>
	</view>
</template>

<script>
	import {
		ref,
		defineProps,
		defineEmits,
		watch
	} from 'vue';
	export default {
		props: {
			remainHours: {
				type: Object,
				default: () => ( {
					hours1v1: '',
					hours1v3: ''
				} )
			}
		},
		emits: [ 'update:remainHours' ],
		setup( props, {
			emit
		} ) {
			const remainHours = ref( {
				...props.remainHours
			} );
			watch( () => props.remainHours, ( newVal ) => {
				remainHours.value = {
					...newVal
				};
			} );
			const validateInput = ( event, type ) => {
				const number = event.replace( /\D/g, '' );
				remainHours.value[ type ] = number;
				emit( 'update:remainHours', remainHours.value );
			};
			return {
				remainHours,
				validateInput
			};
		}
	};

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
