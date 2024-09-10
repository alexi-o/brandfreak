<template>
  <Menubar :model="menuItems" class="bg-gray-900 text-white">
    <template #start>
      <div class="text-2xl font-bold text-white ml-4">MyBrand</div>
    </template>

    <template #end>
      <div class="flex space-x-4">
        <template v-if="isLoggedIn">
          <NuxtLink to="/dashboard" class="hover:text-gray-300"
            >Dashboard</NuxtLink
          >
          <button @click="logout" class="hover:text-gray-300">Logout</button>
        </template>
        <template v-else>
          <NuxtLink to="/auth" class="hover:text-gray-300">Login</NuxtLink>
          <NuxtLink to="/register" class="hover:text-gray-300"
            >Sign Up</NuxtLink
          >
        </template>
      </div>
    </template>
  </Menubar>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const isLoggedIn = ref(false);
const router = useRouter();

const checkSession = async () => {
  const { $supabase } = useNuxtApp();
  const {
    data: { session },
  } = await $supabase.auth.getSession();
  isLoggedIn.value = !!session;
};

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

onMounted(() => {
  checkSession();
});
</script>

<style scoped>
.bg-gray-900 {
  background-color: #1a1a1a;
}

.text-white {
  color: #fff;
}

.hover\:text-gray-300:hover {
  color: #d1d5db;
}
</style>
