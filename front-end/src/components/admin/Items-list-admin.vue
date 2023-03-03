<template lang="">
    <div class="item-list-template">
        <div v-show="getItemById <= 0" class="mb-2" v-for="(item, index) in items" :key="index">
            <div class="items-list">
                <img class="miniature-img-list" :src="item.image" alt="">
                <p>{{ item.nom }}</p>
                <p>{{ item.prix}}</p>
                <p>{{ item.categorie}}</p>
                <p>{{ item.enStock }}</p>
                <button @click="getIdItem(items[index]._id)" class="btn btn-success">Modifier</button>
            </div>   
        </div> 
        <FormPatch :itemToModify="getItemById" v-if="getItemById != 0"/>
   </div> 
</template>


<script>
import FormPatch from './Modify-item-admin.vue'

export default {

    data() {
        return {
            items: null,
            getItemById: [],
            nameItem: "",
            imageItem: "",
            descriptionItem: "",
            categoryItem: "none",
            priceItem: 0,
            enStockItem : true,
        }
    },
    components: {
        FormPatch
    },
    methods: {
    test() {
        console.log(this.index)
    },
    async getItems() {
        fetch("http://localhost:3000/api/items")
            .then(res => res.json())
            .then(data => this.items = data)
    },
    async getIdItem(mongoId) {
        fetch(`http://localhost:3000/api/items/${mongoId}`)
        .then(res => res.json())
        .then(data => this.getItemById = data)

    },
        },
    mounted() {   
        this.getItems()  
}
}

</script>



<style>
    .items-list {
        display: flex;
        justify-content: space-between;
    }
    .miniature-img-list {
        width: 50px;
        height: auto;
    }
</style>