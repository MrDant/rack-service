<template>
  <div>
    <Back class="mb-2" />
    <UCard>
      <template #header>
        <h1>
          Création d'un nouveau relevé pour
          <span
            :class="
              form.entrepot == 'Surgelés' ? 'text-sky-700' : 'text-green-700'
            "
            >{{ form.entrepot }}</span
          >
        </h1>
      </template>
      <div class="grid grid-cols-2 items-center gap-2">
        <label for="technicien">Technicien(s) : </label>
        <div>
          <USelectMenu v-model="form.technicien" :options="tech" multiple />
          <UBadge v-for="t in form.technicien" :key="t">{{ t }}</UBadge>
        </div>

        <label for="date">Date du relevé : </label>
        <DatePicker v-model="form.date" id="date" />
      </div>
      <template #footer>
        <div class="flex justify-around items-center">
          <div class="flex gap-2 items-center">
            <toggle
              falseColor="sky"
              v-model="form.entrepot"
              trueValue="Epicerie"
              falseValue="Surgelés"
            ></toggle>
            <span>{{ form.entrepot }}</span>
          </div>
          <UButton @click="create">Créer</UButton>
        </div>
      </template>
    </UCard>
  </div>
</template>
<script setup>
import { tech } from "../shared/data";
const form = reactive({
  date: new Date(),
  technicien: [],
  entrepot: "Surgelés",
});

const create = () => {
  alert("create");
  useRouter().push("/");
};
</script>
