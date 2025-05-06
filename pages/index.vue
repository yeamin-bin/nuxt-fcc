<template>
  <!-- <div>
    <Header />
    <h1>Home Page</h1>
    <Profile />
  </div> -->

  <div class="main">
    Main page

    <img src="/img-1.jpg" alt="" />

    <Human />
  </div>
</template>

<script setup>
import Human from '~/components/icons/Human.vue';

const { $sayHello } = useNuxtApp();

$sayHello('Rasel');

// const { sayHello } = useUtils();

// sayHello();
</script>

<style lang="scss" scoped></style>
