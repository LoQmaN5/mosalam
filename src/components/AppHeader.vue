<template>
  <div>
    <!-- page loading -->
    <!-- <div id="loading">
      <div class="load-circle">
        <span class="one"></span>
      </div>
    </div>-->
    <!-- end page loading -->
    <!-- Mobile Toggle -->
    <div class="mob-header">
      <div class="d-flex">
        <div class="navbar-brand">
          <a class="logo-text" href="index.html">Tony</a>
        </div>
        <button class="toggler-menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
    <!-- / -->
    <header class="header-left" id="navbar-collapse-toggle">
      <div class="navbar-brand">
        <a class="logo-text" href="#home">Mo Salam</a>
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
          <a class="nav-link" href="#skills">
            <i class="fa fa-cogs"></i>
            <span>My Skills</span>
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
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data: function() {
    return {
      link: "https://mosalam.me"
    };
  },
  components: {}
};
</script>

<style lang="scss" scoped></style>
