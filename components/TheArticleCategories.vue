<template>
  <section class="article__categories">
    <!-- Fitness category START-->
    <h2 class="article__categories-title">Fitness</h2>
    <fitnessArticles />
    <!-- Fitness category END-->

    <!-- Weight Loss category START-->
    <h2 class="article__categories-title">Weight Loss</h2>
    <weightLossArticles />
    <!-- Weight Loss category END-->

    <!-- Diet category START-->
    <h2 class="article__categories-title">Diet</h2>
    <dietArticles />
    <!-- Diet category END-->
  </section>
</template>

<style lang="scss">
.article__categories {
  margin-top: 5rem;
  &-title {
    margin: 5rem 0 2rem 0;
  }
  &-container {
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr;
    overflow: hidden;
    grid-gap: 3rem;
  }
  &-item {
    display: flex;
    flex-direction: column;
    border: 0.1rem solid #dadada;
    box-shadow: 0 3px 15px rgba(51, 51, 51, 0.2);
    transition: all 0.2s ease;
    border-radius: 1rem;
    &-txt-container {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: space-between;
      height: 100%;
    }
    &-img {
      width: 100%;
      height: 20rem;
      object-fit: cover;
      border-radius: 1rem 1rem 0 0;
      border-bottom: 1rem solid #88ad55;
    }
    &-title {
      font-size: 2.2rem;
      color: #444444;
    }
    &-author {
      margin-top: 1rem;
      font-size: 1.6rem;
      color:#B4B4B4;
      font-size: 1.2rem;
    }
    &-excerpt {
      margin-top: 2rem;
      line-height: 2.5rem;
    }
  }
}

// //Media Queries for Desktop
@media (min-width: 78rem) {
  .article__categories {
    &-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      overflow: hidden;
      column-gap: 2rem;
    }
    &-item {
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
      &:hover {
        box-shadow: 0 3px 15px rgba(51, 51, 51, 0.2);
      }
    }
  }
}
</style>

<script>
import fitnessArticles from "@/components/Articles/FitnessArticles";
import weightLossArticles from "@/components/Articles/WeightLossArticles";
import dietArticles from "@/components/Articles/DietArticles";

export default {
  components: {
    fitnessArticles,
    weightLossArticles,
    dietArticles
  }
};
</script>
