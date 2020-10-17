<template>
  <div class="featured__article1">
      <nuxt-link
        :to="{ name: 'articles-slug', params: { slug: article.slug } }"
        v-for="article in category.articles"
        :key="article.id"
      >
        <div class="featured__article1-bg-img">
          <img :src="article.image.url" class="featured__article1-img" />
        </div>
        <h2 class="featured__article1-title">
          {{ article.title }}
        </h2>
      </nuxt-link>
    </div>
</template>

<script>
import getFeaturedArticle from "~/apollo/queries/Home/FeaturedArticles/GetFeaturedArticle1";

export default {
  data() {
    return {
      category: [],
    };
  },
  apollo: {
    category: {
      query: getFeaturedArticle,
    },
  }
};
</script>