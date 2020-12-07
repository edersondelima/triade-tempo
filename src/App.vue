<template>
  <div id="app">
    <NavBar />
    <Identification />
  </div>
</template>

<script>
  import Identification from './components/Identification'
  import NavBar from './components/NavBar'

  export default {
    name: 'App',
    components: { NavBar, Identification },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #5B2A76;
    margin-top: 60px;
  }

  .parent {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 3px;
    grid-row-gap: 2px;
  }

  /* ===== RESET STYLES ===== */
  .field__input{
    --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #767676);

    background-color: transparent;
    border-radius: 0;
    border: none;

    -webkit-appearance: none;
    -moz-appearance: none;

    font-family: inherit;
    font-size: inherit;
  }

  .field__input:focus::-webkit-input-placeholder{
    color: var(--uiFieldPlaceholderColor);
  }

  .field__input:focus::-moz-placeholder{
    color: var(--uiFieldPlaceholderColor);
  }

  .field{
    --fieldBorderColor: #D1C4E9;
    --fieldBorderColorActive: #673AB7;
  }

</style>
