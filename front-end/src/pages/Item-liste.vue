<template>
  <div class="liste-produits-template">
    <div class="menu-filtrant">
      <fieldset class="liste-deroulante-container">
      <legend>Rechercher par catégorie : </legend>
          <select 
          @change="updateList()"
          class="select-input"
          name="categorie"
          id="categorie"
          v-model="selectedCategory">
            <option value="empty">Toutes les catégories</option>
            <option value="baume">baumes</option>
            <option value="huile">huile</option>
            <option value="accessoire">accessoire</option>
            <option value="coffret">coffret</option>
          </select>
      </fieldset>     
      <div class="separation-vertical"></div>
      <fieldset>
        <legend class="legend">
          Trier les produit par :
        </legend>
        <div class="btn-container">
          <div class="row">
            <div class="col">
            <button @click="prixCroissant()" class="btn btn-sort">Prix croissant</button>
            <button @click="prixDecroissant()" class="btn btn-sort">Prix Décroissant</button>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <button @click="note()" class="btn btn-sort">avis utilisateurs</button>
              <button @click="nouveaute()" class="btn btn-sort">Nouveautés</button>
            </div>
          </div>
        </div>
      </fieldset>
  </div>
  <div class="search-bar">
    <input type="search" class="search-input" placeholder="Rechercher un produit..." autofocus>
    <i class="search-icon fa-solid fa-magnifying-glass"></i>
  </div>
  <div class="produit-panier">
    <div class="produits">
      <div @mouseenter="cardHoverIn()" @mouseleave="cardHoverOut()" v-for="item, id in sortedListItems" :key="id" class="card-container">
        <div v-if="displayFilter" class="display">
          <div class="display-btn">
            <router-link class="text-white" to="/"><p class="show-more btn">voir plus</p></router-link>
            <div @click="addItemToCart(item)" class="add-to-cart-container text-white">
              <button class="add-to-cart-icon btn"><i class="fa-solid fa-cart-plus"></i></button>
            </div>  
          </div>
          <div class="display-img">
            <img src="https://www.science-et-vie.com/wp-content/uploads/scienceetvie/2019/02/le-noir-total-existe-il.jpg" alt="">
          </div>
        </div>
        <div class="card">
         <p class="nom-produit">{{item.nom}}</p>
        <img class="img-produit" v-bind:src="item.image" alt="" />
        <p class="prix-produit my-1">{{ item.prix }} €</p>
        <div v-if="item.note > 0" class="notation mt-4">
          <div v-if="item.note >= 0 && item.note < 10" class="oneStar"><span class="text-warning"><i class="fa-solid fa-star"></i></span><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>
          <div v-if="item.note >= 10 && item.note < 20" class="twoStar"><span class="text-warning"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>
          <div v-if="item.note >= 20 && item.note < 30" class="threeStar"><span class="text-warning"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>
          <div v-if="item.note >= 30 && item.note < 40" class="fourStar"><span class="text-warning"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span><i class="fa-regular fa-star"></i></div>
          <div v-if="item.note >= 40 && item.note < 50" class="fiveStar"><span class="text-warning"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span></div>
        </div>
        <div v-else class="empty-note"><p>pas de note pour ce produit</p></div>
        <div class="supply mt-5">
          <div v-if="item.enStock === true" class="supply-true">
            <p class="text-success"><i class="fa-solid fa-circle"></i> En stock</p>
          </div>
          <div  v-if="item.enStock === false" class="supply-false">
            <p class="text-danger-emphasis"><i class  ="fa-solid fa-circle"></i> Rupture de stock</p>
          </div>
        </div>
      </div>
    </div>
    </div>
      <div class="cart" v-if="cart.length > 0">
        <h2>Liste d'achat</h2>
        <div v-for="item, id in cart" :key="item.id" class="shopping-cart" >
          <div class="body-item">
            <div class="left-col text-center">
              <p>{{ item.nom }}</p>
              <div class="img-cart-container">
                <img :src="item.image" alt="" class="img-item-cart">
              </div>
              <div class="plus-moins-delete">
                <button @click="cartPlusOne(item)" class="btn"><i class="fa-solid fa-plus"></i></button>
                <button @click="cartMinusOne(item, id)" class="btn"><i class="fa-solid fa-minus"></i></button>
                <button @click="cartRemoveItem(id)" class="btn"><i class="fa-solid fa-trash"></i></button>
              </div>
            </div>
            <div class="middle-col">
              <p>€/u</p>
              <p class="mt-2">{{ item.prix }} €</p>
              <p>Quantité : {{ item.quantity }}</p>
            </div>
            <div class="right-col">
              <p>total article</p>
              <p>{{ item.prix * item.quantity  }} €</p>
            </div>
          </div>
        </div>
        <h3>Total du panier : {{ cartTotalAmound }} €€</h3>
        <p>Nb article :</p>
        <button>Passer commande</button>
      </div>
    </div>
  </div>
 

