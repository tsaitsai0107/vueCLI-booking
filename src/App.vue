<template>
  <Step1></Step1>
  <step2></step2>
  <step3></step3>
</template>

<script>
import Step1 from "./components/step1";
import step2 from "./components/step2";
import step3 from "./components/step3";

export default {
  name: "App",
  components: {
    Step1,
    step2,
    step3,
  },
};
</script>

<style>
#app {
  text-align: center;
}

button {
  margin: 10px 0;
}
</style>
