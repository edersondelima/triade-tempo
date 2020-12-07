<template>
  <div class="parent">
    <div class="div1 img-answer">
      <img src="@/assets/avatar.png" />
    </div>

    <div class="div2 box-answer">
      {{ answer.answer }}
    </div>
  </div>
</template>

<script>
  export default {
    props: ['answer']
  }
</script>

<style scoped>
  .box-answer {
    padding: 15px;
    background-color: #eee;
    color: #5B2A76;
    font-weight: bold;
    margin-bottom: 15px;
    font-size: 0.8rem;

    -webkit-border-radius: 15px;
    -webkit-border-top-right-radius: 1px;
    -moz-border-radius: 15px;
    -moz-border-radius-topright: 1px;
    border-radius: 15px;
    border-top-right-radius: 1px;
  }

  .img-answer {
    background-color: #fff;
    color: white;
  }
  .img-answer img {
    line-height: 1.75rem;
    letter-spacing: -0.0312rem;
    color: #fff;
    width: 32px;
    height: 32px;
    padding: 2px 2px 0 0;
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
    border-radius: 50%;
    display: inline-block;
    float: right;
    width: 32px;
  }

  .div1 { grid-area: 1 / 12 / 2 / 13; }
  .div2 { grid-area: 1 / 11 / 2 / 12; }
</style>
