<template>
  <section class="featured">
    <!--Main Featured Article Start--->
    <featured1 />
    <!--Main Featured Article End--->

    <!--Second & Third Featured Article Start--->
    <div class="featured__article2-container">
      <featured2 />
      <featured3 />
    </div>
    <!--Second & Third Featured Article End--->

    <div class="featured__ad">
      <img src="~/assets/images/dummy-ad.jpg" class="featured__ad-img" />
    </div>
  </section>
</template>

<script>
import featured1 from "~/components/Home/FeaturedArticles/FeaturedArticle1";
import featured2 from "~/components/Home/FeaturedArticles/FeaturedArticle2";
import featured3 from "~/components/Home/FeaturedArticles/FeaturedArticle3";

export default {
  components: {
    featured1,
    featured2,
    featured3
  }
};
</script>

<style lang="scss">
.featured {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 7rem;

  &__article1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;
    cursor: pointer;
    &-title {
      margin-top: 1rem;
      font-size: 3rem;
      font-weight: 900;
      text-align: center;
      color: $text-color;
    }
    &-bg-img {
      background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
    }
    &-img {
      max-width: 100%;
      clip-path: polygon(0 0, 97% 0, 97% 90%, 0% 100%);
    }
  }

  &__article2-container {
    display: flex;
    flex-direction: column;
  }
  
  &__article2 {
    margin: 1rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    height: 100%;
    cursor: pointer;
    &-title {
      font-weight: 900;
      margin-left: 2rem;
      color: $text-color;
      font-size: 2rem;
    }
    &-img {
      max-width: 40%;
    }
  }

  &__ad {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    &-img {
      height: 60rem;
    }
  }
}

// //Media queries for desktop
@media (min-width: 78rem) {
  .featured {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3,  minmax(20rem,  auto));

    &__article1 {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
      align-items: flex-start;
    }

    &__article2-container {
      display: flex;
      flex-direction: column;
    }

    &__article2 {
      width: 100%;
      display: flex;
      align-items: center;
      transition: all 0.2s ease-in-out;
      height: 100%;
      cursor: pointer;
      &-title {
        font-weight: 700;
        margin-left: 2rem;
        color: black;
      }
      &-img {
        max-width: 40%;
      }
    }

    &__ad {
      grid-column: 3 / 4;
      grid-row: 1 / 3;
      align-items: flex-start;
    }
  }

  //Desktop View
  @media (min-width: 78rem) {
    .featured {
      &__article1 {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
        align-items: flex-start;
      }

      &__article2-container {
        flex-direction: row;
        align-items: flex-start;
        height: 100%;
        grid-column: 1 / 3;
        grid-row: 2 / 3;
      }

      &__article2 {
        align-items: flex-start;
        justify-content: center;
        &:nth-child(2) {
          margin-left: 1rem;
        }
      }
    }
  }
}
</style>
