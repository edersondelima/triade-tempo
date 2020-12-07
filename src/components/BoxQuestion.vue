<template>
  <div class="parent">
    <div class="div1 img-question">
      <img src="@/assets/paloma.png" />
    </div>

    <div class="div2 box-question">
      {{ text }}
    </div>
  </div>
</template>

<script>
  export default {
    props: ['text']
  }
</script>


<style scoped>
  .box-question {
    padding: 20px;
    background-color: #A864A0;
    color: white;
    margin-bottom: 15px;

    -webkit-border-radius: 15px;
    -webkit-border-top-left-radius: 1px;
    -moz-border-radius: 15px;
    -moz-border-radius-topleft: 1px;
    border-radius: 15px;
    border-top-left-radius: 1px;
  }

  .img-question {
    background-color: #fff;
    color: white;
  }

  .img-question img {
    line-height: 1.75rem;
    letter-spacing: -0.0312rem;
    color: #fff;
    width: 50px;
    height: 50px;
    padding: 2px 2px 0 0;
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
    border-radius: 50%;
    display: inline-block;
    float: right;
  }

  .div1 { grid-area: 1 / 1 / 2 / 2; }
  .div2 { grid-area: 1 / 2 / 2 / 13; }

</style>
