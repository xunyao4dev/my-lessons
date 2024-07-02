<template>
  <view>
    <uni-forms ref="form" :modelValue="formData" :rules="rules">
      <uni-forms-item label="Details" name="remainHours">
        <test-union v-model:remainHours="formData.remainHours"></test-union>
      </uni-forms-item>
      <button type="primary" @click="submitForm">Submit</button>
    </uni-forms>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { onReady } from '@dcloudio/uni-app';

const form = ref();
const formData = ref({
  remainHours: {
    hours1v1: '',
    hours1v3: ''
  }
});

const rules = ref({
  remainHours: {
    rules: [
      {
        required: true
      },
      {
        validateFunction: function (rule, value, data, callback) {
          if (!value.hours1v1 && !value.hours1v3) {
            callback('必填提示信息2');
          }
          return true;
        }
      }
    ]
  }
});

onReady(() => {
  form.value.setRules(rules.value);
});

const submitForm = () => {
  form.value
    .validate()
    .then(res => {
      console.log('表单数据信息：', formData.value);
    })
    .catch(err => {
      console.log('表单错误信息：', err);
    });
};
</script>