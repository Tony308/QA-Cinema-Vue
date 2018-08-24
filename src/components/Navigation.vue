<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!--<a class="navbar-brand" >LOGO</a>-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <img src="@/images/QA Logo.jpg" style="margin-left:25px;width:45px; height:30px;">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" style="margin:10% 0 0 20%;" to="/" replace>
           Home <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Aboutus" replace>
            About Us
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Movie-Listings" replace>
            Movie Listings
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Contact-us" replace>
            Contact Us
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Film-Classifications" replace>
            Film Classifications
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Ticket-booking" replace>
            Ticket Booking
          </router-link>
        </li>
        <li class="nav-item dropdown">

          <router-link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <a>Dropdown Menu</a>
          </router-link>
        </li>

      </ul>
      <ul class="navbar-nav mr-auto" style="position: relative; display: inline-block; margin:auto; float: right;">
        <li class="nav-item">

          <div class="dropdown">
            <div class="dropbtn">
              <router-link class="nav-link" to="/account/login"> Account </router-link>
            </div>
            <div class="dropdown-content">
              <router-link to="/add-account" replace>
                <a>Add Account</a>
              </router-link>
              <router-link to="/account" replace>
                <a>Get Accounts</a>
              </router-link>
              <router-link to="/edit-account" replace>
                <a>Edit Account</a>
              </router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      loginID: 0
    }
  }
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
  .dropdown .dropbtn {
    font-size: 16px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }

  .dropdown:hover .dropbtn {
    background-color: red;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .dropdown-content  a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
</style>
