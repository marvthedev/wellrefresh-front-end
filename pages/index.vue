<template>
  <div>
    <hero />
    <categories />
    <featuredArticles />
    <newsletter />
    <articleCategories />
  </div>
</template>

<script>
import hero from "~/components/Home/Hero";
import categories from "~/components/Home/Categories";
import featuredArticles from "@/components/Home/FeaturedArticles/FeaturedArticles";
import newsletter from "@/components/Home/Newsletter";
import articleCategories from "~/components/Home/ArticleCategories/ArticleCategories";

export default {
  components: {
    hero,
    categories,
    featuredArticles,
    newsletter,
    articleCategories
  },
};
</script>

<style lang="scss">
/* Default Styling */
html {
  background-color: white;
  font-size: 62.5%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  color: #444444;
  font-weight: 400;
  font-family: 'Lato', sans-serif;
}

input {
  outline: 0;
  border-radius: 0;
}

b,
strong,
h2 {
  font-weight: 900;
  color: #3e3e3e;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

h2 {
  font-size: 2.4rem;
}

h3 {
  font-size: 2.2rem;
  font-weight: bold;
}

p {
  font-size: 2.1rem;
  line-height: 165%;
}

a {
  text-decoration: none;
}

input {
  font-family: Consolas, monaco, monospace;
}
</style>
