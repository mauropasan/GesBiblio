<script>
import { mapState } from 'pinia';
import { useDataStore } from '../stores/data';

export default {
    props: {
        book: Object,
    },
    computed: {
        ...mapState(useDataStore, {
            getTopicById: 'getTopicById'
        })
    }
}
</script>

<template>
    <tr>
        <td>{{ book.ISBN }}</td>
        <td>{{ book.nombre }}</td>
        <td>{{ getTopicById(Number(book.topic)).name }}</td>
        <td><img :src="'./src/assets/' + book.img" :alt="book.img" class="w-25"></td>
        <td class="buttons">
            <button type="button" class="btn btn-dark" @click="$router.push(`/edit-book/${book.id}`)">
                <i class="bi bi-eye"></i>
            </button>
            <button type="button" class="btn btn-dark" @click="delProd">
                <i class="bi bi-calendar"></i>
            </button>
        </td>
    </tr>
</template>

<style>
button {
    margin: 5px;
}
</style>