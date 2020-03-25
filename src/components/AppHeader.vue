<template>
  <div class="header">
    <ul>
      <router-link to="/" tag="li" exact> <a>Home</a> </router-link>
      <router-link to="/about" tag="li"> <a>About</a> </router-link>
      <router-link to="/works" tag="li"> <a>Works</a> </router-link>
      <router-link to="/articles" tag="li"> <a>Articles</a></router-link>
      <router-link to="/hire-me" tag="li"><a>Hire me</a></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style lang="scss" scope>
.header {
  background-color: #333;
  color: #fff;
  overflow: hidden;

  ul {
    float: left;
    width: calc(100% - 200px);
    margin: 0;
  }
  li {
    padding: 20px;
    display: inline-block;
    font-size: 20px;
  }
  a {
    color: white;
    text-decoration: none;
  }
}
</style>
