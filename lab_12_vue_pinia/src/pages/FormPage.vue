<template>
  <div class="form-page">
    <h1>Форма отправки</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="firstname">Имя:</label>
        <input 
          id="firstname" 
          v-model="store.formData.firstname" 
          required
        >
      </div>
      
      <div class="form-group">
        <label for="lastname">Фамилия:</label>
        <input 
          id="lastname" 
          v-model="store.formData.lastname" 
          required
        >
      </div>
      
      <button type="submit" :disabled="store.loading">
        {{ store.loading ? 'Отправка...' : 'Отправить' }}
      </button>
      
      <div v-if="store.error" class="error">{{ store.error }}</div>
      <div v-if="successMessage" class="success">{{ successMessage }}</div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDataStore } from '@/stores/dataStore'

const store = useDataStore()
const successMessage = ref('')

const handleSubmit = async () => {
  successMessage.value = ''
  const response = await store.submitForm()
  if (response) {
    successMessage.value = 'Данные успешно отправлены!'
    store.formData.firstname = ''
    store.formData.lastname = ''
  }
}
</script>

<style scoped>
.form-page {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.error {
  color: red;
  margin-top: 10px;
}

.success {
  color: green;
  margin-top: 10px;
}
</style>
