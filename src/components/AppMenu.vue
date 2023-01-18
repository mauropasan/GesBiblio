<template>
    <div class="col-12 d-flex">
        <nav class="bg-dark text-white col-12">
        <h1>GesBiblio</h1>
        <ul>
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/autores">Autores</router-link></li>
            <li><router-link to="/libros">Libros</router-link></li>
            <li><router-link to="/anyadir-libro">Añadir libro</router-link></li>
            <li><router-link to="/sobre-nosotros">Sobre nosotros</router-link></li>
        </ul>
    </nav>
    </div>
</template>

<style>
li {
    display: inline;
    margin: 0 10px 0 10px;
}
</style>