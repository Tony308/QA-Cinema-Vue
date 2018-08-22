<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!--<a class="navbar-brand" >LOGO</a>-->
    <img src="@/images/QA Logo.jpg" style="margin-left:25px;width:45px; height:30px;">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/" replace>
           Home <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/listings" replace >
            Listings
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/add-account" replace>
            Add Account
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/add-order" replace >
            Add Order
          </router-link>
        </li>

        <li class="nav-item dropdown">
          <router-link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown Menu
          </router-link>

        </li>

        <li class="nav-item">
          <router-link>Opening Times</router-link>
        </li>
        <li>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </li>
      </ul>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/account/login"> Account </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
