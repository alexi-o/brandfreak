<template>
  <section
    class="flex items-center justify-center min-h-screen bg-darkBg text-neonPurple"
  >
    <div class="text-center max-w-screen-xl mx-auto px-4">
      <h1 class="text-6xl font-bold mb-5">
        Welcome to Your Brand Management Tool
      </h1>
      <p class="text-lg mb-8">Manage all your brand assets in one place.</p>
      <div>
        <Button
          label="Get Started"
          class="p-button-raised p-button-lg p-button-success"
          @click="goToAuth"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToAuth = () => {
  router.push("/auth");
};
</script>

<style scoped>
section {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
}

h1 {
  text-shadow: 0 0 10px #9b5de5, 0 0 20px #9b5de5;
}

p {
  text-shadow: 0 0 8px #9b5de5;
}
</style>
