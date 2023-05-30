<script>
import { ref } from "vue";
export default {
  data: function () {
    return {
      Person: ref({
        name: ref(""),
        age: ref(0),
        height: ref(0.0),
        weight: ref(0.0),
        sex: ref("M"),
        datebirth: ref(""),
      }),
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          /*
    {
      text: "Today",
      onClick(picker) {
        picker.$emit("pick", new Date());
      },
    },
    */
        ],
      },
    };
  },
  components: {},
  methods: {
    cadastrar: function () {
      this.$store.commit("addPerson", this.Person);
    },
  },
  computed: {},
};
</script>

<template>
  <fieldset>
    <legend>Formulário de entrada de pessoal</legend>
    <el-form ref="Person" :model="Person" label-width="120px">
      <el-form-item label="Nome">
        <el-input placeholder="Nome" v-model="Person.name"></el-input>
      </el-form-item>

      <el-form-item label="Idade">
        <el-input-number
          v-model="Person.age"
          :precision="0"
          :step="1"
          :min="1"
          :max="110"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="Altura">
        <el-input-number
          v-model="Person.height"
          :precision="2"
          :step="0.01"
          :min="0"
          :max="3"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="Peso">
        <el-input-number
          v-model="Person.weight"
          :precision="2"
          :step="0.01"
          :min="0"
          :max="500"
        ></el-input-number>
      </el-form-item>

      <el-form-item label="Sexo">
        <el-radio v-model="Person.sex" label="F">Feminino</el-radio>
        <el-radio v-model="Person.sex" label="M">Masculino</el-radio>
      </el-form-item>

      <el-form-item label="Data de Nascimento">
        <el-date-picker
          v-model="Person.datebirth"
          type="date"
          placeholder="Pick a day"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </el-form-item>
    </el-form>
    <br />
    <el-button type="success" @click="cadastrar">Cadastrar</el-button>
  </fieldset>
</template>

<style scoped>
fieldset {
  padding: 0.5rem;
  border-radius: 0.5rem;
  min-width: 90vw;
  place-content: center;
  line-height: 2;
}
</style>
