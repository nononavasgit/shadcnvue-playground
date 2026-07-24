<script setup lang="ts">
import { Separator } from "@/components/app/Separator";
import { useDate } from "@/composables/useDate";

const { formatDate } = useDate();
</script>

<template>
  <main class="playground">
    <section class="card">
      <p class="eyebrow">Repositorio consumidor</p>
      <h1>shadcnvue-playground</h1>
      <p>
        Este Separator y el composable useDate están copiados dentro de esta
        aplicación. No se importan desde node_modules y se pueden modificar
        libremente.
      </p>
      <Separator />
      <small>{{ formatDate(Date.now(), { locale: "es-ES" }) }}</small>
    </section>
  </main>
</template>
