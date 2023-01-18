<script>
import { mapState } from 'pinia';
import Author from '../components/Author.vue';
import { useDataStore } from '../stores/data';

export default {
    components: {
        Author,
    },
    computed: {
        ...mapState(useDataStore, {
            authors: 'authors'
        })
    }
}
</script>

<template>
    <div>
        <h1>Listado de autores</h1>
        <template v-if="authors.length">
            <table class="col-12">
                <thead class="bg-dark">
                    <th colspan="5" class="p-3"></th>
                </thead>
                <tbody>
                    <author v-for="author in authors" :key="author.id" :author="author"></author>
                </tbody>
            </table>
        </template>
        <template v-else>
            <p>No hay ningún autor en la biblioteca.</p>
        </template>
    </div>
</template>