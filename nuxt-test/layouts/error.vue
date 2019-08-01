<template>
  <div>
    <div style="width: 100%; height: 300px; background: #f00; color: #fff;">这是一个错误页面</div>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "test-layouts"
};
</script>

