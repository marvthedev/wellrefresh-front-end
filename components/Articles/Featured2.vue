<template>
  <div class="articles__featured2">
    <nuxt-link
      v-for="article in category.articles"
      :to="{ name: 'articles-slug', params: { slug: article.slug } }"
      :key="article.slug"
    >
      <h2 class="articles__featured-title">
          {{ article.title }}
        </h2>
        <p class="articles__featured-excerpt">
           {{ article.excerpt }}
        </p>
    </nuxt-link>

     <!-- Button -->
    <nuxt-link
      v-for="article in category.articles"
      :to="{ name: 'articles-slug', params: { slug: article.slug } }"
      :key="article.slug"
    >
      <a class="articles__featured-btn">Continue Reading</a>
    </nuxt-link>
    <!------------>
    
  </div>
</template>

<style lang="scss">
    
</style>

<script>
import featured2Query from "~/apollo/queries/article/GetFeatured2";

export default {
  data() {
    return {
      api_url: process.env.strapiBaseUri,
      category: [],
      query: ""
    };
  },
  apollo: {
    category: {
      prefetch: true,
      query: featured2Query
    }
  }
};
</script>
