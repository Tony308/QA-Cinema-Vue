<template>
    <div id="footer">
      <footer class="container-fluid text-center">
        <p>Footer Text</p>
      </footer>
    </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style scoped>
  /* Remove the navbar's default margin-bottom and rounded borders */
  .navbar {
    margin-bottom: 0;
    border-radius: 0;
  }

  /* Add a gray background color and some padding to the footer */
  footer {
    border: dashed red 2px;
    background-color: #f2f2f2;
    padding: 25px;
  }

  .carousel-inner img {
    width: 100%; /* Set width to 100% */
    margin: auto;
    min-height:200px;
  }

  /* Hide the carousel text when the screen is less than 600 pixels wide */
  @media (max-width: 600px) {
    .carousel-caption {
      display: none;
    }
  }
</style>
