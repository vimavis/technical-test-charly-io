<template>
  <div class="filter">
    <select
      v-model="selected"
    >
      <option v-for="option in options" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'TableFilter',
  props: {
    options: Array,
    onChangeMethod: Function
  },
  data() {
    return {
      selected: 'all'
    }
  },
  watch: {
    selected() {
      this.onChangeMethod(this.selected)
    }
  }
}
</script>
