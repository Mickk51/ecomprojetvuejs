<template>
    <div class="creer-compte">
        <h2 class="creer-titre">Pas encore inscrit ?</h2>
        <div class="separation"></div> 
        <router-link to="/create-account-form">
            <input id="btn-connexion" type="submit" value="Creer un compte">
        </router-link>                  
    </div>

                  
</template>

<script>
export default {

}
</script>

<style scoped>
    .creer-compte {
        padding: 30px;
        background-color: #314f7700;
        width: 35%;
        border-radius: 30px;
        box-shadow: 0 10px 30px;
        position: relative;
    }
    .creer-titre {
        font-size: 1.6em;
   }
    .separation {
        height: 1px;
        background-color: #B4464D;
        margin: auto;
        margin-top: 5px;
    }
    #btn-connexion {
        margin: 20px 0 auto auto;
        padding: 5px 20px;
        border-radius: 10px;
        border: none;
        background-color: #314f7756;
        box-shadow: 2px 2px 5px;
        font-size: 1.1em;
        position: absolute;
        top: 150px;
        left: 120px;
        cursor: pointer;
    }
</style>