<script>

export default {
    props: {
        author: Object,
    }
}
</script>

<template>
    <tr>
        <td>{{ Number(author.id) }}</td> 
        <td>{{ author.nombre }}</td>
        <td>{{ author.apellidos }}</td>
        <td>{{ author.nacionalidad }}</td>
        <td><img :src="'./src/assets/' + author.img" :alt="author.img" class="w-25"></td>
        <td class="buttons">
            <button type="button" class="btn btn-dark" @click="$router.push(`/autor/${Number(author.id)}`)">
                <i class="bi bi-eye"></i>
            </button>
            <button type="button" class="btn btn-dark" @click="$router.push(`/autor/libros`)">
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