<template>
  <div class="q-pa-md container">
    <q-table
      flat bordered
      title="Ramais"
      :rows="rows"
      :columns="columns"
      row-key="id"
      dark
      color="amber"
      class="custom-table"
    >
      <!-- Exibição dos campos editáveis -->
      <template v-slot:body-cell-setor="props">
        <q-td :props="props">
          <q-input
            v-if="props.row.edit"
            v-model="props.row.setor"
            dense
            outlined
            label="Setor"
          />
          <span v-else>{{ props.row.setor }}</span>
        </q-td>
      </template>
      <template v-slot:body-cell-colaborador="props">
        <q-td :props="props">
          <q-input
            v-if="props.row.edit"
            v-model="props.row.colaborador"
            dense
            outlined
            label="Colaborador"
          />
          <span v-else>{{ props.row.colaborador }}</span>
        </q-td>
      </template>
      <template v-slot:body-cell-ramal="props">
        <q-td :props="props">
          <q-input
            v-if="props.row.edit"
            v-model="props.row.ramal"
            dense
            outlined
            label="Ramal"
          />
          <span v-else>{{ props.row.ramal }}</span>
        </q-td>
      </template>
      <template v-slot:body-cell-whatsapp="props">
        <q-td :props="props">
          <q-input
            v-if="props.row.edit"
            v-model="props.row.whatsapp"
            dense
            outlined
            label="WhatsApp"
          />
          <span v-else>{{ props.row.whatsapp }}</span>
        </q-td>
      </template>
      <template v-slot:body-cell-editar="props">
        <q-td :props="props">
          <q-checkbox
            v-model="props.row.edit"
          />
          <q-btn
            v-if="props.row.edit"
            label="Salvar"
            color="primary"
            @click="saveRow(props.row)"
            class="q-mr-sm"
          />
          <q-btn
            v-if="props.row.edit"
            label="Cancelar"
            color="negative"
            @click="cancelEdit(props.row)"
          />
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
      { name: 'setor', required: true, label: 'Setor', align: 'left', field: 'setor', sortable: true },
      { name: 'colaborador', label: 'Colaborador', align: 'center', field: 'colaborador', sortable: true },
      { name: 'ramal', label: 'Ramal', field: 'ramal', sortable: true },
      { name: 'whatsapp', label: 'WhatsApp', field: 'whatsapp' },
      { name: 'editar', label: 'Editar', field: 'editar' }
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

    // Função para atualizar os dados
    const saveRow = async (row) => {
      try {
        await axios.put(`http://ramaisapi.yukalinetelecom.com.br/api/ramais/${row.id}/`, row)
        row.edit = false
        console.log('Dados atualizados com sucesso.')
      } catch (error) {
        console.error('Erro ao atualizar dados:', error)
      }
    }

    // Função para cancelar a edição
    const cancelEdit = (row) => {
      // Recarregar os dados da linha para desfazer as edições
      const originalRow = rows.value.find(r => r.id === row.id)
      if (originalRow) {
        Object.assign(row, originalRow)
        row.edit = false
      }
    }

    // Carregar os dados quando o componente é montado
    onMounted(() => {
      loadData()
    })

    return {
      columns,
      rows,
      saveRow,
      cancelEdit
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
