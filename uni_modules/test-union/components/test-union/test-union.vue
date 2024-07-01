<template>
  <view>
    <input v-model="localData.age" @input="updateParent" />
    <input v-model="localData.address" @input="updateParent" />
  </view>
</template>

<script>
import { watch, toRefs, ref } from 'vue';

export default {
  props: {
    details: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const { details } = toRefs(props);
    const localData = ref({ ...details.value });

    watch(details, (newVal) => {
      localData.value = { ...newVal };
    });

    const updateParent = () => {
      emit('update:details', localData.value);
    };

    return {
      localData,
      updateParent
    };
  }
};
</script>