<template>
  <div class="q-pa-md container">
    <q-table
      flat
      bordered
      title="Ramais"
      :rows="rows"
      :columns="columns"
      row-key="id"
      dark
      color="amber"
      class="custom-table"
    >
      <template v-slot:body-cell-ramal="props">
        <q-td :props="props">
          <a :href="'callto:' + props.row.ramal">Ligar para: {{ props.row.ramal }}</a>
        </q-td>
      </template>
      <template v-slot:body-cell-whatsapp="props">
        <q-td :props="props">
          <a :href="'https://wa.me/+55' + props.row.whatsapp" target="_blank">Chamar: {{ props.row.whatsapp }}</a>
        </q-td>
      </template>
      <template v-slot:body-cell-editar="props">
        <q-td :props="props">
          <q-checkbox v-model="props.row.edit" />
          {{ props.row.edit }}
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import axios from 'axios'
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const columns = [
      { name: 'setor', required: true, label: 'Setor', align: 'left', field: 'setor' },
      { name: 'colaborador', label: 'Colaborador', align: 'center', field: 'colaborador' },
      { name: 'ramal', label: 'Ramal', field: 'ramal' },
      { name: 'whatsapp', label: 'WhatsApp', field: 'whatsapp' },
      // { name: 'status', label: 'Status', field: 'status' },
    ]

    const rows = ref([])

    // Função para carregar os dados da API
    const loadData = async () => {
      try {
        const response = await axios.get('http://ramaisapi.yukalinetelecom.com.br/api/ramais/')
        rows.value = response.data
      } catch (error) {
        console.error('Erro ao carregar dados:', error)
      }
    }

    // Carregar os dados quando o componente é montado
    onMounted(() => {
      loadData()
    })

    return {
      columns,
      rows
    }
  }
}
</script>

<style scoped>
.custom-table {
  --q-table-bg: #424242;
  --q-table-header-bg: #000000;
  --q-table-header-color: #0051ff;
  --q-table-color: #FFFFFF;
}

.custom-table th, .custom-table td {
  padding: 10px;
}

.custom-table th {
  background-color: var(--q-table-header-bg);
  color: var(--q-table-header-color);
  text-align: center;
}

.custom-table td {
  background-color: var(--q-table-bg);
  color: var(--q-table-color);
}

.custom-table tr:nth-child(even) {
  background-color: #333333;
}
</style>
