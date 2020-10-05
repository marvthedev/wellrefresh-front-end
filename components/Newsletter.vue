<template>
  <section class="newsletter">
    <div class="newsletter__form">
      <h3 class="newsletter__form-title">
        Get Health Tips Emailed to Your Inbox
      </h3>
      <form class="newsletter__form-container">
        <input
          type="text"
          placeholder="Enter your email"
          class="newsletter__form-input"
        />
        <button type="submit" class="newsletter__form-btn">Sign Up</button>
      </form>
      <p class="newsletter__form-excerpt">
        You can unsubscribe any time! For more details, check out our Privacy
        Policy.
      </p>
    </div>
    <div class="newsletter__social">
      <div class="newsletter__social-container">
        <h3 class="newsletter__social-title">Follow Us</h3>
        <div class="newsletter__social-icon">
          <svg
            class="newsletter__social-icon-facebook"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
            />
          </svg>
          <svg
            class="newsletter__social-icon-twitter"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
            />
          </svg>
        </div>
      </div>
      <img
        src="../assets/images/health-care.png"
        alt="Subscribe for healthy tips"
        class="newsletter__social-img"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.newsletter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1.6rem;
  align-items: center;
  margin-top: 4rem;
  background: #C6D5EB;
  &__form {
    &-title {
      color: black;
    }
    &-container {
      display: flex;
      align-items: center;
      height: 100%;
      margin-top: 2rem;
    }
    &-input {
      width: 70%;
      height: 4rem;
      border: none;
      padding: 1rem;
      font-size: 1.5rem;
      font-family: "PT Serif", serif;
    }
    &-btn {
      background-color: black;
      color: white;
      font-size: 1.5rem;
      font-weight: 700;
      height: 4rem;
      border: none;
      width: 30%;
      text-transform: uppercase;
      cursor: pointer;
      &:hover {
        background-color: #086972;
      }
    }
    &-excerpt {
      font-size: 1.2rem;
      line-height: 1.5rem;
      font-weight: 400;
      color: black;
      margin-top: 0.7rem;
      margin-bottom: 1rem;
    }
  }
  //Image and Social Icons
  &__social {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    &-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 40%;
      justify-content: center;
    }
    &-img {
      max-width: 100%;
      height: 12rem;
    }
    &-title {
      margin-bottom: 0.6rem;
      color: black;
      font-size: 1.8rem;
    }
    &-icon {
      height: 0.2rem;
    }
    &-icon {
      &-facebook,
      &-twitter {
        height: 4rem;
        cursor: pointer;
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

@media (min-width: 78rem) {
  .newsletter {
    flex-direction: row;
    &__form {
      width: 75%;
      &-btn {
        width: 15%;
      }
    }
    &__social {
      width: 25%;
      &-icon-facebook {
        fill: black;
        &:hover {
          fill: #3b5998;
        }
      }
      &-icon-twitter {
        fill: black;
        &:hover {
          fill: #00acee;
        }
      }
    }
  }
}
</style>
