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
    getAuthorById: (state) => (id) => state.authors.find(author => author.id === id) || {},
    getBookById: (state) => (id) => state.books.find(book => book.id === id) || {},
    getTopicById: (state) => (id) => state.topics.find(topic => topic.id === id) || {},
    getBooksByAuthorId: (state) => (id) => state.books.find(book => book.autor === id) || {},
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
  },
  setMessage(message) {
    this.messages.push(message)
    setTimeout(() => {
        this.messages.shift(message)
    }, 3000)
  },
})
