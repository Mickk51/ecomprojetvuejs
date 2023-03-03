<template lang="">
    <div class="menu-list">
        <ul>
            <router-link to="/dash-board-admin"><li class="nav-link mb-3">Tableau de bord</li></router-link>
            <router-link to="/users-list-admin"><li class="nav-link mb-3">Gestion des utilisateurs</li></router-link>
            <router-link to="/items-list-admin"><li class="nav-link mb-3">Gestion des produits</li></router-link>
            <router-link to="/create-item-admin"><li class="nav-link mb-3">Ajouter un produit</li></router-link>
        </ul>
    </div>
</template>


<script>
export default {
    
}
</script>


<style>

    .menu-list {
        border-radius: 50px;
        padding-top: 50px;
        background-color: rgb(172, 170, 170);
        height: 800px;
    }

</style>