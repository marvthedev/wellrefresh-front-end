<template>
  <div class="nav-container">
    <nav class="nav">
      <!-- Logo Start -->
      <nuxt-link to="/" class="nav__logo">
        <img
          src="../assets/images/wellfresh-health-weight-loss-logo.png"
          alt="Well Refresh - Health and Weight Loss"
          class="nav__logo-img"
          v-on:click="closeMenu"
        />
        <h1 class="nav__logo-title" v-on:click="closeMenu">wellrefresh</h1>
      </nuxt-link>
      
      <!-- Hamburger Button Start -->
      <div class="nav__hamburger">
        <svg
          v-on:click="menuOpened = !menuOpened"
          class="nav__hamburger-btn"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          />
        </svg>
        <!-- Hamburger Button End -->
      </div>
      <svg
        v-on:click="closeMenu"
        v-show="menuOpened"
        class="nav__hamburger-btn-close"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 352 512"
      >
        <path
          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
        />
      </svg>
    </nav>
    <ul
      class="nav__list"
      v-body-scroll-lock="menuOpened"
      v-show="menuOpened"
      v-on:click="menuOpened = !menuOpened"
    >
      <nuxt-link to="/"
        ><li class="nav__list-item">
          <div class="nav__list-item-container">
          <svg
            class="nav__list-item-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              d="M570.24 247.41L512 199.52V104a8 8 0 0 0-8-8h-32a8 8 0 0 0-7.95 7.88v56.22L323.87 45a56.06 56.06 0 0 0-71.74 0L5.76 247.41a16 16 0 0 0-2 22.54L14 282.25a16 16 0 0 0 22.53 2L64 261.69V448a32.09 32.09 0 0 0 32 32h128a32.09 32.09 0 0 0 32-32V344h64v104a32.09 32.09 0 0 0 32 32h128a32.07 32.07 0 0 0 32-31.76V261.67l27.53 22.62a16 16 0 0 0 22.53-2L572.29 270a16 16 0 0 0-2.05-22.59zM463.85 432H368V328a32.09 32.09 0 0 0-32-32h-96a32.09 32.09 0 0 0-32 32v104h-96V222.27L288 77.65l176 144.56z"
            /></svg
          >Home
        </div></li></nuxt-link
      >
      <li class="nav__list-item">
        <div class="nav__list-item-container">
        <svg
          class="nav__list-item-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            d="M512 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm32 384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V96c0-17.6 14.4-32 32-32h448c17.6 0 32 14.4 32 32v320zm-72-128H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-64H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-64H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM208 288c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm46.8 144c-19.5 0-24.4 7-46.8 7s-27.3-7-46.8-7c-21.2 0-41.8 9.4-53.8 27.4C100.2 342.1 96 355 96 368.9V392c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-23.1c0-7 2.1-13.8 6-19.6 5.6-8.3 15.8-13.2 27.3-13.2 12.4 0 20.8 7 46.8 7 25.9 0 34.3-7 46.8-7 11.5 0 21.7 5 27.3 13.2 3.9 5.8 6 12.6 6 19.6V392c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-23.1c0-13.9-4.2-26.8-11.4-37.5-12.3-18-32.9-27.4-54-27.4z"
          /></svg
        >About
      </div></li>
      <nuxt-link to="/articles"
        ><li class="nav__list-item">
          <div class="nav__list-item-container">
          <svg
            class="nav__list-item-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"
            /></svg
          >Articles
        </div></li></nuxt-link
      >
    </ul>

    <!-- Hamburger Menu Finish -->
  </div>
</template>

<script>
export default {
  name: 'Modal',
  head: {
    bodyAttrs: {
      class: "overFlow"
    }
  },
  data() {
    //Click action for hamburger menu
    return {
      menuOpened: false
    };
  },
  methods: {
    closeMenu() {
      this.$set(this, "menuOpened", false);
    },
    openMenu() {
      this.$set(this, "menuOpened", true);
    }
  }
};
</script>

<style lang="scss">
.nav {
  position: relative;
  width: 100%;
  height: 7.4rem;
  display: flex;
  justify-content: space-between;
  padding: 0 1.8rem;
  align-items: center;
  background: white;
 
  box-shadow: 0 -5px 15px #212121;
  &__search {
    height: 2rem;
    fill: #3e3e3e;
    display: none;
  }
  &__hamburger {
    display: flex;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
    &-btn {
      height: 2rem;
      cursor: pointer;
      fill: #3e3e3e;
      &-close {
        height: 2rem;
        cursor: pointer;
        position: fixed;
        right: 5%;
        top: 3%;
        z-index: 99;
        & path {
          fill: white;
          &:hover {
            fill: #88ad55;
          }
        }
      }
    }
    &-txt {
      display: none;
      margin-left: 0.5rem;
      font-size: 1.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      &:hover {
        color: #88ad55;
      }
    }
  }
  &__logo {
    display: flex;
    align-items: center;
    &-img {
      max-width: 100%;
      height: 2.2rem;
    }
    &-title {
      font-weight: 900;
      font-size: 2.5rem;
      color: #3e3e3e;
      margin-left: 0.2rem;
    }
  }
  &__search {
    &-icon {
      height: 2.5rem;
      &:hover {
        fill: #789463;
      }
    }
  }
  &__list {
    z-index: 98;
    padding-top: 25%;
    display: flex;
    position: fixed;
    right: 0;
    top: 0;
    flex-direction: column;
    text-align: center;
    height: 100%;
    width: 75vw;
    background-color: #086972;
    transition: all 100ms ease-in-out;
    &-close {
      fill: black;
      cursor: pointer;
      height: 3rem;
      &:hover {
        fill: #789463;
      }
    }
    &-item {
      padding: 1.4rem;
      font-size: 2rem;
      font-weight: 900;
      color: #ffffff;
      &-container {
        &:hover {      
          color:  #88ad55;
        }
      }
      &-icon {
        height: 2rem;
        fill: #88ad55;
        margin-right: 2rem;
      }
    }
  }
}

//Desktop View
@media (min-width: 78rem) {
  .nav {
    margin-top: 0;
    padding: 0 2%;
    align-items: center;
    &__search {
      display: block;
    }
    &__hamburger {
      &-btn {
        height: 2.2rem;
        &-close {
          top: 1.5%;
          right: 1%
        }
      }
      &-txt {
        display: block;
        font-size: 2.2rem;
      }
    }
    &__list {
      width: 30rem;
      padding-top: 5%;
    }
  }
}
</style>
