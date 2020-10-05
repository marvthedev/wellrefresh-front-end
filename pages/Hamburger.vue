<template>
  <div class="hamburger__container">
    <!-- Inline SVG might be better, however this approach (as used by aneventapart.com) is pretty cool! -->
    <input type="checkbox" id="toggle-checkbox" />
    <label for="toggle-checkbox" class="toggle-label">Menu</label>
    <ul class="menu">
      <li>
        <a href="/news">News</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  display: none;
}
//When menu is opened
#toggle-checkbox:checked ~ .menu {
  display: flex;
  flex-direction: column;
  background: red;
}
#toggle-checkbox {
  cursor: pointer;
  height: 0;
  margin: 0;
  opacity: 0;
  right: 0;
  top: 0;
  width: 0;
}
.toggle-label {
  background-color: transparent;
  color: #222;
  cursor: pointer;
  display: inline-block;
  font-family: ffscalasans, sans-serif;
  font-weight: 700;
  line-height: 2rem;
  overflow: hidden;
  padding: 0;
  position: relative;
  right: 0;
  text-decoration: none;
  text-indent: 100%;
  top: 0.75rem;
  transition: background-color 0.25s;
  white-space: nowrap;
  width: 2.3rem;
}
.toggle-label:before,
.toggle-label:after {
  background-color: #222;
  content: "";
  display: block;
  height: 0.4rem;
  left: 0;
  position: absolute;
  top: 0;
  transition: transform 0.25s;
  width: 2.5rem;
}
#toggle-checkbox:checked + .toggle-label:before {
  top: 0.75rem;
  transform: rotate(45deg);
}
#toggle-checkbox:checked + .toggle-label:after {
  box-shadow: none;
  transform: rotate(-45deg);
}
.toggle-label:after {
  box-shadow: 0 0.75rem 0 #222;
  top: 0.75rem;
}

/* IRL you’d hide the hamburger on wide viewports */
/*
@media (min-width: 60rem) {
  .toggle-label {
    display: none;
  }
}
*/
</style>
