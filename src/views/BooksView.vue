<script>
import { mapState } from 'pinia';
import Book from '../components/Book.vue';
import { useDataStore } from '../stores/data';

export default {
    components: {
        Book,
    },
    computed: {
        ...mapState(useDataStore, {
            books: 'books'
        })
    }
}
</script>

<template>
    <h1>Listado de libros</h1>
    <template v-if="books.length">
            <table class="col-12">
                <thead class="bg-dark">
                    <th colspan="6" class="p-3"></th>
                </thead>
                <tbody>
                    <book v-for="book in books" :key="book.id" :book="book"></book>
                </tbody>
            </table>
        </template>
        <template v-else>
            <p>No hay ningún autor en la biblioteca.</p>
        </template>
</template>