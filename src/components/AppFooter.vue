<template>
  <div>
    <!-- Footer-->
    <footer class="footer">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 m-10px-tb">
            <div class="nav justify-content-center justify-content-md-start">
              <a :href="facebook" target="_blank"
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a :href="twitter" target="_blank"
                ><i class="fab fa-twitter"></i
              ></a>
              <a :href="instagram" target="_blank"
                ><i class="fab fa-instagram"></i
              ></a>
              <a :href="linkedin" target="_blank"
                ><i class="fab fa-linkedin-in"></i
              ></a>
              <a :href="github" target="_blank"
                ><i class="fab fa-github"></i
              ></a>
            </div>
          </div>
          <div class="col-md-6 m-10px-tb text-center text-md-right">
            <p>© 2020 copyright all right reserved</p>
          </div>
        </div>
      </div>
    </footer>
    <!-- footer End -->
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  data: function() {
    return {
      facebook: "https://www.facebook.com/m7.salam1",
      twitter: "https://twitter.com",
      instagram: "https://www.instagram.com/m7.salam",
      linkedin: "https://www.linkedin.com/in/m7salam",
      github: "https://github.com/m7salam"
    };
  }
};
</script>

<style lang="sass" scoped></style>
