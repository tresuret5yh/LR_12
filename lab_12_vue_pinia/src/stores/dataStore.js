import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDataStore = defineStore('data', () => {
  const apiData = ref(null)
  const formData = ref({
    firstname: '',
    lastname: ''
  })
  const loading = ref(false)
  const error = ref(null)

  const fetchData = async () => {
    try {
      loading.value = true
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      apiData.value = await response.json()
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const submitForm = async () => {
    try {
      loading.value = true
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: formData.value.firstname,
          body: formData.value.lastname,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      return await response.json()
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { apiData, formData, loading, error, fetchData, submitForm }
})