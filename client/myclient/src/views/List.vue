<template>
  <v-container>
    <v-simple-table fixed-header height="300px" class="table">
      <template>
        <h4>List Client</h4>
        <table>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">email</th>
              <th class="text-left">Address</th>
              <th class="text-left" colspan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in sortedUsers" :key="user.id">
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.address }}</td>
              <td>
                <v-btn color="#1E88E5" id="btn">
                  <a class="badge badge-warning" :href="'/edit/'+user.id">Edit</a>
                </v-btn>
              </td>
              <td id="btn">
                <v-btn color="#E53935" id="btn" @click.prevent="del(user.id)">Delete</v-btn>
              </td>
            </tr>
          </tbody>
        </table>
      </template>
           <div id="pagination">
            <button @click="prevPage" class='btnnav'>Prev</button> 
            <button @click="nextPage" class='btnnav'>Next</button>
          </div>
    </v-simple-table>
  
  

  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "ListUser",

  data() {
    return {
      loading: true,
      headers: [{ text: "Name" }, { text: "Email" }, { text: "Address" }],
      data: {},
    pageSize:3,
  currentPage:1
    };
  },
  methods: {
    load() {
      axios
        .get("http://localhost:5000/api/client/all")
        .then(res => {
          this.data = res.data;
        })
        .catch(() => {
          console.log("error load data");
        });
    },
    del(id) {
      let uri = `http://localhost:5000/api/client/delete/${id}`;
      axios
        .delete(uri)
        .then(response => {
          location.reload();
          this.data.splice(this.data.indexOf(id), 1);
          console.log(response);
        })
        .catch(() => {
          console.log("error load data");
        });
    },
     
    nextPage:function() {
  if((this.currentPage*this.pageSize) < this.data.length) this.currentPage++;
},
prevPage:function() {
  if(this.currentPage > 1) this.currentPage--;
}
},
created () {
    this.load();
  },
  
  computed: {
   sortedUsers() {
      return this.data.slice(0).filter((row, index) => {
        let start = (this.currentPage-1)*this.pageSize;
        let end = this.currentPage*this.pageSize;
        if(index >= start && index < end) return true;
      });
    }
  },
  mounted() {
    this.load();
  }
};
</script>
<style lang="scss">
.table {
  width: 80%;
  margin: 0 auto;
  padding-left: 50px;
}
#btn {
  color: #ffffff;
}

#pagination {
  display: flex;
  list-style: none;
  font-family: sans-serif;
  justify-content:center;
  margin:30px 0;
}

.btnnav{
  padding:20px 20px;
  margin:10px 15px;
  background:#1E88E5;
  color:#fff;
  font-weight:bold;
}
</style>