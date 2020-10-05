<template>
  <article class="article">
    <div class="article__container">
      <!-- <img :src="api_url + articles.image.url" class="article__img" /> -->
      <h1 class="article__title">{{ articles.title }}</h1>
      <div
        id="article__font"
        class="article__content"
        v-html="articles.content"
      ></div>
      <div class="article__side-bar">
        <p><img src="~/assets/images/ad.png" alt="" /></p>
      </div>
    </div>
  </article>
</template>

<script>
import articleQuery from "~/apollo/queries/article/Article";

export default {
  data() {
    return {
      articles: [],
      query: "",
      api_url: process.env.strapiBaseUri
    };
  },
  // data: () => ({

  // }),
  apollo: {
    articles: {
      prefetch: true,
      query: articleQuery,
      variables() {
        return { slug: this.$route.params.slug };
      },
      update: data => data.articles[0]
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  color: red;
}
.article {
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
  display: flex;
  &__title {
    margin-top: 1rem;
    font-size: 3rem;
  }
  &__img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
  &__content {
    margin-top: 3rem;
  }
  &__side-bar {
    display: none;
  }
}
//Desktop media queries
@media (min-width: 78rem) {
  .article {
    margin-top: 12rem;
  }
}
</style>
