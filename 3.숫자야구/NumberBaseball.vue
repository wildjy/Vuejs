<template>
  <div>
    <h1>{{ result }}</h1>
    <form action="post" v-on:submit="onSubmitForm">
      <input type="text" maxlength="4" ref="answer" v-model="value">
      <button type="submit">입력</button>
    </form>
    <div>시도 : {{ tries.length }}</div>
    <ul>
      <li v-for="t in tries">
        <div>{{ t.try }}</div>
        <div>{{ t.result }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        tries : [],
        value : '',
        result : '',
      }
    },
    methods : {
      onSubmitForm(e){
        e.preventDefault();
        this.tries.push({
          try : this.value,
          result : '홈런',
        });
        this.value = '';
        this.$refs.answer.focus();
      }
    }
  }
</script>

<style>

</style>