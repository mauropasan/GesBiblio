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
            <div>
                <table class="col-12">
                    <thead class="bg-dark">
                        <th colspan="6" class="p-3"></th>
                    </thead>
                    <tbody>
                        <author v-for="author in authors" :key="author.id" :author="author"></author>
                    </tbody>
                    <strong>Autores listados: {{ authors.length }}</strong>
                </table>
            </div>
        </template>
        <template v-else>
            <p>No hay ningún autor en la biblioteca.</p>
        </template>
    </div>
</template>