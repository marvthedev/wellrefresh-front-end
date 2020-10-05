<template>
  <footer class="footer">
    <div class="footer__logo">
      <img
        src="~assets/images/wellfresh-health-weight-loss-logo.png"
        alt="Well Refresh - Health and Weight Loss"
        class="footer__logo-img"
      />
      <span class="footer__logo-txt">wellrefresh</span>
    </div>
    <!-- =================Footer Newsletter Form START==================== -->
    <div class="footer__social">
      <div class="footer__social-newsletter">
        <h2 class="footer__social-newsletter-title">
          Get Health Tips Emailed Straight to Your Inbox
        </h2>
        <form action="" class="footer__social-newsletter-form">
          <input
            type="text"
            placeholder="Enter your email"
            class="footer__social-newsletter-form-input"
          />
          <button type="submit" class="footer__social-newsletter-form-btn">
            Sign Up
          </button>
        </form>
        <p class="footer__social-newsletter-excerpt">
          You can unsubscribe any time! For more details, check out our Privacy
          Policy.
        </p>
      </div>
      <!-- =================Footer Newsletter Form END==================== -->

      <!-- =================Footer Social Icons START==================== -->
      <div class="footer__social-media">
        <h2 class="footer__social-media-title">Follow Us</h2>
        <div class="footer__social-media-icons">
          <svg
            class="footer__social-media-icons-facebook"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
            />
          </svg>
          <svg
            class="footer__social-media-icons-twitter"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
          >
            <path
              d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.503 65.503 0 01-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
            />
          </svg>
        </div>
      </div>
    </div>
    <!-- =================Footer Social Icons END==================== -->

    <!-- =================Footer Categories START==================== -->
    <div class="footer__btn">
      <ul class="footer__btn-categories">
        <li class="footer__btn-categories-item">
          <nuxt-link to="#" class="footer__btn-categories-item-link"
            >Weight Loss</nuxt-link
          >
        </li>
        <li class="footer__btn-categories-item">
          <nuxt-link to="#" class="footer__btn-categories-item-link"
            >Fitness</nuxt-link
          >
        </li>
        <li class="footer__btn-categories-item">
          <nuxt-link to="#" class="footer__btn-categories-item-link"
            >Diet</nuxt-link
          >
        </li>
      </ul>
      <!-- =================Footer Categories END==================== -->

      <!-- =================Footer Links START==================== -->
      <ul class="footer__btn-links">
        <li>Contact</li>
        <li>About</li>
        <li>Advertise</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
    <!-- =================Footer Links END==================== -->

    <!-- =================Footer Copyright START==================== -->
    <div class="footer__copyright">
      <p class="footer__copyright-txt">
        &copy; wellrefresh | Website design by
        <span
          ><a href="https://www.devvelox.com" class="footer__copyright-dev"
            >devvelox</a
          >.</span
        >
      </p>
    </div>
    <!-- =================Footer Copyright END==================== -->
  </footer>
</template>

<style lang="scss" scoped>
$newsletter__font-color: #dadada;

.footer {
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  background: black;
  padding: 0 5%;
  &__logo {
    display: flex;
    align-items: center;
    padding: 1.2rem 0;
    border-bottom: 0.12rem dotted #434343;
    &-img {
      max-width: 100%;
      height: 2.5rem;
    }
    &-txt {
      font-size: 2.5rem;
      color: white;
      font-weight: 700;
    }
  }
  &__social {
    &-newsletter {
      margin-top: 3rem;
      &-title {
        color: $newsletter__font-color;
        font-size: 1.8rem;
        font-weight: 700;
      }
      &-form {
        display: flex;
        width: 100%;
        height: 4rem;
        margin-top: 0.6rem;
        &-input {
          width: 85%;
          border: none;
          padding-left: 1rem;
          font-size: 1.6rem;
          font-family: "PT Serif", serif;
        }
        &-btn {
          width: 25%;
          cursor: pointer;
          background-color: #789463;
          border: none;
          text-transform: uppercase;
          font-weight: 700;
          color: white;
          letter-spacing: 0.1rem;
          &:hover {
            background-color: #88ad55;
          }
        }
      }
      &-excerpt {
        font-size: 1.2rem;
        line-height: 1.5rem;
        margin-top: 0.6rem;
        color: $newsletter__font-color;
      }
    }
    &-media {
      margin-top: 3rem;
      padding-bottom: 2rem;
      border-bottom: 0.12rem dotted #434343;
      &-title {
        color: $newsletter__font-color;
        font-size: 1.8rem;
        font-weight: 700;
      }
      &-icons {
        margin-top: 0.5rem;
        &-facebook,
        &-twitter {
          height: 3rem;
          &:nth-child(2) {
            margin-left: 0.4rem;
          }
        }
        &-facebook {
          fill: #3b5998;
        }
        &-twitter {
          fill: #00acee;
        }
      }
    }
  }
  &__btn {
    display: flex;
    flex-direction: column;
    &-categories {
      margin-top: 2rem;
      font-size: 1.8rem;
      font-weight: 700;
      border-bottom: 0.12rem dotted #434343;
      padding-bottom: 2rem;
      &-item-link {
        color: $newsletter__font-color;
        &:hover {
          color: #88ad55;
        }
      }
    }
    &-links {
      display: flex;
      justify-content: space-evenly;
      margin-top: 1rem;
      font-size: 1.4rem;
      color: $newsletter__font-color;
      line-height: 2rem;
      & li:hover {
        color: #88ad55;
        cursor: pointer;
      }
    }
  }
  &__copyright {
    margin: 2rem 0 1rem 0;
    &-txt {
      margin: 0 auto;
      text-align: center;
      font-size: 1.2rem;
      color: $newsletter__font-color;
    }
    &-dev {
      font-weight: 700;
      color: $newsletter__font-color;
      text-decoration: underline;
      &:hover {
        color: #88ad55;
      }
    }
  }
}
//Media Queries for Desktop
@media (min-width: 78rem) {
  .footer {
    padding: 0 12%;
    display: grid;
    grid-template-columns: 1fr 1fr 20% 30%;
    grid-template-rows: 15% minmax(70%,  auto) 15%;
    &__logo {
      grid-column: 1/5;
      grid-row: 1/2;
      padding: 0;
      margin-top: 1rem;
      padding-bottom: 1rem;
    }
    &__social {
      grid-column: 1/3;
      grid-row: 2/3;
      &-newsletter {
        margin-top: 2rem;
      }
      &-media {
        padding-bottom: 1rem;
        margin-top: 5rem;
        &-icons-facebook,
        &-icons-twitter {
          fill: #34363b;
          cursor: pointer;
        }
        &-icons-facebook:hover {
          fill: #3b5998;
        }

        &-icons-twitter:hover {
          fill: #00acee;
        }
      }
    }
    &__btn {
      margin-top: 2rem;
      grid-column: 3/5;
      grid-row: 2/3;
      flex-direction: row;
      justify-content: space-evenly;
      border-bottom: 0.12rem dotted #434343;
      &-categories {
        display: flex;
        line-height: 3rem;
        flex-direction: column;
        border-bottom: 0;
        padding: 0;
        margin: 0;
      }
      &-links {
        flex-direction: column;
        justify-content: start;
        margin: 0;
        line-height: 2.5rem;
        font-weight: 700;
      }
    }
    &__copyright {
      grid-column: 3/5;
      grid-row: 3/4;
      margin: 1rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      &-txt {
        font-size: 1.7rem;
      }
    }
  }
}
</style>
