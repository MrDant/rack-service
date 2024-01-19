<template>
  <UCard>
    <template #header>
      <h1>Liste de relevés effectués :</h1>
    </template>
    <UTable :rows="releve" :columns="columns" @select="select">
      <template #entrepot-data="{ row }">
        <div class="flex gap-2 items-center">
          <div
            class="rounded-full w-3 h-3"
            :class="row.entrepot == 'Surgelés' ? 'bg-sky-700' : 'bg-green-700'"
          ></div>
          {{ row.entrepot }}
        </div>
      </template>
      <template #technicien-data="{ row }">
        <div class="flex gap-2 items-center">
          <UBadge v-for="t in row.technicien" :key="t">{{ t }}</UBadge>
        </div>
      </template>
      <template #date-data="{ row }">
        {{
          row.date.toLocaleDateString("fr-fr", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        }}
      </template>
    </UTable>
    <template #footer>
      <div class="flex justify-end">
        <NuxtLink to="/create"><UButton>+ Nouveau relevé</UButton></NuxtLink>
      </div>
    </template>
  </UCard>
</template>
<script setup>
const select = (row) => {
  useRouter().push("/" + row.id);
};
const columns = [
  {
    key: "entrepot",
    label: "Entrepôt",
  },
  {
    key: "date",
    label: "Date",
  },
  {
    key: "technicien",
    label: "Technicien",
  },
  {
    key: "status",
  },
];
const releve = [
  {
    id: 1,
    date: new Date(),
    entrepot: "Surgelés",
    technicien: ["Clément"],
  },
  {
    id: 2,
    date: new Date(),
    entrepot: "Epicerie",
    technicien: ["Pascal"],
  },
];
const goTo = (id) => {
  useRouter().push("/" + id);
};
</script>
