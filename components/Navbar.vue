<template>
  <nav class="bg-gray-900 text-white p-4 flex justify-between items-center">
    <div class="text-2xl font-bold">MyApp</div>

    <div class="space-x-4">
      <NuxtLink to="/" class="hover:text-gray-300">Home</NuxtLink>
      <NuxtLink to="/about" class="hover:text-gray-300">About</NuxtLink>
    </div>

    <div class="space-x-4">
      <template v-if="!isLoggedIn">
        <NuxtLink to="/auth" class="hover:text-gray-300">Login</NuxtLink>
        <NuxtLink to="/register" class="hover:text-gray-300">Sign Up</NuxtLink>
      </template>

      <template v-else>
        <NuxtLink to="/dashboard" class="hover:text-gray-300"
          >Dashboard</NuxtLink
        >
        <button @click="logout" class="hover:text-gray-300">Logout</button>
      </template>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);

onMounted(async () => {
  const { $supabase } = useNuxtApp();
  const {
    data: { session },
  } = await $supabase.auth.getSession();

  isLoggedIn.value = !!session;
});

const logout = async () => {
  const { $supabase } = useNuxtApp();
  const { error } = await $supabase.auth.signOut();

  if (error) {
    console.error("Logout error:", error);
  } else {
    isLoggedIn.value = false;
    router.push("/auth");
  }
};
</script>
