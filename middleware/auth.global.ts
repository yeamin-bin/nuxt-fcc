export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIng = false;

  if (isLoggedIng) {
    return navigateTo(to.fullPath);
  }

  return navigateTo('/login');
});
