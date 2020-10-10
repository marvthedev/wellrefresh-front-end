<template>
<!--
	wellrefresh by marvthedev
	https://www.marvthe.dev | @marvthedev
  Website design and graphics by Marvin Marinas
-->
  <div>
    <navBar />
    <div class="wrapper">
    <Nuxt />
    </div>
    <foot />
  </div>
</template>

<script>
import navBar from "~/components/NavBar";
import foot from "~/components/foot";

export default {
  
  components: {
    navBar,
    foot
  },

};
</script>

<style lang="scss">
.wrapper {
  padding: 0 5%;
}

//Media Queries
@media (min-width: 78rem) {
  .wrapper {
    padding: 0 12%;
  }
}

</style>
