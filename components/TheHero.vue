<template>
  <section class="popular">
    <div class="popular__title-search">
      <h2 class="popular__title">Change your lifestyle. Change your life.</h2>
      <form class="popular__search" id="search__form">
        <svg
          class="popular__search-btn"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          class="popular__search-input"
          v-on:click="isClicked = !isClicked"
          v-click-outside="onClickOutside"
        />
        <button class="popular__search-go" v-show="!isClicked">
          Find
        </button>
      </form>
    </div>
    <div class="popular__topics">
      <h2 class="popular__topics-title">Popular Topics</h2>
      <ul class="popular__topics-list">
        <li class="popular__topics-item">
          <nuxt-link to="#" class="popular__topics-link">Coronavirus</nuxt-link>
        </li>
        <li class="popular__topics-item">
          <nuxt-link to="#" class="popular__topics-link"
            >Social Distancing</nuxt-link
          >
        </li>
        <li class="popular__topics-item">
          <nuxt-link to="#" class="popular__topics-link">Weight Loss</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.popular {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  &__title-search,
  &__topics {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  //Title and search bar
  &__title {
    font-size: 3.2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 1rem;
  }
  &__search {
    display: flex;
    justify-content: center;
    height: 4rem;
    width: 100%;
    padding: 0.5rem 1rem;
    border: 0.3rem solid #eeeeee;
    margin-bottom: 4rem;
    &-input {
      border: none;
      height: 100%;
      font-size: 2rem;
      width: 100%;
      outline: none;
      font-family: "PT Serif", serif;
    }
    &-btn {
      height: 2rem;
      padding: 0.3rem 0.7rem 0 0;
      cursor: pointer;
    }
    &-go {
      background-color: black;
      color: white;
      cursor: pointer;
      font-size: 1.5rem;
      font-weight: 600;
      height: 100%;
      border: none;
      padding: 0.3rem;
      &:hover {
        background-color: #88ad55;
      }
    }
  }
  //Popular Topics
  &__topics {
    &-title {
      font-size: 2.2rem;
      font-weight: 600;
      margin-bottom: 1rem;
      text-align: center;
    }
    &-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      list-style: none;
      color: white;
    }
    &-item {
      background-color: black;
      margin: 0.5rem 0.5rem 0.5rem 0.5rem;
      padding: 0.1rem;
      &:hover {
        background-color: #88ad55;
      }
    }
    &-link {
      font-size: 1.8rem;
      color: white;
      font-weight: 600;
      padding: 1rem;
    }
  }
}

//Media queries Desktop
@media (min-width: 78rem) {
  .popular {
    flex-direction: row;
    align-items: flex-start;
    &__title {
      font-size: 2.7rem;
    }
    &__topics {
      margin-left: 3rem;
      &-title {
        text-align: left;
      }
      &-list {
        flex-direction: row;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    //Click action for hamburger menu
    return {
      isClicked: "",
      isClicked: true
    };
  },
  methods: {
    onClickOutside() {
      this.isClicked = true;
    }
  }
};
</script>
