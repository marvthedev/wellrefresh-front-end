<template>
  <div class="featured__article2">
    <nuxt-link
      v-for="article in category.articles"
      :to="{ name: 'articles-slug', params: { slug: article.slug } }"
      :key="article.id"
      class="featured__article2"
    >
      <img :src="article.image.url"
        class="featured__article2-img"
      />
      <h3 class="featured__article2-title">
        {{ article.title }}
      </h3>
    </nuxt-link>
  </div>
</template>

<script>
import getFeaturedArticle2 from "~/apollo/queries/Home/FeaturedArticles/GetFeaturedArticle2";

export default {
  data() {
    return {
      category: ""
    };
  },
  apollo: {
    category: {
      query: getFeaturedArticle2
    }
  }
};
</script>
