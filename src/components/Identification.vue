<template>
  <apresentation />

  <!-- <div> -->
  <!--   <label class="field field_v3"> -->
  <!--     <input -->
  <!--       placeholder="informe o nome" -->
  <!--       v-model="person.name" -->
  <!--       type="text" -->
  <!--       name="input" -->
  <!--       class="field__input" -->
  <!--       required="" /> -->

  <!--     <span class="field__label-wrap"> -->
  <!--       <span class="field__label">Nome Completo</span> -->
  <!--     </span> -->
  <!--   </label> -->
  <!-- </div> -->

  <!-- <div> -->
  <!--   <label class="field field_v3"> -->
  <!--     <input -->
  <!--       placeholder="Digite o email" -->
  <!--       v-model="person.email" -->
  <!--       type="text" -->
  <!--       name="input" -->
  <!--       class="field__input" -->
  <!--       required="" /> -->

  <!--     <span class="field__label-wrap"> -->
  <!--       <span class="field__label">Email</span> -->
  <!--     </span> -->
  <!--   </label> -->
  <!-- </div> -->

  <div v-if="finished">
    <chart
      :total="resultAnswers.total"
      :group_a="resultAnswers.group_a"
      :group_b="resultAnswers.group_b"
      :group_c="resultAnswers.group_c" />
  </div>

  <div v-if="answers.length == 0 && question == null">
    <a v-on:click="nextQuestion" class="start_button">Começar</a>
  </div>

  <div class="container" v-if="!finished">
    <answers :answers="answers" />

    <div v-if="question" class="">
      <boxQuestion :text="question.description" />

      <div class="response-fixed">
        <p>Escolha a opção</p>
        <a class="response-button" href="javascript:void(0)" v-for="option in options" v-bind:key="option.score" @click="answer(option)">
          {{ option.text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { questions } from '../questions.js'
  import { responseOptions } from '../questions.js'
  import Answers from './Answers'
  import Apresentation from './Apresentation'
  import BoxQuestion from './BoxQuestion'
  import Chart from './Chart'

  let questionsAvailable = questions();
  let responseAvailable = responseOptions();

  export default {
    components: { Answers, Apresentation, BoxQuestion, Chart },
    data() {
      return {
        person: { name: null, email: null },
        answers: [],
        question: null,
        options: responseAvailable,
        resultAnswers: { total: 0, group_a: 0, group_b: 0, group_c: 0 },
        finished: false
      };
    },
    methods: {
      buildQuestion(question) {
        let newQuestion = {
          id: question.order,
          description: question.description,
          group: question.group
        };

        this.question = newQuestion;
      },
      nextQuestion() {
        if (questionsAvailable.length < 1) {
          this.finish();
          return;
        }
        let question = questionsAvailable.shift();
        this.buildQuestion(question);
      },
      answer(option) {
        let thisAnswer = { question_id: this.question.id, group: this.question.group, answer: option.text, description: this.question.description, score: option.score };
        this.answers.push(thisAnswer);
        this.nextQuestion();

        this.calculateAnswer();

        setTimeout(function() {
          window.scroll({ top: (document.body.clientHeight), left: 0, behavior: 'smooth' });
        }, 100);
      },
      finish() {
        this.question = null;
        this.finished = true;
      },
      calculateAnswer() {
        this.resultAnswers.total = this.answers.reduce((acc, answer) => acc + answer.score, 0);
        this.resultAnswers.group_a = this.calculateByGroup("A");
        this.resultAnswers.group_b = this.calculateByGroup("B");
        this.resultAnswers.group_c = this.calculateByGroup("C");
      },
      calculateByGroup(group) {
        return this.answers
          .filter(answer => answer.group === group)
          .reduce((acc, answer) => acc + answer.score, 0)
      }
    }
  }
</script>

<style scoped>
  .field{
    --uiFieldBorderWidth: var(--fieldBorderWidth, 2px);
    --uiFieldPaddingRight: var(--fieldPaddingRight, 1rem);
    --uiFieldPaddingLeft: var(--fieldPaddingLeft, 1rem);
    --uiFieldBorderColorActive: var(--fieldBorderColorActive, rgba(22, 22, 22, 1));

    display: var(--fieldDisplay, inline-flex);
    position: relative;
    font-size: var(--fieldFontSize, 1rem);
  }

  .field__input{
    box-sizing: border-box;
    width: var(--fieldWidth, 100%);
    height: var(--fieldHeight, 3rem);
    padding: var(--fieldPaddingTop, 1.25rem) var(--uiFieldPaddingRight) var(--fieldPaddingBottom, .5rem) var(--uiFieldPaddingLeft);
    border-bottom: var(--uiFieldBorderWidth) solid var(--fieldBorderColor, rgba(0, 0, 0, .25));
  }

  .field__input:focus{
    outline: none;
  }

  .field__input::-webkit-input-placeholder{
    opacity: 0;
    transition: opacity .2s ease-out;
  }

  .field__input::-moz-placeholder{
    opacity: 0;
    transition: opacity .2s ease-out;
  }

  .field__input:focus::-webkit-input-placeholder{
    opacity: 1;
    transition-delay: .2s;
  }

  .field__input:focus::-moz-placeholder{
    opacity: 1;
    transition-delay: .2s;
  }

  .field__label-wrap{
    box-sizing: border-box;
    pointer-events: none;
    cursor: text;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .field__label-wrap::after{
    content: "";
    box-sizing: border-box;
    width: 100%;
    height: 0;
    opacity: 0;

    position: absolute;
    bottom: 0;
    left: 0;
  }

  .field__input:focus ~ .field__label-wrap::after{
    opacity: 1;
  }

  .field__label{
    position: absolute;
    left: var(--uiFieldPaddingLeft);
    top: calc(50% - .5em);

    line-height: 1;
    font-size: var(--fieldHintFontSize, inherit);

    transition: top .2s cubic-bezier(0.9, -0.15, 0.1, 1.15), opacity .2s ease-out, font-size .2s ease-out;
    will-change: bottom, opacity, font-size;
  }

  .field__input:focus ~ .field__label-wrap .field__label,
  .field__input:not(:placeholder-shown) ~ .field__label-wrap .field__label{
    --fieldHintFontSize: var(--fieldHintFontSizeFocused, .75rem);

    top: var(--fieldHintTopHover, .25rem);
  }

  .field_v3 .field__label-wrap::after{
    border: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColorActive);
    will-change: opacity, height;
    transition: height .1s ease-out, opacity .1s ease-out;
  }

  .field_v3 .field__input:focus ~ .field__label-wrap::after{
    height: 100%;
  }

  /** start button **/
  .start_button {
    box-shadow:inset 0px 39px 0px -24px #5b2a76;
    background-color:#5b2a76;
    border-radius:4px;
    border:1px solid #ffffff;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Verdana;
    font-size:15px;
    padding: 6px 15px;
    margin: 25px;
    text-decoration:none;
    text-shadow:0px 1px 0px #5b2a76;
  }
  .start_button:hover {
    background-color:#5b2a76;
  }
  .start_button:active {
    position:relative;
    top:1px;
  }

  /** response button **/
  .response-button {
    box-shadow:inset 0px 1px 0px 0px #efdcfb;
    background:linear-gradient(to bottom, #dfbdfa 5%, #bc80ea 100%);
    background-color:#dfbdfa;
    border-radius:6px;
    border:1px solid #c584f3;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:15px;
    font-weight:bold;
    padding:6px 24px;
    margin: 24px;
    text-decoration:none;
    text-shadow:0px 1px 0px #9752cc;
  }
  .response-button:hover {
    background:linear-gradient(to bottom, #bc80ea 5%, #dfbdfa 100%);
    background-color:#bc80ea;
  }
  .response-button:active {
    position:relative;
    top:1px;
  }

  .response-fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:#eee;
  }

  .container {
    padding: 0px 10% 10% 15%;
  }
  @media only screen and (max-width: 900px) {
    .container {
      padding: 0px 10% 40% 15%;
    }

    .response-button {
      padding:6px 24px;
      margin: 10px;
    }
  }
</style>
