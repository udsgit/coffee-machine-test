<template>
  <div class="row top-buffer">
    <div class="col-md-4 offset-md-4">
      <InputText
          :value="drinkType"
          name="drinkType"
          label="Drink type"
          placeholder="Drink type"
          alt="Drink type"
          @update:drinkType="updateDrinkType"
      />
      <InputNumber
          :value="money"
          name="money"
          label="Money"
          :placeholder="0"
          alt="Money"
          @update:money="updateMoney"
      />

      <InputNumber
          :value="sugarQuantity"
          name="sugarQuantity"
          label="Sugar"
          :placeholder="0"
          alt="Number of sugar"
          @update:sugarQuantity="updateSugarQuantity"
      />

      <InputCheckBox
          :value="isExtraHot"
          name="isExtraHot"
          label="Wants extra hot?"
          @update:isExtraHot="updateIsExtraHot"
      />

      <button class="btn btn-primary" @click.prevent="$emit('submitted', {drinkType,money,sugarQuantity,isExtraHot})">
        Submit!
      </button>
    </div>
  </div>
</template>

<script>
import InputCheckBox from "@/components/molecules/InputCheckBox.vue";
import InputNumber from "@/components/molecules/InputNumber.vue";
import InputText from "@/components/molecules/InputText.vue";
import { ref } from "vue";
export default {
name: "CustomForm",
  components: {
    InputCheckBox,
    InputNumber,
    InputText
  },
  setup(){
    const drinkType = ref("");
    const money = ref(0);
    const sugarQuantity = ref(0);
    const isExtraHot = ref(false);
    const updateDrinkType = value => drinkType.value = value;
    const updateMoney = value => money.value = value;
    const updateSugarQuantity = value => sugarQuantity.value = value;
    const updateIsExtraHot = value => isExtraHot.value = value;
    const submitted = () => ({
      drinkType,
      money,
      sugarQuantity,
      isExtraHot
    });
    return {
      drinkType,
      money,
      sugarQuantity,
      isExtraHot,
      updateDrinkType,
      updateMoney,
      updateSugarQuantity,
      updateIsExtraHot,
      submitted
    }
  }
}
</script>
