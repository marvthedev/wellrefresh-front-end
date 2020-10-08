<template>
  <div class="article__flex">
    <div class="article__categories-container">
      <nuxt-link
        v-for="article in category.articles"
        :to="{ name: 'articles-slug', params: { slug: article.slug } }"
        :key="article.slug"
        class="article__categories-item"
      >
        <div class="article__categories-item-img-bg">
          <img
            :src="article.image.url"
            class="article__categories-item-img"
          />
        </div>
        <div class="article__categories-item-txt-container">
          <h3 class="article__categories-item-title">
            {{ article.title }}
          </h3>
          <p class="article__categories-item-author">By {{ article.created_by.username }}</p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import dietArticlesQuery from "~/apollo/queries/article/getDietArticles";

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
      query: dietArticlesQuery
    }
  }
};
</script>
