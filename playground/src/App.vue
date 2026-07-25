<script setup lang="ts">
import { Boton } from "./components/app/Button"
import { Dialog } from "./components/app/Dialog"
</script>

<template>
  <Dialog>  <Boton label="hola"></Boton>
    <template #content>
      Eyyy
    </template>
</Dialog>
</template>
