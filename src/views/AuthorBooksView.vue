<script>
import { mapState } from 'pinia';
import Book from '../components/Book.vue';
import { useDataStore } from '../stores/data';

export default {
    props: {
        id: String,
    },
    components: {
        Book,
    },
    computed: {
        ...mapState(useDataStore, {
            getBooksByAuthorId: 'getBooksByAuthorId',
        })
    }
}
</script>

<template>
    <h1>Listado de libros</h1>
    <template v-if="getBooksByAuthorId(Number(id)).length">
        <book v-for="book in getBooksByAuthorId(Number(id))" :key="book.id" :book="book"></book>
    </template>
    <template v-else>
        <p>No hay ningún libro escrito por este autor.</p>
    </template>
</template>