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
            books: 'books',
        })
    }
}
</script>

<template>
    <h1>Listado de libros</h1>
    <template v-if="books.length">
        <div class="row col-11">
            <book v-for="book in books" :key="book.id" :book="book"></book>
        </div>
    </template>
    <template v-else>
        <p>No hay ningún libro en la biblioteca.</p>
    </template>
</template>