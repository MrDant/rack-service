<script setup>
import { DatePicker as VDatePicker } from "v-calendar";
import "v-calendar/style.css";

const open = ref(false);
const model = defineModel({ default: new Date() });
const label = computed(() =>
  model.value.toLocaleDateString("fr-fr", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
);
</script>

<template>
  <UPopover v-model:open="open">
    <UButton icon="i-heroicons-calendar-days" :label="label" />
    <template #panel>
      <VDatePicker
        v-model="model"
        mode="date"
        @update:modelValue="open = false"
      />
    </template>
  </UPopover>
</template>
