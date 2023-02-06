<template>
  <div class="review-template">
    <div class="row">
    <div class="col-4 left-element">
      <img class="review-image" src="https://www.rebrechien.fr/wp-content/uploads/2019/07/sondage.png" alt="">
    </div>
    <div class="col-8 right-element">
    <i class="comment-icon fa-regular fa-comment"></i>
      <div class="review-container review-element">
      <p class="review-text review">
        {{ reviewsJSON[reviewPosition].review }}
      </p>
    </div>
    <div class="rating-container review-element">
        <p class="review-text rating">note : {{ reviewsJSON[reviewPosition].rating }} /5</p>
    </div>
    <div class="pseudo-container review-element">
      <p class="review-text pseudo">
        {{ reviewsJSON[reviewPosition].email }}
      </p>
    </div>
    
    </div>
    </div>
    
    
  </div>
</template>

<script>
import reviewsJSON from "@/assets/avis-clients/avis-client.json"
export default {
  data() {
    return {
      reviewsJSON,
      sortedReviews: reviewsJSON.sort((a, b) => {
        return b.rating - a.rating
      }).slice(0, 20),
      reviewPosition: 0,
    }
  },
  methods: {
    nextReview() {
      if(this.reviewPosition !== this.sortedReviews.length) {
        this.reviewPosition ++
      } else if (this.reviewPosition === this.sortedReviews.length ) {
        this.reviewPosition = 0
      }
    }
  },
   mounted() {
     setInterval(() => {
       this.nextReview();
     }, 2000);
   }
}
</script>

<style scoped>
  .review-template {
    width: 90%;
    margin: 100px auto;
    background-color: #e7e8e080;
    padding: 30px 100px;
  }
  .review-image {
    margin: auto;
  }
  .comment-icon {
    font-size: 3em;
    color: #383838;
  }
  .right-element {
    position: relative;
  }
  .review-container {
    background-color: #e7e8e0e3;
    width: 100%;
    border-radius: 20px;
    padding: 10px;
    margin: 50px 0;
    height: 30%;
    overflow: scroll;
  }
  .review {
    font-size: 1.5rem;
  }

</style>
