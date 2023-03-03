<template>
    <form id="form-connexion" action="">
        <h2 class="form-titre">Connexion</h2>
        <div class="separation"></div>
        <div class="body-form">
            <div class="input-container">
                <label class="label-connexion" for="input-email">E-mail : </label>
                    <div class="input-icon">
                        <input id="input-email" class="input" type="email" placeholder="Entrez votre adresse mail...">
                        <i class="fa-solid fa-user"></i>                    
                    </div>
            </div>
            <div class="input-container">
                <label class="label-connexion" for="input-password">Mot de passe : </label>
                    <div class="input-icon">
                        <input type="password" id="input-password" class="input" placeholder="Entre votre mot de passe...">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
            </div>
            <input id="btn-connexion" type="submit" value="Connexion">
        </div>                    
    </form>
</template>

<script>
export default {

}
</script>

<style scoped>
    #form-connexion {
        padding: 30px;
        width: 35%;
        background-color: #314f7700;
        border-radius: 30px;
        box-shadow: 0 10px 30px;
    }
    .form-titre {
        font-size: 1.6em;
    }
    .separation {
        height: 1px;
        background-color: #B4464D;
        margin: auto;
        margin-top: 5px;
    }
    .body-form {
        display: flex;
        flex-direction: column;
        margin: auto;
    }
    .input-container {
        display: flex;
        margin-top: 20px;
        flex-direction: column;
    }
    .input {
        padding: 10px 5px 10px 50px;
        border: 1px solid rgb(158, 158, 158);
        outline-color: #314f77;
        border-radius: 10px;
    }
    .input-icon {
        position: relative  ;
    }
    i {
        position: absolute;
        left: 0px;
        top: 0px;
        transform: translateY(100%) translateX(100%);
        color: #314f77;
    }
    #btn-connexion {
        margin: 20px 0 auto auto;
        padding: 5px 20px;
        border-radius: 10px;
        border: none;
        background-color: #314f7756;
        box-shadow: 2px 2px 5px;
        font-size: 1.1em;
        cursor: pointer;
    }
</style>