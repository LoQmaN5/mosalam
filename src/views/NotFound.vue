<template>
  <div>
    <div class="container text-lg-center pa-12">
      <h1>Not Found</h1>
      <h3>
        Oops we couldn't find that page. Try going
        <br />
        <router-link to="/" tag="button" class="btn bg-primary ma-12"
          >Home</router-link
        >
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style lang="scss" scoped></style>
