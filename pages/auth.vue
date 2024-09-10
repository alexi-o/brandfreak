<template>
  <section
    class="min-h-screen flex items-center justify-center bg-darkBg text-neonPurple"
  >
    <div class="container mx-auto p-4">
      <div
        class="p-10 border border-neonPurple rounded-lg shadow-lg max-w-md mx-auto"
      >
        <h2 class="text-2xl font-bold text-center mb-8">
          Login to Your Account
        </h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <InputText
              v-model="email"
              placeholder="Email"
              class="w-full p-inputtext-lg"
              style="color: #9b5de5; background-color: #1a1a1a; border: none"
            />
          </div>
          <div class="mb-6">
            <Password
              v-model="password"
              placeholder="Password"
              feedback="false"
              class="w-full p-inputtext-lg"
              style="color: #9b5de5; background-color: #1a1a1a; border: none"
            />
          </div>
          <Button
            label="Login"
            type="submit"
            class="p-button-raised p-button-lg w-full mb-4"
            style="
              background-color: #9b5de5;
              border: none;
              color: #fff;
              box-shadow: 0 0 10px #9b5de5, 0 0 20px #9b5de5;
            "
          />
          <p class="text-center text-sm">
            Don't have an account?
            <a @click="toggleAuthMode" class="text-neonPurple cursor-pointer"
              >Sign up</a
            >
          </p>
        </form>
      </div>
    </div>
    <!-- Toast component to show error notifications -->
    <Toast />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast"; // Use Toast service

const email = ref("");
const password = ref("");
const router = useRouter();
const toast = useToast(); // Initialize the toast

const login = async () => {
  const { $supabase } = useNuxtApp();

  const { data, error } = await $supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (error) {
    toast.add({
      severity: "error",
      summary: "Login Failed",
      detail: error.message,
      life: 3000,
    });
    console.error("Login error:", error);
  } else {
    router.push("/dashboard");
  }
};

const toggleAuthMode = () => {
  navigateTo("/register");
};
</script>

<style scoped>
.container {
  border-color: #9b5de5;
}

.section {
  background-color: #1a1a1a;
  color: #9b5de5;
}

p {
  color: #9b5de5;
}
</style>
