<template>
  <article class="articles">
    <div class="articles__container">
      <!-- Featured Articles -->
      <featured1 />
      <featured2 />

      <!-- Articles -->
      <nuxt-link
        v-for="article in articles"
        :to="{ name: 'articles-slug', params: { slug: article.slug } }"
        :key="article.slug"
        class="articles__post"
      >
        <h2 class="articles__post-title">{{ article.title }}</h2>
        <p class="articles__post-excerpt">
          {{ article.excerpt }}
        </p>
      </nuxt-link>
    </div>
  </article>
</template>

<script>
import articlesQuery from "~/apollo/queries/article/Article";
import featured1 from "~/components/Articles/Featured1";
import featured2 from "~/components/Articles/Featured2";

export default {
  components: {
    featured1,
    featured2
  },
  data() {
    return {
      api_url: process.env.strapiBaseUri,
      articles: [],
      query: ""
    };
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery
    }
  }
};
</script>

<style lang="scss">
.articles {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
  &__container {
    display: grid;
    justify-content: center;
    grid-gap: 2rem;
  }
  &__featured1,
  &__featured2,
  &__post {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.8rem;
    color: #444444;
  }

  &__featured1,
  &__featured2 {
    margin-bottom: 3rem;
  }

  &__featured1 {
    grid-row: 1 / 3;
  }

  &__featured2 {
    grid-row: 8 / 10;
  }

  &__featured {
    &-title,
    &-excerpt {
      color: #444444;
    }
    &-title {
      font-size: 3.2rem;
      &:hover {
        color: #88ad55;
      }
    }
    &-excerpt {
      margin: 3rem 0 4rem 0;
      font-size: 2rem;
    }
    &-btn {
      border: 2px solid #88ad55;
      border-radius: 3.5rem;
      padding: 1.6rem 3.2rem 1.4rem;
      color: #263238;
      font-weight: 900;
      font-size: 1.4rem;
      &:hover {
        background: linear-gradient(
          0deg,
          rgba(95, 173, 85, 1) 83%,
          rgba(136, 173, 85, 1) 100%
        );
        color: white;
      }
    }
  }

  &__post {
    margin-top: 0rem;
    border: 0.1rem solid #e7ebed;
    border-radius: 0.5rem;
    padding: 2rem;
    transition: all 0.2s ease-in-out;
    &:hover {
      box-shadow: 0 0.3rem 2rem 0 rgba(84, 110, 122, 0.1);
      transform: translateY(-0.1rem);
      & .articles__post-title,
      & .articles__post-excerpt {
        color: #88ad55;
        transition: all 0.2s ease-in-out;
      }
    }
    &-title {
      font-weight: 900;
      font-size: 3rem;
    }
    &-excerpt {
      font-size: 1.8rem;
      margin-top: 2rem;
    }
  }
}

//Desktop View
@media (min-width: 78rem) {
  .articles {
    &__featured1,
    &__featured2 {
      margin-left: 4rem;
    }

    &__featured1 {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
    }

    &__featured2 {
      grid-column: 2 / 4;
      grid-row: 4 / 6;
    }

    &__featured {
      &-title {
        font-size: 4.8rem;
      }
    }

    &__post {
      padding: 4rem;
    }
  }
}
</style>
