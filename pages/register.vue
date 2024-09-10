<template>
  <section
    class="min-h-screen flex items-center justify-center bg-darkBg text-neonPurple"
  >
    <div
      class="p-10 border border-neonPurple rounded-lg shadow-lg max-w-md mx-auto"
    >
      <h2 class="text-2xl font-bold text-center mb-8">Create Your Account</h2>
      <form @submit.prevent="register">
        <div class="mb-4">
          <InputText
            v-model="email"
            placeholder="Email"
            class="w-full p-inputtext-lg"
            style="color: #9b5de5; background-color: #1a1a1a; border: none"
          />
        </div>
        <div class="mb-4">
          <Password
            v-model="password"
            placeholder="Password"
            feedback="false"
            class="w-full p-inputtext-lg"
            style="color: #9b5de5; background-color: #1a1a1a; border: none"
          />
        </div>
        <div class="mb-6">
          <Password
            v-model="confirmPassword"
            placeholder="Confirm Password"
            feedback="false"
            class="w-full p-inputtext-lg"
            style="color: #9b5de5; background-color: #1a1a1a; border: none"
          />
        </div>
        <Button
          label="Sign Up"
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
          Already have an account?
          <a @click="toggleAuthMode" class="text-neonPurple cursor-pointer"
            >Login</a
          >
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const router = useRouter();

const register = async () => {
  if (password.value !== confirmPassword.value) {
    console.error("Passwords do not match");
    return;
  }

  const { $supabase } = useNuxtApp();

  const { data, error } = await $supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });

  if (error) {
    console.error("Sign-up error:", error);
  } else {
    const { error: insertError } = await $supabase.from("users").insert([
      {
        auth_id: data.user.id,
        full_name: fullName.value,
        email: email.value,
      },
    ]);

    if (insertError) {
      console.error("Error inserting into users table:", insertError);
    } else {
      router.push("/dashboard");
    }
  }
};

const toggleAuthMode = () => {
  navigateTo("/auth");
};
</script>

<style scoped>
.section {
  background-color: #1a1a1a;
  color: #9b5de5;
}
</style>
