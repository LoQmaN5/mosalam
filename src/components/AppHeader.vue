<template>
  <div>
    <div class="header">
      <hr />
      <router-link to="/" active-class>
        <img src="../assets/images/mo1.jpg" class="logo" />
        <span id="name">
          Mo
          <strong>Salam</strong>
        </span>
      </router-link>
      <ul>
        <router-link to="/" tag="li" exact>
          <a>Home</a>
        </router-link>
        <router-link to="/about" tag="li">
          <a>About</a>
        </router-link>
        <router-link to="/works" tag="li">
          <a>Works</a>
        </router-link>
        <router-link to="/articles" tag="li">
          <a>Articles</a>
        </router-link>
        <router-link to="/hire-me" tag="li">
          <a>Hire me</a>
        </router-link>
      </ul>
    </div>
    <app-side-bar />
  </div>
</template>

<script>
import AppSideBar from "../components/AppSideBar.vue";
export default {
  name: "AppHeader",
  components: {
    AppSideBar
  }
};
</script>

<style lang="scss" scope>
.router-link-active {
  color: #f00;
  border-top: #00f 2px solid;
}
hr {
  margin: 0 0 0 200px;
}
.header {
  // background-color: #333;
  color: #fff;
  overflow: hidden;
  margin-top: 30px;

  ul {
    float: left;
    width: calc(100% - 200px);
    margin-top: -22px;
  }
  li {
    padding: 20px;
    display: inline-block;
    font-size: 20px;
    margin-top: 5px;
    margin-right: 15px;
  }
  li:hover {
    border-top: #00f 2px solid;
  }
  a {
    color: #000;
  }
  a:hover {
    color: blue;
    text-decoration-line: none;
  }
}
.logo {
  position: relative;
  right: 85%;
  width: 110px;
  height: 110px;
  border-radius: 80%;
  box-shadow: 0 0px 15px 5px rgba(87, 24, 24, 0.2),
    0 0 0 15px rgba(136, 93, 93, 0.055);
  margin-top: -15px;
  margin-bottom: 5%;
}
#name {
  font-size: 22px;
  top: 165px;
  left: 70px;
  transform: translateX(-65%) scale(-1);
  writing-mode: vertical-lr;
  padding: 8px 4px;
  position: absolute;
  left: 105px;
  top: 220px;
  background-color: #fff;
}
</style>
