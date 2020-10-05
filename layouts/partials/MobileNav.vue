<template>
    <section class="mobile-nav">
        <ul class="mobile-nav__link">
            <li class="mobile-nav__link-item">Fitness</li>
            <li class="mobile-nav__link-item">Nutrition</li>
            <li class="mobile-nav__link-item">Weight Loss</li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
    .mobile-nav {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        &__link-item {
            font-size: 1.6rem;
            font-weight: 700;
            display: inline-block;
            padding: 0 1rem;
        }
    }
</style>