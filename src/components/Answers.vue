<template>
  <div v-for="answer in answers" v-bind:key="answer" >
    <BoxQuestion :text="answer.description" />
    <BoxAnswer :answer="answer" />
  </div>
</template>

<script>
  import BoxQuestion from './BoxQuestion'
  import BoxAnswer from './BoxAnswer'

  export default {
    components: { BoxQuestion, BoxAnswer },
    props: ['answers']
  }
</script>
