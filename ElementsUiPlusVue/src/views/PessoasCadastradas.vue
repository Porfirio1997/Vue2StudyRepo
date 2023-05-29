<template>
  <div>
    <h1>Pessoas já cadastradas</h1>
    <h6>{{ Registrados }}</h6>
  </div>
</template>

<script>
export default {
  computed: {
    Registrados() {
      if (this.$store == undefined) {
        console.log("deu ruim");
      }
      return this.$store.getters.persons;
    },
  },
};
</script>

<style></style>
