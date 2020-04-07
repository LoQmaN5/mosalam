<template>
  <header class="header-left" id="navbar-collapse-toggle">
    <div class="navbar-brand">
      <router-link to="/">
        <a class="logo-text">
          Mo Salam
        </a>
      </router-link>
    </div>
    <ul class="nav">
      <li>
        <a class="nav-link" href="#home">
          <i class="fas fa-house-damage"></i>
          <span>Home</span>
        </a>
      </li>
      <li>
        <a class="nav-link" href="#about">
          <i class="far fa-address-card"></i>
          <span>About Me</span>
        </a>
      </li>
      <li>
        <a class="nav-link" href="#services">
          <i class="fas fa-concierge-bell"></i>
          <span>Services</span>
        </a>
      </li>
      <li>
        <a class="nav-link" href="#work">
          <i class="fas fa-briefcase"></i>
          <span>Portfolio</span>
        </a>
      </li>
      <li>
        <a class="nav-link" href="#blog">
          <i class="fas fa-blog"></i>
          <span>Blog</span>
        </a>
      </li>
      <li>
        <a class="nav-link" href="#contactus">
          <i class="fas fa-id-card-alt"></i>
          <span>Contact</span>
        </a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  components: {}
};
</script>

<style lang="scss" scoped></style>
