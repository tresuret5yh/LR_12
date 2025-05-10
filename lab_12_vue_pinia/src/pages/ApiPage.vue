<template>
  <div class="api-page">
    <h1>Пользователи с API</h1>
    <button @click="store.fetchData()" :disabled="store.loading">
      {{ store.loading ? 'Загрузка...' : 'Получить данные' }}
    </button>
    
    <div v-if="store.error" class="error">{{ store.error }}</div>
    
    <ul v-if="store.apiData">
      <li v-for="user in store.apiData" :key="user.id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useDataStore } from '@/stores/dataStore'

const store = useDataStore()
</script>

<style scoped>
.api-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
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
  margin: 10px 0;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 8px;
  border-bottom: 1px solid #eee;
}
</style>