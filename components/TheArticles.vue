<template>
  <section class="article">
    <div class="article__featured">
      <div class="article__featured-bg-img">
        <img
          src="../assets/images/build-muscle-to-lose-weight.jpg"
          class="article__featured-img"
        />
      </div>
      <h2 class="article__featured-title">
        How Lifting Weights Can Help Burn Fat
      </h2>
    </div>
    <div class="article__article-container">
      <div class="article__article">
        <img
          src="../assets/images/ultimate guide-weight-loss.jpg"
          class="article__article-img"
        />

        <h3 class="article__article-title">
          The Ultimate Guide to Losing Weight in a Month
        </h3>
      </div>
      <div class="article__article">
        <img
          src="../assets/images/how-to-lose-face-fat.jpg"
          class="article__article-img"
        />
        <h3 class="article__article-title">Do this to Lose Face Fat</h3>
      </div>
    </div>
    <div class="article__ad">
      <img src="../assets/images/ad.png" class="article__ad-img" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 7rem;
  &__featured {
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
    }
    &-bg-img {
      background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
    }
    &-img {
      max-width: 100%;
      clip-path: polygon(0 0, 97% 0, 97% 90%, 0% 100%);
    }
  }
  &__article-container {
    display: flex;
    flex-direction: column;
  }
  &__article {
    margin: 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;
    height: 100%;
    cursor: pointer;
    &-title {
      font-weight: 700;
      margin-left: 2rem;
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
  .article {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, minmax(20rem, auto));
    &__featured {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
      align-items: flex-start;
    }
    &__article-container {
      flex-direction: row;
      align-items: flex-start;
      height: 100%;
      grid-column: 1 / 3;
      grid-row: 2 / 3;
    }

    &__ad {
      grid-column: 3 / 4;
      grid-row: 1 / 3;
      align-items: flex-start;
    }
  }
  .article__article {
    align-items: flex-start;
    justify-content: center;
    &:nth-child(2) {
      margin-left: 1rem;
    }
  }
}
</style>
