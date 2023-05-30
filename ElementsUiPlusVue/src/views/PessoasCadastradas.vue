<template>
  <div>
    <el-table :data="Registrados" style="width: 100%">
      <el-table-column prop="name" label="Nome" width="180"> </el-table-column>
      <el-table-column prop="age" label="Idade" width="180"> </el-table-column>
      <el-table-column prop="height" label="Altura"> </el-table-column>

      <el-table-column prop="weight" label="Peso"> </el-table-column>
      <el-table-column prop="sex" label="Sexo"> </el-table-column>
      <el-table-column prop="datebirth" label="Data de nascimento">
      </el-table-column>
    </el-table>
    {{ Registrados }}
  </div>
</template>

<script>
export default {
  methods: {},
  computed: {
    Registrados() {
      return this.$store.getters.persons;
    },
  },
};
</script>

<style>
el-table-column {
  word-break: break-all;
}
</style>
