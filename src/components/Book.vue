<script>
import { mapState } from 'pinia';
import { useDataStore } from '../stores/data';

export default {
  props: {
    book: Object,
  },
  computed: {
    ...mapState(useDataStore, {
      getTopicById: 'getTopicById',
      getAuthorById: 'getAuthorById',
    })
  }
}
</script>

<template>
  <div class="col-4">
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="'src/assets/' + book.img" class="card-img-top foto" :alt="book.name" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ book.nombre }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ getAuthorById(book.autor).nombre }}</h6>
            <p class="card-text"><small class="text-muted">{{ getTopicById(book.tema).nombre }}</small></p>
            <p class="card-text">{{ book.desc }}</p>
            <button class="btn btn-secondary" title="Editar">
              <i class="bi bi-pencil"></i>
            </button>
            <button class="btn btn-secondary" title="Eliminar">
              <i class="bi bi-trash"></i>
            </button>
            <button class="btn btn-secondary" title="Ver autor" @click="$router.push(`/autor/${Number(book.autor)}`)">
              <i class="bi bi-person"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
button {
  margin: 5px;
}
</style>