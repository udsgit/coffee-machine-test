<template>
  <div class="form-group">
    <label :for="name">{{ label }}</label>
    <input
        type="text"
        class="form-control"
        :name="name"
        :id="name"
        :alt="alt"
        :placeholder="placeholder"
        :value="value"
        @input="$emit(`update:${name}`, $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "InputText",
  props: {
    value: { type: String, required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    placeholder: { type: String, required: false },
    alt: { type: String, required: false },
  }
}
</script>