</template>

<script>
import listItems from '../assets/items.json'

export default {
  data() {
    return {
      listItems,
      sortedListItems: listItems,
      selectedCategory: "empty",
      cart: [],
      displayFilter: false,
    }
  },
  computed: {
    cartTotalAmound() {
      let total = 0;
      for(let product in this.cart) {
        total = total + (this.cart[product].quantity * this.cart[product].prix)
      }
      return total
    },
  },
  methods: {
    updateList() {
      this.sortedListItems = [];
      this.sortedListItems =
        this.selectedCategory === "empty"
          ? (this.sortedListItems = listItems)
          : listItems.filter((item) => item.categorie === this.selectedCategory);
    },
    addItemToCart(item) {
      for(let i = 0; i < this.cart.length; i++)
        if (this.cart[i].id === item.id) {
          return this.cart[i].quantity++
        }
      this.cart.push({
        id: item.id,
        nom: item.nom,
        image: item.image,
        description: item.description,
        prix: item.prix,
        quantity: 1
      })
    },
    cartPlusOne(item) {
      item.quantity =  item.quantity +1 ;
    },
    cartMinusOne(item, id) {
      if(item.quantity === 1) {
        this.cartRemoveItem(id);
      } else {
        item.quantity = item.quantity -1
      }
    },
    cartRemoveItem(id) {
      this.cart.splice(id, 1)
    },
    cardHoverIn() {
      this.displayFilter = true;
    },
    cardHoverOut() {
      this.displayFilter = false;
    },
    prixCroissant() {
      this.sortedListItems.sort((a, b) => {
        return a.prix - b.prix
      })
    },
    prixDecroissant() {
      this.sortedListItems.sort((a, b) => {
        return b.prix - a.prix
      })
    },
    note() {
      this.sortedListItems.sort((a, b) => {
        return b.note - a.note
      })
    },
    nouveaute() {
      this.sortedListItems.sort((a, b) => {
        return b.id - a.id
      })
    }
  },
}
</script>

<style scoped>

.liste-produits-template {
width: 90%;
margin: 50px auto;

}
.nom-produit {
  font-size: 1.5rem;
  margin-bottom: 50px;
}
/* Menu filtrant */

.menu-filtrant {
  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: #E5E5DB;
  padding: 20px;
  border-radius: 20px;
  margin: auto;
}
.separation-vertical {
  border-left: 5px solid;
  color: #d2d2c7;
}
.select-input {
  width: 60%;
  padding: 5px 30px;
  border: none;
  border-radius: 10px;
  background-color: #d2d2c7;
  cursor: pointer;
}
.search-bar {
  display: flex;
  position: relative;
  align-items: center;
  margin: 20px 0;
  width: 20%;
}
.search-icon {
  position: absolute;
  left: 0;
  transform: translateX(50%);
}
.search-input {
  padding: 5px 5px 5px 30px;
  outline-color: #c0c0b5;
  border-radius: 10px;
  width: 100%;
  border: none;
  background-color: #E5E5DA;
}
.btn-sort {
  box-shadow: 1px 1px 5px;
  margin: 5px 5px;
}





/* liste  */

.card-container {
  box-shadow: 1px 1px 10px grey;
  width: 23%;
  min-width: 528px;
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  margin: 0;
}
.produits {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}
.img-produit {
  object-fit: contain;
  max-height: 450px;
}
.card {
  border: none;
}
.display {
  z-index:  1;
}
.display-img {
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
.display-btn {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
}
.add-to-cart-icon, .show-more {
  font-size: 2em;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.71);
  padding: 20px;
  border-radius: 50px;
}
.btn {
  z-index: 3;
  cursor: pointer;
}




/* panier */
.shopping-cart {
  background-color: #fff;
  padding: 0px 10px;
  border-radius: 20px;
  margin-top: 20px;
  border: 3px solid;
  position: relative;
}
.cart {
    margin-top: 45px;
    min-width: 25%;
    max-height: 600px;
  }
  .plus-moins-delete {

  }
  .body-item {
    display: flex;
    justify-content:space-between ;
  }
  .img-item-cart {
    width: 70px;
  }
  .titre-panier {
    margin: 50px 0 0 0;
  }
  .produit-panier {
    display: flex;
    justify-content: space-between;
  }
 
</style>