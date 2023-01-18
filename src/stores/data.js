import { defineStore } from 'pinia'
import axios from 'axios'

const SERVER = import.meta.env.VITE_SERVER_URL

export const useDataStore = defineStore('data', {
  state: () => ({
      topics: [],
      books: [],
      authors: [],
      messages: [],
  }),
  getters: {
    getTopicById: (state) => (id) => state.topics.find(topic => topic.id = id) || {}
  },
  actions: {
    async loadData() {
      try {
        const [authorsResponse, booksResponse, topicsResponse] = await Promise.all([axios.get(`${SERVER}/autores`), axios.get(`${SERVER}/libros`), axios.get(`${SERVER}/temas`)])
        this.authors = authorsResponse.data
        this.books = booksResponse.data
        this.topics = topicsResponse.data
      } catch(err) {
        this.setMessage(err)
      }
    },
    async addTodo(title) {
      try {
        const newToDo = await axios.post(`${SERVER}/todos`, {
          title,
          done: false,
        })
        this.todos.push(newToDo)
      } catch (err) {
        setMessage(err)
      }
    }
  },
  async getTodos() {
    try {
      const response = await axios.get(`${SERVER}/todos`)
      this.todos = response.data
    } catch(err) {
      setMessage(err)
    }
  },
  setMessage(message) {
    this.messages.push(message)
    setTimeout(() => {
        this.messages.shift(message)
    }, 3000)
  },
})
