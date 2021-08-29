<template>
  <nav class="navbar navbar-light bg-light">
    <Link
        v-for="link in linkList"
        :key="link.id"
        :url="link.url"
        :name="link.name"
        :image="link.image"
    />
  </nav>
</template>

<script>
import Link from "@/components/molecules/Link";
import { ref } from "vue";
export default {
  name: "NavBar",
  components: {
    Link
  },
  setup(){
    const linkList = ref([
      {
        url: "#",
        name: "Coffe Machine",
        id: 10000,
        image: {
          imgClass: "d-inline-block align-top",
          src: "java.png",
          width: "30",
          height: "30",
          alt: "coffee logo"
        },
      }
    ]);
    return {
      linkList
    }
  }
}
</script>
