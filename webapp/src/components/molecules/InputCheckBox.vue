<template>
  <div class="custom-control custom-checkbox">
    <input
        type="checkbox"
        class="custom-control-input"
        :id="name"
        :value="value"
        @change="$emit(`update:${name}`, $event.target.checked)"
    />
    <label class="custom-control-label" :for="name">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: "InputCheckBox",
  props: {
    value: { type: Boolean, required: true },
    name: { type: String, required: true },
    label: { type: String, required: false }
  }
}
</script>
