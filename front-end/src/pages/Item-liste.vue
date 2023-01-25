<template>
  <div class="liste-produits">
      <div class="menu-filtrant">
      <fieldset>
      <legend>Selectionnez les produits à afficher : </legend>
          <select 
          @change="updateList()"
          name="categorie"
          id="categorie"
          v-model="selectedCategory">
            <option value="empty">Rechercher dans la catégorie...</option>
            <option value="baume">baumes</option>
            <option value="huile">huile</option>
            <option value="accessoire">accessoire</option>
            <option value="coffret">coffret</option>
          
          </select>
          <input type="text" id="search" name="search" v-model="onSearch" placeholder="Rechercher...">
      </fieldset>
  </div>
  <div class="produit-panier">
        <div class="produits">
      <div class="card-container"  v-for="(item, i) in sortedListItems" :key="i" >
        <div class="bg-contain">
          <img class="bg" src="../assets/bg2.webp" alt="image du produit">
        </div>
        <p class="nom-produit">{{item.nom}}</p>
        <div class="card-text">
          <router-link to="FicheProduit">
          <img class="img-item" v-bind:src="item.image" alt="">
          </router-link>                
          <p class="description-produit">{{ item.description }}</p>
          <p class="prix-produit">{{ item.prix }} €</p>
          <div class="btn">
            <router-link class="link" to="FicheProduit"><p class="voir-plus">Voir plus...</p></router-link>
            <i @click="ajouterPanier(item)" class="fa-duotone fa-cart-plus"></i>
          </div>
        </div>
      </div>
    </div>
      <div class="panier" v-if="card.length > 0">
        <div class="shopping-card" v-for="(item, index) in card" :key="index">
          <p>Réference :{{ item.id }}</p>
          <div class="body-item">
            <img :src="item.image" alt="" class="image-item-panier">
            <p>{{ item.nom }}</p>
            <p>{{ item.prix }}</p>
          </div>
          <div class="plus-moins-delete">
            <button><i class="fa-solid fa-plus"></i></button>
            <button><i class="fa-solid fa-minus"></i></button>
            <button><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
        <p>total </p>
      </div>
 
  </div>

  </div>

</template>

<script>
import listItems from '../assets/Items.json'

export default {
  data() {
    return {
      listItems,
      sortedListItems: listItems,
      selectedCategory: "empty",
      card: [],
    }
  },
  methods: {
    updateList() {
      this.sortedListItems = [];
      this.sortedListItems =
        this.selectedCategory === "empty"
          ? (this.sortedListItems = listItems)
          : listItems.filter((item) => item.categorie === this.selectedCategory);
    },
    ajouterPanier(item) {
      this.card.push({
        id: item.id,
        nom: item.nom,
        image: item.image,
        description: item.description,
        prix: item.prix,
        quantity: 1
      })
      document.addEventListener("input", () => {
        setTimeout(() => {
        this.$cookies.set("panier", JSON.stringify(this.card))
      }, 300)
      })
    }
  },
}
</script>

<style scoped>
  i {
    width: 50px;
  }
  .plus-moins-delete {
    position: absolute;
    bottom: 0;
  }
  .body-item {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;
  }
  .shopping-card {
    background-color: #fff;
    padding: 0px 10px;
    border-radius: 20px;
    margin-top: 20px;
    border: 3px solid;
    position: relative;
  }
  .image-item-panier {
    width: 50px;
    border-radius: 30px;
  }
  .titre-panier {
    margin: 50px 0 0 0;
  }
  .produit-panier {
    display: flex;
    width: 95%;
    margin: auto;
  }
  .panier {
    border: 2px solid;
    margin-top: 10px;
    border-radius: 20px;
    min-width: 22%;
    max-height: 900px;
    overflow: auto;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  .card-container {
    overflow: hidden;
    border-radius: 50px;
    box-shadow: 1px 1px 10px grey;
    padding-bottom: 20px;
    width: 340px;
    margin: 10px;
    max-height: 480px;

  }
  .produits {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    }
  .img-item {
    max-width: 200px;
    max-height: 180px;
    margin: auto;       
    }
    .ajouter-panier {
    width: 40px;
    border: 1px solid;
    border-radius: 70px;
    padding: 15px 20px 15px 15px;
    cursor: pointer;
    }
    .btn {
    display: flex;
    justify-content: space-around;
    align-items: center;
    }
    .voir-plus {
    width: 100%;
    background-image: url("../assets/bg2.webp");
    padding: 10px 20px;
    border-radius: 50px;
    box-shadow: 1px 1px 20px;
    font-size: 1.3em;
    font-weight: bold;
    text-shadow: 1px 1px 10px white;
    }
    .card-text {
    width: 90%;
    margin: auto;
    text-align: center;
    }
    .nom-produit {
    position: relative;
    top: -60px;
    text-align: center;
    font-size: 2.5em;
    margin: 0;
    }
    .bg {
    position: relative;
    opacity: 80%;
    margin: 0;
    }
    .bg-contain {
    overflow: hidden;
    position: relative;
    height: 70px;
    }
  router-link {
    display: block;
    }
    .menu-filtrant {
      width: 95%;
      margin: auto;
    }
</style>