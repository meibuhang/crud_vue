<template>
  <div id="app">
    <div id="nav">
      <v-card height="800px">
        <v-navigation-drawer absolute permanent left dark color="#1E88E5">
          <v-list dense>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title id="links">
                  <router-link to="/">Add</router-link>
                </v-list-item-title>
                <v-list-item-title id="links">
                  <router-link to="/list">List</router-link>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-content>
          <router-view />
          <div id="listSection">
            <List />
          </div>
        </v-content>
      </v-card>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 50px;
  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;

    &.router-link-exact-active {
      color: #d1f656;
      text-decoration: none;
    }
  }
}

#links {
  font-size: 15px;
  padding-top: 20px;
}

#listSection {
  margin: 0 auto;
  padding-top: 20px;
}
</style>
<script>
import List from "./views/List";
export default {
  name: "list",
  components: {
    List
  }
};
</script>
