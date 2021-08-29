<template>
  <div class="row top-buffer col-md-4 offset-md-4">
    <nav class="navbar navbar-light bg-light" :style="style">{{ text }}</nav>
  </div>
</template>

<script>
export default {
  name: "MessageStatus",
  props: {
    text: { type: String, required: true},
    style: { type: String, required: true},
  }
}
</script>

<style scoped>
.top-buffer {
  margin-top: 20px;
}
</style>