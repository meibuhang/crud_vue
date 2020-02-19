<template>
  <form class="form" @submit.prevent="updatePost">
    <v-text-field v-model="user.name" label="Name"></v-text-field>
    <v-text-field v-model="user.email" label="Email"></v-text-field>
    <v-text-field v-model="user.address" label="Address"></v-text-field>
    <v-btn class="mr-4" type="submit">Update</v-btn>
  </form>
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
      user: {}
    };
  },
  created() {
    let uri = `http://localhost:5000/api/client/${this.$route.params.id}`;
    axios.get(uri).then(response => {
      this.user = response.data;
    });
  },
  methods: {
    updatePost() {
      let uri = `http://localhost:5000/api/client/edit/${this.$route.params.id}`;
      axios.put(uri, this.user).then(res => {
        // this.$router.push({ name: "user" });
        location.reload();
        // alert("saved");
        console.log(res);
      });
    },
    clear() {
      this.name = "";
      this.email = "";
      this.address = "";
    }
  }
};
</script>
