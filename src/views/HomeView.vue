<template>
  <div class="home">
    <Table 
      :data="companies"
    />
  </div>
</template>

<script>
import Table from '@/components/Table.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'HomeView',
  components: {
    Table
  },
  computed: {
    ...mapGetters({
      companies: 'getCompanies'
    })
  },
}
</script>
