<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
      validator(value) {
        return 0 <= value <= 100 && Number.isInteger(value)
      }
    }
  },
  computed: {
    percentageDisplay() {
      return `${this.value.toFixed(0)}%`
    }
  }
}
</script>

<template>
  <div>{{ percentageDisplay }}</div>
</template>

<style scoped></style>
