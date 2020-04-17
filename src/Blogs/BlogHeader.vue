<template>
  <div>
    <header>
      <nav class="navbar header-nav header-white navbar-expand-lg">
        <div class="container">
          <!-- Brand -->
          <router-link to="/" class="navbar-brand">
            Mo Salam
          </router-link>
          <!-- / -->
        </div>
        <!-- Container -->
      </nav>
      <!-- Navbar -->
    </header>
    <nav class="sticky-top header-white">
      <ul>
        <li>
          <a href="#" style="color: #00d8ff;">#react</a>
        </li>
        <li>
          <a href="#" style="color: #49d091">#vue</a>
        </li>
        <li>
          <a href="#" style="color: #e03237">#angular</a>
        </li>
        <li>
          <a href="#" style="color: #ffe725">#javascript</a>
        </li>
        <li>
          <a href="#" style="color: #33a956">#node</a>
        </li>
        <li>
          <a href="#" style="color: #ff8682">#laravel</a>
        </li>
        <li>
          <a href="#" style="color: #2ca9e1">#css</a>
        </li>
        <li>
          <a href="#" style="color: #fdd22d">#python</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "BlogHeader",
  components: {}
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  float: left;
  background-color: #222;
  width: 100%;
  padding: 0px;
  left: 5px;
  li {
    padding: 5px 25px 5px;
    margin: 8px;
    display: inline-block;
  }
  ul li a:hover {
    color: #fff;
  }
}
</style>
