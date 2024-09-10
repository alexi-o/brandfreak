export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $supabase } = useNuxtApp();

  const {
    data: { session },
  } = await $supabase.auth.getSession();

  if (!session && to.path !== "/auth" && to.path !== "/register") {
    return navigateTo("/auth");
  }
});
