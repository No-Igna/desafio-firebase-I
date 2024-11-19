<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">{{ usuarioEditando ? 'Editar' : 'Agregar' }} Usuario</h1>

    <!-- Formulario de usuario -->
    <div class="card p-4">
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input v-model="nuevoUsuario.nombre" id="nombre" type="text" class="form-control" placeholder="Nombre" required />
      </div>
      <div class="mb-3">
        <label for="correo" class="form-label">Correo Electrónico</label>
        <input 
          v-model="nuevoUsuario.correo" 
          id="correo" 
          type="email" 
          class="form-control" 
          placeholder="Correo Electrónico" 
          required 
          :class="{'is-invalid': correoInvalido && nuevoUsuario.correo}" 
          @blur="validarCorreo"
        />
        <div v-if="correoInvalido && nuevoUsuario.correo" class="invalid-feedback">
          Por favor ingrese un correo electrónico válido.
        </div>
      </div>
      <div class="mb-3">
        <label for="colorFavorito" class="form-label">Color Favorito</label>
        <input v-model="nuevoUsuario.colorFavorito" id="colorFavorito" type="color" class="form-control" placeholder="Color Favorito" required />
      </div>

      <div class="d-flex justify-content-between">
        <button @click="agregarUsuario" :disabled="isFormInvalid" class="btn btn-primary">Agregar</button>
        <div v-if="usuarioEditando">
          <button @click="guardarEdicion" :disabled="isFormInvalid" class="btn btn-success">Guardar</button>
          <button @click="cancelarEdicion" class="btn btn-secondary ms-2">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'UsuariosForm',
  data() {
    return {
      usuarioEditando: null,
      nuevoUsuario: {
        nombre: '',
        correo: '',
        colorFavorito: ''
      },
      correoInvalido: false,
    };
  },
  computed: {
    ...mapGetters(['usuarios']),
    isFormInvalid() {
      const { nombre, correo, colorFavorito } = this.nuevoUsuario;
      return !nombre.trim() || !correo.trim() || !colorFavorito.trim() || this.correoInvalido;
    }
  },
  methods: {
    ...mapActions(['addUsuario', 'editUsuario']),
    agregarUsuario() {
      if (this.isFormInvalid) return;
      this.addUsuario({ ...this.nuevoUsuario });
      this.nuevoUsuario = { nombre: '', correo: '', colorFavorito: '#000000' };
      this.$router.push({ name: 'usuarios-list' });
    },
    guardarEdicion() {
      if (this.isFormInvalid) return;
      this.editUsuario({ ...this.nuevoUsuario });
      this.cancelarEdicion();
      this.$router.push({ name: 'usuarios-list' });
    },
    cancelarEdicion() {
      this.usuarioEditando = null;
      this.nuevoUsuario = { nombre: '', correo: '', colorFavorito: '#000000' };
    },
    validarCorreo() {
      const correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      this.correoInvalido = !correoRegex.test(this.nuevoUsuario.correo);
    }
  },
  mounted() {
    const usuarioId = this.$route.params.id;
    if (usuarioId) {
      const usuario = this.usuarios.find((u) => u.id === usuarioId);
      if (usuario) {
        this.usuarioEditando = usuario;
        this.nuevoUsuario = { ...usuario };
      }
    }
  }
};
</script>

<style scoped></style>