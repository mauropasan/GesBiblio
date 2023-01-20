<script>
import { mapState } from 'pinia';
import { useDataStore } from '../stores/data';

export default {
    props: {
        id: String,
    },
    computed: {
        ...mapState(useDataStore, {
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
                    <img :src="'/src/assets/' + this.getAuthorById(Number(id)).img" class="card-img-top foto" :alt="this.getAuthorById(Number(id)).nombre" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ `${this.getAuthorById(Number(id)).nombre} ${this.getAuthorById(Number(id)).apellidos}`}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{ `${this.getAuthorById(Number(id)).nacionalidad}` }}</h6>
                        <button class="btn btn-secondary" title="Ver libros" @click="$router.push(`/autor/${Number(id)}/libros`)">
                            <i class="bi bi-person"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>