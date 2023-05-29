<script setup>
import { ref } from "vue";
import LabeledInput from "../components/LabeledInput.vue";
const Person = ref({
  name: ref(""),
  age: ref(0),
  height: ref(0.0),
  weight: ref(0.0),
  sex: ref("M"),
  datebirth: ref(""),
});

let cadastrar = () => {
  this.$store.dispatch("addperson", Person);
};
const pickerOptions = {
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
};
</script>

<template>
  <fieldset>
    <legend>Formulário de entrada de pessoal</legend>

    <el-row :span="100">
      <LabeledInput msg="Nome">
        <el-input placeholder="Nome" v-model="Person.name"></el-input>
      </LabeledInput>
    </el-row>
    <el-row :span="100">
      <LabeledInput msg="Idade">
        <el-input-number
          v-model="Person.age"
          :precision="0"
          :step="1"
          :min="1"
          :max="110"
        ></el-input-number>
      </LabeledInput>
    </el-row>
    <el-row :span="100">
      <LabeledInput msg="Altura">
        <el-input-number
          v-model="Person.height"
          :precision="2"
          :step="0.01"
          :min="0"
          :max="3"
        ></el-input-number>
      </LabeledInput>
    </el-row>
    <el-row :span="100">
      <LabeledInput msg="Peso">
        <el-input-number
          v-model="Person.weight"
          :precision="2"
          :step="0.01"
          :min="0"
          :max="500"
        ></el-input-number>
      </LabeledInput>
    </el-row>
    <el-row :span="100">
      <LabeledInput msg="Sexo">
        <el-radio v-model="Person.sex" label="F">Feminino</el-radio>
        <el-radio v-model="Person.sex" label="M">Masculino</el-radio>
      </LabeledInput>
    </el-row>

    <el-row :span="50">
      <LabeledInput msg="Data de Nascimento">
        <el-date-picker
          v-model="Person.datebirth"
          type="date"
          placeholder="Pick a day"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </LabeledInput>
    </el-row>
    <br />
    <el-button type="success" :onclick="cadastrar">Success</el-button>
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
