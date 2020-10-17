<template>
<div class="article__flex">
  <article class="article">
      <h1 class="article__title">{{ articles.title }}</h1>
      <!-- <img :src="api_url + articles.image.url" class="article__img" /> -->
      <div
        id="article__font"
        class="article__content"
        v-html="articles.content"
      ></div>
      <div class="article__side-bar">
        <img
          src="~/assets/images/dummy-ad.jpg"
          class="article__side-bar-img"
        />
      </div>
  </article>
</div>
</template>

<script>
import articleQuery from "~/apollo/queries/article/Article";

export default {
  data() {
    return {
      articles: [],
      query: "",
      api_url: process.env.strapiBaseUri,
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
.article {
  display: flex;
  flex-direction: column;
  margin-top: 6rem;
  &__title {
    font-weight: 900;
    font-size: 3.4rem;
    text-align: center;
    margin-bottom: 3.5rem;
  }
  &__side-bar {
    display: none;
  }
  
}
//Desktop media queries
@media (min-width: 78rem) {
  .article__flex {
    display: flex;
  }
  .article {
    padding: 0 15rem;
    display: grid;
    grid-template-columns: minmax(30rem, auto) 1fr;
    grid-template-rows: minmax(2rem, auto) 1fr;
    width: 100%;
    &__title {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
      font-size: 6rem;
    }
    &__content {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
    &__side-bar {
      display: flex;
      margin-left: 4rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      display: block;
    }
    &__side-bar-img {
      width: 25rem;
    }
  }
}
</style>
