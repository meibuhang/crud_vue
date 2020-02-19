<template>
  <v-container>
<h4>Add Data Client</h4>
  <form class="form" @submit="formSubmit">
    <v-text-field v-model="name" label="Name"></v-text-field>
    <v-text-field v-model="email" label="Email"></v-text-field>
    <v-text-field v-model="address" label="Address"></v-text-field>
    <v-btn class="mr-4" type="submit">submit</v-btn>
    <v-btn type="clear" @click="clear">clear</v-btn>
  </form>
 </v-container>
</template>

<style lang="scss">
.form {
  width: 30%;
  margin: 0 auto;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      address: ""
    };
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();

      axios
        .post("http://localhost:5000/api/client/register", {
          name: this.name,
          email: this.email,
          address: this.address
        })
        .then(res => {
          location.reload();
          // alert("saved");
          console.log(res);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    clear() {
      this.name = "";
      this.email = "";
      this.address = "";
    }
  },
  mounted() {
    console.log("mountedd");
  }
};
</script>
