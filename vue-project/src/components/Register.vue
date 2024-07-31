<template>
  <div class="q-pa-md container" style="max-width: 800px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="formData.colaborador"
        label="Nome"
        hint="Nome e sobrenome"
        lazy-rules
        :rules="[val => val && val.length > 0 || 'Por gentileza, insira o Nome']"
      />
      <q-input
        filled
        v-model="formData.setor"
        label="Setor"
        hint=""
        lazy-rules
        :rules="[val => val && val.length > 0 || 'Por gentileza, insira o Setor']"
      />
      <q-input
        filled
        v-model="formData.ramal"
        label="Ramal"
        hint=""
        type="number"
        lazy-rules
        :rules="[val => val && val.length > 0 || 'Por gentileza, insira o Ramal']"
      />
      <q-input
        filled
        type="text"
        v-model="formData.whatsapp"
        label="WhatsApp"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por gentileza, insira o WhatsApp',
          val => val.length > 0 || 'WhatsApp deve ter pelo menos um caractere'
        ]"
      />
      <div>
        <q-btn label="Cadastrar" type="submit" color="primary"/>
        <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm"/>
      </div>
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const $q = useQuasar()

    const formData = ref({
      setor: '',
      colaborador: '',
      ramal: '',
      whatsapp: '',
      status: 'O' // Default value for status
    })

    const onSubmit = async () => {
      if (!formData.value.setor || !formData.value.colaborador || !formData.value.ramal || !formData.value.whatsapp) {
        $q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Todos os campos são obrigatórios!'
        })
        return
      }

      try {
        await axios.post('http://ramaisapi.yukalinetelecom.com.br/api/ramais/', formData.value)
         $q.notify({
           color: 'green-4',
           textColor: 'white',
           icon: 'cloud_done',
           message: 'Colaborador registrado com sucesso!'
         })
        onReset() // Limpar o formulário após o sucesso
      } catch (error) {
        console.error('Erro ao registrar colaborador:', error)
         $q.notify({
           color: 'red-5',
           textColor: 'white',
           icon: 'error',
           message: 'Erro ao registrar colaborador. Verifique o console para mais detalhes.'
         })
      }
    }

    const onReset = () => {
      formData.value = {
        setor: '',
        colaborador: '',
        ramal: '',
        whatsapp: '',
        status: 'O'
      }
    }

    return {
      formData,
      onSubmit,
      onReset
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
