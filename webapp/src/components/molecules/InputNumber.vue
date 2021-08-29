<template>
  <div class="form-group">
    <label :for="name">{{ label }}</label>
    <input
        type="number"
        class="form-control"
        :name="name"
        :id="name"
        :alt="alt"
        :placeholder="placeholder"
        :value="value"
        @input="$emit(`update:${name}`, Number($event.target.value))"
    />
  </div>
</template>

<script>
export default {
  name: "InputNumber",
  props: {
    value: { type: Number, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    placeholder: { type: Number, required: false },
    alt: { type: String, required: false },
  }
}
</script>
