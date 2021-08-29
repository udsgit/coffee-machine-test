<template>
  <a class="navbar-brand" :href="url">
    <img v-if="image"
        class="d-inline-block align-top"
        :src="image.src"
        :width="image.width"
        :height="image.height"
        :alt="image.alt"
    />
    {{ name }}
  </a>
</template>

<script>
export default {
  name: "Link",
  props: {
    url: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: Object, required: false}
  }
}
</script>
