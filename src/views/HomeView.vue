<template>
  <div class="home">
    <div class="filter">
      <span><strong>Filter:</strong></span>
      <TableFilter :options="options" :onChangeMethod="filterOnChange"/>
    </div>
    <Table :data="companies(filter)" />
    <span>Total: {{ companies(filter).length }} companies of {{ companies('all').length }}</span>
  </div>
</template>

<script>
import Table from '@/components/Table.vue'
import TableFilter from '@/components/TableFilter.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    Table,
    TableFilter
  },
  data() {
    return {
      filter: 'all',
    }
  },
  mounted() {
    this.fetchCompanies('url')
  },
  methods: {
    ...mapActions({
      fetchCompanies: 'fetchCompanies'
    }),
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    },
    filterOnChange(filter) {
      this.filter = filter
    },
  },
  computed: {
    ...mapGetters({
      companies: 'getCompanies'
    }),
    options() {
      const defaultOptions = [{
        label: 'All status',
        value: 'all'
      }]
      if (this.companies(this.filter).length > 0) {
        return [
          ...defaultOptions,
          ...this.companies('all').reduce((acc, curr) => {
            if (acc.findIndex(option => option.value === curr.status) === -1) {
              acc.push({
                value: curr.status,
                label: this.capitalizeFirstLetter(curr.status)
              })
            }
            return acc
          }, [])
        ]
      } else {
        return defaultOptions
      }
    }
  },
}
</script>

<style scoped>
.filter {
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
}
</style>
