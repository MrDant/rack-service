<template>
  <div>
    <Back class="mb-2" />
    <UCard>
      <template #header>
        <div class="flex gap-2 items-center">
          <b
            :class="
              info.entrepot == 'Surgelés' ? 'text-sky-700' : 'text-green-700'
            "
          >
            {{ info.entrepot }}
          </b>
          |
          <i>
            {{
              info.date.toLocaleDateString("fr-fr", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            }}
          </i>
          |
          <UBadge v-for="t in info.technicien" :key="t">{{ t }}</UBadge>
        </div>
      </template>
      <UTable :rows="releves" :columns="columns">
        <template #emplacement-data="{ row }">
          <UInput v-model="row.emplacement" />
        </template>
        <template #element-data="{ row }">
          <UInputMenu v-model="row.element" :options="element" />
        </template>
        <template #hauteur-data="{ row }">
          <UInput v-model="row.hauteur" />
        </template>
        <template #anomalie-data="{ row }">
          <UInputMenu v-model="row.anomalie" :options="anomalie" />
        </template>
        <template #nu-data="{ row }">
          <UInputMenu v-model="row.nu" :options="nu" />
        </template>
        <template #reparation-data="{ row }">
          <UInput v-model="row.reparation" />
        </template>
        <template #action-data="{ index }">
          <UButton icon="i-heroicons-trash" @click="releves.splice(index, 1)" />
        </template>
      </UTable>
      <template #footer>
        <div class="flex justify-center w-full">
          <UButton
            @click="
              releves.push({
                emplacement: '',
                element: '',
                hauteur: '',
                anomalie: '',
                nu: '',
                reparation: '',
              })
            "
            >+ Ajouter une ligne</UButton
          >
        </div>
      </template>
    </UCard>
  </div>
</template>
<script setup>
const element = [];
const anomalie = ["choc"];
const nu = ["vert", "orange", "rouge", "autre"];

const info = {
  date: new Date(),
  technicien: ["clément"],
  entrepot: "Surgelés",
};

const columns = [
  { key: "emplacement", label: "Enplacement" },
  { key: "element", label: "Elément" },
  { key: "hauteur", label: "Hauteur" },
  { key: "anomalie", label: "Anomalie" },
  { key: "nu", label: "NU" },
  { key: "reparation", label: "Réparation" },
  { key: "action", label: "" },
];
const releves = ref([
  {
    emplacement: "",
    element: "",
    hauteur: "",
    anomalie: "",
    nu: "",
    reparation: "",
  },
]);
</script>
