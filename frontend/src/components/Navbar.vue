<template>
  <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <router-link class="navbar-brand" to="/">
    <img class="nav-logo nav-logo-m" alt="Vue logo" src="../assets/images/kotakode-logo.png" style="">
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="#">Tentang</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">Produk</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">FAQ</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">Events</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">Partnership</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">Academy</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="button nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
      </ul>
    </div> -->
  </nav>
  </div>
</template>


<style>
.nav-margin1{
 margin-left: 600px;
}
.nav-logo{
    max-height: 120px;
    max-width: 120px;
}
.nav-logo-m{
    flex: 1 1 0%;
    cursor: pointer;
    display: flex;
    align-items: center;
}
</style>