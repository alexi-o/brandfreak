<template>
  <section class="min-h-screen bg-darkBg text-neonPurple">
    <div class="container mx-auto p-6">
      <header class="flex items-center justify-between mb-8">
        <h1 class="text-3xl font-bold">Dashboard</h1>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          class="bg-gray-800 border border-neonPurple p-6 rounded-lg shadow-lg"
        >
          <h2 class="text-xl font-bold mb-4">Card Title</h2>
          <p>This is some information displayed in the card.</p>
        </div>
        <div
          class="bg-gray-800 border border-neonPurple p-6 rounded-lg shadow-lg"
        >
          <h2 class="text-xl font-bold mb-4">Card Title</h2>
          <p>This is some information displayed in the card.</p>
        </div>
        <div
          class="bg-gray-800 border border-neonPurple p-6 rounded-lg shadow-lg"
        >
          <h2 class="text-xl font-bold mb-4">Card Title</h2>
          <p>This is some information displayed in the card.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const logout = async () => {
  const { $supabase } = useNuxtApp();
  const { error } = await $supabase.auth.signOut();

  if (error) {
    console.error("Logout error:", error);
  } else {
    router.push("/auth");
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.bg-darkBg {
  background-color: #1a1a1a;
}

.border-neonPurple {
  border-color: #9b5de5;
}

.text-neonPurple {
  color: #9b5de5;
}

p {
  color: #fff;
}
</style>
