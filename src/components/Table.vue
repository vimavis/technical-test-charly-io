<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th
            class="column"
            v-for="column in columns"
            :class="{ 'active': sort.includes(column) }" 
            @click="sortBy(column)"
          >{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in dataView">
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
  data() {
    return {
      sort: ''
    }
  },
  methods: {
    sortBy(column) {
      if (this.sort === column) {
        this.sort = '-' + column
      } else if (this.sort === '-' + column) {
        this.sort = ''
      } else {
        this.sort = column
      }
      console.log(this.sort)
    }
  },
  computed: {
    columns() {
      if (this.data.length > 0) {
        return Object.keys(this.data[0])
      } else {
        return []
      }
    },
    dataView() {
      if (this.sort) {
        let dataReturn = []
        if (this.sort.includes('date')) {
          dataReturn = [...this.data].sort((a, b) => {
            return (new Date(a['date']) - new Date(b['date']))
          })
        } else if(this.sort.includes('name')) {
          dataReturn = [...this.data].sort((a, b) => {
            return a['name'].localeCompare(b['name'])
          })
        } else {
          const order = this.sort.includes('-') ? this.sort.slice(1) : this.sort 
          dataReturn = [...this.data].sort((a, b) => {
            return (a[order] - b[order])
          })
        }
        if (this.sort.startsWith('-')) {
          return dataReturn.reverse()
        } else {
          return dataReturn
        }
      } else {
        return this.data
      }
    }
  }
}
</script>

<style scoped>
.table {
  width: 100%;
}

.column {
  text-transform: uppercase;
  cursor: pointer;
  text-align: left;
}

.active {
  color: #6b809b;
}

tbody > tr:nth-child(2n+1) {
    background-color: #f2f2f2;
}

tbody > tr:hover {
    background-color: #ddd;
}
</style>
