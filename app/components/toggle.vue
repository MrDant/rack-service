<template>
  <div
    class="relative h-2 w-6 rounded-full border border-slate-300 cursor-pointer"
    :class="
      selected === trueValue ? 'bg-green-100' : 'bg-' + falseColor + '-100'
    "
    @click="change"
  >
    <div
      class="rounded-full h-3 w-3 -top-1/2 absolute"
      :class="
        selected === trueValue
          ? 'bg-green-400 -right-1'
          : 'bg-' + falseColor + '-400 -left-1'
      "
    ></div>
  </div>
</template>
<script setup>
const { falseColor, falseValue, trueValue } = defineProps({
  falseColor: {
    type: String,
    default: "red",
  },
  trueValue: { default: true },
  falseValue: { default: false },
});
const selected = defineModel();
const change = () => {
  if (selected.value === falseValue) {
    selected.value = trueValue;
  } else {
    selected.value = falseValue;
  }
};
</script>
