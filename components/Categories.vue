<template>
  <section class="categories">
    <div class="categories__item">
      <img
        src="../assets/images/fitness-for-weight-loss.svg"
        class="categories__item-img"
      />
      <h2 class="categories__item-title">Fitness</h2>
    </div>
    <div class="categories__item">
      <img
        src="../assets/images/weight-loss.svg"
        class="categories__item-img"
      />
      <h2 class="categories__item-title">Nutrition</h2>
    </div>
    <div class="categories__item">
      <img
        src="../assets/images/wellness-to-improve-health.svg"
        class="categories__item-img"
      />
      <h2 class="categories__item-title">Wellness</h2>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.categories {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;
  margin-top: 2rem;
  &__item {
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &-img {
      max-width: 100%;
      height: 10rem;
    }
    &-title {
      font-size: 1.8rem;
      text-align: center;
      &:hover {
        color: #88ad55;
      }
    }
  }
}
//Media Queries Desktop
@media (min-width: 78rem) {
  .categories {
    display: flex;
    justify-content: space-evenly;
    &__item {
      &-img {
        height: 20rem;
      }
    }
  }
}
</style>
