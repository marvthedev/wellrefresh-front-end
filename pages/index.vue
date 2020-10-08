<template>
  <div>
    <Hero />
    <Categories />
    <Articles />
    <Newsletter />
    <ArticleCategories />
  </div>
</template>

<script>
import Hero from "@/components/TheHero";
import Categories from "@/components/Categories";
import Articles from "@/components/TheArticles";
import Newsletter from "@/components/Newsletter";
import ArticleCategories from "@/components/TheArticleCategories";

export default {
  components: {
    Hero,
    Categories,
    Articles,
    Newsletter,
    ArticleCategories
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
