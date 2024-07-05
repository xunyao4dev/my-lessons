<template>
	<view>
		<view class="imitate-input-wrapper" @click="showPicker">
			<view v-if="!selected" class="imitate-input-placeholder">{{ placeholder }}</view>
			<input v-else type="text" :value="selected" disabled />
		</view>
		<view v-if="show" class="picker-modal">
			<view class="picker-content">
				<view class="picker-header">
					<view class="cancel-btn" @click="closePicker">取消</view>
					<view class="title">{{ title || '' }}</view> <!-- 标题部分 -->
					<view class="confirm-btn" @click="confirmSelection">确认</view>
				</view>
				<scroll-view :scroll-into-view="currentItem" scroll-anchoring scroll-y class="picker-body" scroll-with-animation>
					<view v-for="(item, index) in options" :key="index" :class="['picker-item', { 'editing-item': editIndex === index }]">
						<view v-if="editIndex !== index" :id="'item' + index" class="item-text" @click="selectItem(item, index)">
							{{ item }}
							<view v-if="item === selectedOption" class="selected-indicator">✓</view>
							<view class="edit-icon" @click="editItem(index)">
								<uni-icons custom-prefix="iconfont" type="icon-bianji" />
							</view>
						</view>
						<view v-else class="edit-item">
							<input v-model="editedItems[index]" placeholder="编辑选项" class="edit-input" />
							<view class="save-icon" @click="saveItem(index)">
								<uni-icons type="checkmarkempty" color="green" />
							</view>
						</view>
					</view>
					<view class="empty-tips" v-if="options.length === 0">当前无选项，你可以自行添加~</view>
				</scroll-view>
				<view class="input-wrapper">
					<input v-model="customOption" ref="customInput" placeholder="请输入自定义选项" class="custom-input" />
					<view class="confirm-icon" @click="addCustomOption">
						<uni-icons type="checkmarkempty" color="#fff" />
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		nextTick
	} from 'vue';
	const props = defineProps( {
		options: Array,
		selected: String,
		placeholder: String,
		title: String,
		saveOptions: Function
	} );
	const emit = defineEmits( [ 'update:selected', 'update:options' ] );
	const show = ref( false );
	const selectedOption = ref( props.selected || '' );
	const customOption = ref( '' );
	const editIndex = ref( -1 );
	const updating = ref( false )
	const currentItem = ref();
	const editedItems = reactive( Array.from( {
		length: props.options.length
	}, () => '' ) );
	const showPicker = () => {
		show.value = true;
	};
	const closePicker = () => {
		show.value = false;
		customOption.value = '';
		editIndex.value = -1; // 清除编辑状态
		editedItems.forEach( ( _, index ) => {
			editedItems[ index ] = ''; // 清空所有编辑项
		} );
	};
	const confirmSelection = () => {
		emit( 'update:selected', selectedOption.value );
		if (updating.value) {
			props.saveOptions()
		}
		updating.value = false
		closePicker();
	}
	const editItem = ( index ) => {
		editIndex.value = index;
		editedItems[ index ] = props.options[ index ];
		updating.value = true
	}
	const saveItem = ( index ) => {
		if ( editedItems[ index ].trim() ) {
			const updatedOptions = [ ...props.options ];
			updatedOptions[ index ] = editedItems[ index ];
			emit( 'update:options', updatedOptions );
		}
		editIndex.value = -1;
	}
	const addCustomOption = () => {
		if ( customOption.value.trim() ) {
			if ( props.options.includes( customOption.value ) ) {
				uni.showToast( {
					title: '选项不能重复',
					icon: 'error'
				} );
				return
			}
			const updatedOptions = [ ...props.options, customOption.value ]
			emit( 'update:options', updatedOptions )
			updating.value = true
		}
		customOption.value = ''
		currentItem.value = "item" + ( props.options.length - 1 )
	};
	const selectItem = ( item, index ) => {
		selectedOption.value = item === selectedOption.value ? '' : item; // 切换选中状态
		currentItem.value = "item" + index;
	};

</script>

<style scoped>
	.imitate-input-wrapper {
		height: 35px;
		border: 1px solid #e5e5e5;
		display: flex;
		align-items: center;
		background-color: #fff;
	}

	.imitate-input-placeholder {
		color: #888;
		font-weight: 400;
		padding-left: 10px;
	}

	.imitate-input-wrapper text {
		flex: 1;
	}

	.imitate-input-wrapper input {
		flex: 1;
		border: none;
		outline: none;
		background-color: #fff;
		margin-left: 10px;
		color: #888;
	}

	.picker-modal {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #fff;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
		padding: 10px 20px 20px 10px;
		display: flex;
		flex-direction: column;
		z-index: 100000;
	}

	.picker-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
	}

	.cancel-btn,
	.confirm-btn {
		padding: 6px 12px;
		background-color: #007aff;
		color: white;
		border-radius: 5px;
		font-size: 12px;
	}

	.title {
		font-weight: 600;
		color: #888;
	}

	.cancel-btn {
		background-color: #ccc;
	}

	.picker-body {
		flex: 1;
		-webkit-overflow-scrolling: touch;
		overflow-y: auto;
		max-height: 50vh;
		min-height: 15vh;
	}

	.picker-item {
		padding: 10px;
		text-align: center;
		position: relative;
	}

	.picker-item.editing-item {
		padding: 2px;
	}

	.item-text {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		color: #666;
		position: relative;
	}

	.check-icon {
		position: absolute;
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
	}

	.edit-icon,
	.save-icon {
		width: 20px;
		height: 20px;
		margin-left: 5px;
	}

	.selected-indicator {
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translateY(-50%);
	}

	.edit-item {
		display: flex;
		align-items: center;
		font-size: 14px;
		color: #666;
	}

	.edit-input {
		flex: 1;
		border: none;
		outline: none;
	}

	.empty-tips {
		font-size: 12px;
		color: #888;
		text-align: center;
		margin: 10px 0 20px 0;
	}

	.input-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		font-size: 12px;
	}

	.custom-input {
		flex: 1;
		padding: 8px;
		border: none;
		outline: none;
	}

	.confirm-icon {
		padding: 5px 10px;
		background-color: #007aff;
		border-radius: 5px;
		margin-right: 5px;
	}

</style>
