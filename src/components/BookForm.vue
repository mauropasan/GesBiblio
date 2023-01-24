<script>
import { def } from '@vue/shared';
import { useDataStore } from '../stores/data';

export default {
    computed: {
        authors: 'authors',
        books: 'books',
        topics: 'topics',
    }
}
</script>

<template>
    <form novalidate class="col-4 m-auto">
        <label for="id">Id:</label><br />
        <input type="text" class="w-100" name="id" id="id" disabled><br />

        <label for="nombre">Nombre:</label><br />
        <input type="text" class="w-100" name="nombre" id="nombre" required min="2" max="50"><br />

        <label for="ISBN">ISBN:</label><br />
        <input type="text" class="w-100" name="ISBN" id="ISBN" min="10" max="10"><br />

        <label for="autor">Autor:</label><br />
        <select type="text" class="w-100" name="autor" id="autor" required>
            <option value="">--- Selecciona un autor ---</option>
            <option v-for="author in authors" :key="author.id" :value="author.id">
                {{ author.nombre }} {{ author.apellidos }}
            </option>
        </select><br />

        <label for="tema">Tema:</label><br />
        <select type="text" class="w-100" name="tema" id="tema" required>
            <option value="">--- Selecciona un tema ---</option>
            <option v-for="topic in topics" :key="topic.id" :value="topic.id">
                {{ topic.nombre }}
            </option>
        </select><br />

        <label for="desc">Descripción:</label><br />
        <input type="text" class="w-100" name="desc" id="desc"><br />

        <label for="img">Imágen:</label><br />
        <input type="text" class="w-100" name="img" id="img"><br />

        <div class="buttons my-3">
            <input type="submit" class="btn btn-dark col-3 mx-3" value="Guardar">
            <input type="reset" class="btn btn-danger col-3 mx-3" value="Reset">
            <input type="button" class="btn btn-warning col-3 mx-3" value="Cancelar" @click="this.$router.push('/libros')">
        </div>
    </form>
</template>