<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th v-for="column in columns">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data">
          <td v-for="column in columns">{{ row[column] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    data: Array
  },
  computed: {
    columns() {
      if (this.data.length > 0) {
        return Object.keys(this.data[0])
      } else {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
