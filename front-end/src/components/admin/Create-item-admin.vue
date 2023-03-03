<template lang="">
    <div class="create-item-template">
        <form action="">
            <div class="name-item mb-3">
                <label for="name-label">Nom</label>
                <input v-model="nameItem" class="form-control" type="text" id="name">
            </div>
            <div class="description-item mb-3">
                <label for="description-label">Description</label>
                <textarea v-model="descriptionItem" class="form-control" name="" id="" cols="30" rows="5"></textarea>
            </div>
            <div class="image-item mb-3">
                <label for="image-labal">URL image</label>
                <input v-model="imageItem" class="form-control" type="url" name="" id="">
            </div>
            <div class="category-item mb-3">
                <label for="category-label">Catégorie</label>
                <select v-model="categoryItem" class="form-control" name="category" id="">
                    <option value="none">Catégorie...</option>
                    <option value="baume">Baume</option>
                    <option value="huile">Huile</option>
                    <option value="accessoire">Accessoire</option>
                </select>
            </div>
            <div class="price-item mb-3">
                <label for="price-label">Prix</label>
                <input v-model="priceItem" class="form-control" type="number" name="price" id="">
            </div>
            <div class="en-stock-item">
                <label for="en-stock-label">En stock</label>
                <select v-model="enStockItem" class="form-control" name="en-stock" id="">
                    <option value="true">Oui</option>
                    <option value="false">Non</option>
                </select>
            </div>
            <div class="submit-item text-center mt-5">
                <button @click.prevent="validateItem()" class="btn btn-success" type="submit">Creer item</button>
            </div>
        </form>
    </div>
</template>


<script>


export default {
    data() {
        return {
            nameItem: "",
            descriptionItem: "",
            imageItem: "",
            categoryItem: "",
            priceItem: "",
            enStockItem: ""
        }
    },
    methods: {
        validateItem() {
            const newItem = {
                nom : this.nameItem,    
                image : this.imageItem,
                description : this.descriptionItem,
                categorie : this.categoryItem,
                prix : this.priceItem,  
                enStock: this.enStockItem
            }

            fetch('http://localhost:3000/api/items', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newItem),
            })
            .then(res => res.json())
            .then(data => console.log(data.message))
            .catch((err) => { console.log(err)})   
        },
    }
}

</script>


<style lang="">
    


</style>