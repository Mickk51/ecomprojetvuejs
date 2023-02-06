<template>
  <div class="recipe-home-template">
    <h3 class="recipes-title">On vous explique comment le faire vous même</h3>
    <h4 class="recipes-second-title">Et oui, on allait pas vous laisser seul, même si c'est hyper simple, vous allez voir :</h4>
    <div class="card-container">
      <div class="card" style="width: 30rem;">
      <img src="https://www.elixirdessences.fr/wp-content/uploads/2018/09/soin-visage.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>
      <div class="card" style="width: 30rem;">
      <img src="https://www.elixirdessences.fr/wp-content/uploads/2018/09/soin-visage.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>
      <div class="card" style="width: 30rem;">
      <img src="https://www.elixirdessences.fr/wp-content/uploads/2018/09/soin-visage.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .recipe-home-template {
    width: 90%;
    margin: 100px auto;
    text-align: center;
  }
  .card-container {
    display: flex;
    justify-content: space-between;
    margin: 50px 0;
  }
  .card {
    border-radius: 50px;
  }
  .recipes-title {
    font-size: 2.5rem;
  }
  .recipes-second-title {
    font-size: 1.1rem;
    font-weight: normal;
    font-style: italic;
    color: rgb(107, 107, 107);
  }
</style>