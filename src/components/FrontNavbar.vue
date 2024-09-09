<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
  <div class="container-fluid">
    <RouterLink to="/profile" class="navbar-brand">Matcha's</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <!-- <RouterLink to="/" class="nav-link active">Home</RouterLink> -->
        <RouterLink to="/profile" class="nav-link">Profile</RouterLink>
      </div>
    </div>
  </div>
</nav>

</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped></style>
