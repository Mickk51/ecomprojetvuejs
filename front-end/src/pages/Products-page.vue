<template>
    <div class="sell-page">

        <!-- -------------------------------------------------------------Filtres -->

        <div class="filtered-menu">
            <div class="filtered-select">
                <select class="form-control" name="filtered" id="select">
                    <option value="all">Rechercher par catégorie</option>
                    <option value="balm">Baumes</option>
                    <option value="oil">Huiles</option>
                    <option value="accessory">Accessoires</option>
                    <option value="gift">Coffrets</option>
                </select>
            </div>   
            <div class="filtered-text">
                <input class="form-control" type="text" placeholder="Tapez le nom d'un produit">
            </div>
            <div class="filtered-btn">
                <button @click="filteredByAscendingPrice" class="btn btn-primary m-1">Prix croissant</button>
                <button @click="filteredByDecreasingPrice" class="btn btn-primary m-1">Prix decroissant</button>
                <button @click="filteredByReview" class="btn btn-primary m-1">Meilleurs notes</button>
            </div>
        </div>
        <div class="show-room">

            <!-- --------------------------------------------------------Produits  -->

            <div class="product-card">
                <div @mouseenter="showFilterCard()" @mouseleave="showFilterCard()" v-for="(item, index) in items" :key="index" class="products">
                    <div class="bg-box">
                        <div  v-if="mouseOn" class="filter">
                            <img class="bg-card" src="https://www.science-et-vie.com/wp-content/uploads/scienceetvie/2019/02/le-noir-total-existe-il.jpg" alt="">
                            <div class="btn-filter">
                                <button @click="addToCart(item)" class="btn add-cart"><i class="fa-solid fa-cart-plus cart-plus-icon"></i></button>
                                <button class="btn show-more"><i class="fa-solid fa-info info-icon"></i></button>
                            </div>
                        </div>
                        <p>{{ item.nom }}</p>
                        <img class="img-item" :src="item.image" alt="">
                        <div class="text-card">
                            <p>{{ item.prix }} €</p>
                            <p>{{ item.enStock }}</p>
                        </div>
                    </div>
                </div> 
            </div>

            <!-- -----------------------------------------------------------panier -->

            <div v-if="cart.length > 0" class="show-cart col-3">
                <p class="">Panier</p>
                <div v-for="(item, index) in cart" :key="index" class="cart">
                    <div class="element-cart text-start px-2 mb-2">
                        <p class="mb-2">{{ item.nom }}</p>
                        <div class="body-cart p-3">
                            <img class="img-miniature" :src="item.image" alt="">
                            <p class="">Quantité : </p>
                            <p class="">Prix :</p>
                        </div>
                        <button class="btn"><i class="fa-solid fa-plus"></i></button>
                        <button class="btn"><i class="fa-solid fa-minus"></i></button>
                        <button class="btn"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    data() {
        return {
            items: null,
            cart: [],
            mouseOn: false,
        }
    },
    methods: {
        getProducts() {
            fetch("http://localhost:3000/api/items")
                .then(res => res.json())
                .then(data => this.items = data)
                .catch(err => console.log(err))
        },
        filteredByAscendingPrice() {
            this.items.sort((a, b) => {
                return b.prix - a.prix
            })
        },
        filteredByDecreasingPrice() {
            this.items.sort((a, b) => {
                return a.prix - b.prix
            })
        },
        filteredByReview() {
            this.items.sort((a, b) => {
                return a.note - b.note
            })
        },
        addToCart(item) {
            this.cart.push(item)
            console.log(item)
        },
        showFilterCard() {
            if(this.mouseOn === false) {
                this.mouseOn = true
            } else {
                this.mouseOn = false
            }
        }
    },
    mounted() {
        this.getProducts()
    },
    
}
</script>


<style scoped>
    .sell-page {
        width: 95%;
        margin: 20px auto;
    }
    .filtered-menu {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 50px;
        padding: 50px 30px;
        border-bottom: 1px solid;
    }
    .filtered-select {
        width: 20%;
    }
    .product-card {
        display: flex;
        gap: 20px;
        text-align: center;
        flex-wrap: wrap;
    }
    .img-item {
        display: flex;
        width: 80%;
        margin: auto;
    }
    .bg-box {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 419px;
        height: 550px;
        box-shadow: 1px 1px 10px;
        overflow: hidden;
    }
    .bg-card {
        opacity: 0.5;
        position: absolute;
        left: 0;
    }
    .btn-filter {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%);
    }
    .cart-plus-icon, .info-icon {
        font-size: 50px;
        margin: 50px;
        color: white;
    }
    .show-room {
        display: flex;
    }
    .body-cart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #e2e2e283;
        border-radius: 50px;
    }
    .img-miniature {
        width: 80px;
        border-radius: 50px;
    }
</style>