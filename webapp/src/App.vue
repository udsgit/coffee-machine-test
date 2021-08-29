<template>
  <div>
    <NavBar/>
      <div class="container">
        <div class="text-center">
          <label :for="name"> Total spent: </label>
          {{ totalSpent }}
        </div>
      <CustomForm @submitted="submit"/>
        <MessageStatus v-if="response"
            :text="response.text"
            :style="response.style"
        />

    </div>
  </div>
</template>


<script type="ts">
import MessageStatus from "@/components/molecules/MessageStatus.vue";
import NavBar from "@/components/orgasnisms/NavBar.vue";
import CustomForm from "@/components/orgasnisms/CustomForm.vue";
import {putRequest, getTotalSpent} from "@/api";
import {ref, computed} from "vue";

export default {
  name: "App",
  components: {NavBar, CustomForm, MessageStatus},
  setup() {
    const response = ref("");
    const totalSpent = computed(() => getTotalSpent());
    const submit = value => putRequest("/make", value).then(data => response.value = data);
    return {
      response,
      totalSpent,
      submit
    }
  }
}
</script>
