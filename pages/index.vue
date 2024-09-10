<template>
  <div class="container mx-auto my-10">
    <h1 class="text-3xl font-bold mb-5">Welcome to My Nuxt App</h1>

    <Button label="Click Me" class="p-button-raised p-button-success" />

    <div class="grid mt-10">
      <div class="col-4">
        <p class="p-4 bg-gray-100">Column 1</p>
      </div>
      <div class="col-4">
        <p class="p-4 bg-gray-100">Column 2</p>
      </div>
      <div class="col-4">
        <p class="p-4 bg-gray-100">Column 3</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "primevue/button";
</script>
