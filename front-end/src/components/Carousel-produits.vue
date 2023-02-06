<template>
    <div id="carousel-template">
        <h3 class="carousel-title"> Les produits que vous avez préférés :</h3>
        <i @click="prevItem()" class="fa-solid fa-chevron-left prev-next-icon prev-icon"></i>
        <div class="carousel-container">
            <div class="first-item item">
                <div class="name-container">
                    <p> {{ sortedElement[positionFirstElement].nom }}</p>
                </div>   
                <div class="image-container">
                    <img class="image-item" :src="items[positionFirstElement].image" alt="">
                </div>
            </div>
            <div class="second-item item">
                <div class="name-container">
                    <p> {{ sortedElement[positionSecondElement].nom }}</p>
                </div>   
                <div class="image-container">
                    <img class="image-item" :src="items[positionSecondElement].image" alt="">
                </div>
            </div>
            <div class="third-item item">
                <div class="name-container">
                    <p> {{ sortedElement[positionThirdElement].nom }}</p>
                </div>   
                <div class="image-container">
                    <img class=" image-item" :src="items[positionThirdElement].image" alt="">
                </div>
            </div>
        </div>
        <i @click="nextItem()" class="fa-solid fa-chevron-right prev-next-icon next-icon"></i>
    </div>
</template>

<script>

import items from "@/assets/items.json"

export default {
    data() {
        return {
            items,
            sortedElement: items.sort((a, b) => {
                return b.note - a.note
            }).slice(0, 6),
            positionFirstElement: 0,
            positionSecondElement: 1,
            positionThirdElement: 2,
        }
    },
    methods: {
        nextItem() {
            if(this.positionThirdElement !== 5) {
                this.positionFirstElement++
                this.positionSecondElement++
                this.positionThirdElement++  
            } else {
                this.positionFirstElement -=3
                this.positionSecondElement -=3
                this.positionThirdElement -= 3
            }            
        },
        prevItem() {
            if(this.positionFirstElement !== 0) {
                this.positionFirstElement--
                this.positionSecondElement--
                this.positionThirdElement--
            } else {
                this.positionFirstElement +=3
                this.positionSecondElement +=3
                this.positionThirdElement +=3
            }       
        },

    },
         mounted() {
        if(this.positionThirdElement !== 5) {
            setInterval(() => {
            this.nextItem()
             }, 5000)
        }             
    }
}
</script>

<style>
    #carousel-template {
        width: 95%;
        margin: 50px auto;
        padding: 30px;
        position: relative;
    }
    .carousel-container {
        width: 95%;
        margin: 50px auto;
        display: flex;
        justify-content: space-between;
        text-align: center;
    }
    .carousel-title {
        font-size: 2.5rem;
        text-align: center;
    }
    .image-item {
        max-width: 450px;
        max-height: 450px;
        padding: 50px;
    }
    .next-element, .prev-element {
        display: block;
        margin: auto;
    }
    .prev-icon {
        position: absolute;
        left: 0;
        top: 50%;
        color: rgba(151, 151, 151, 0.722);
    }
    .next-icon {
        position: absolute;
        right: 0;
        top: 50%;
        color: rgba(151, 151, 151, 0.722);
    }
    .prev-next-icon {
        font-size: 30px;
        padding: 30px;
        border-radius: 100px;
        cursor: pointer;
    }
    .next-icon:hover, .prev-icon:hover {
        color: black;

    }
    .item {
        border: 2px solid;
        box-shadow: 5px 5px 10px;
    }
    .item:hover {
    }
    
</style>