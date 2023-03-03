<template lang="">
    <div class="container create-account-form-template">
        <form action="">
            <fieldset>
                <legend>Creer un compte</legend>
                <div class="row form-group mb-2">
                    <div class="col">
                        <label for="email">Email</label>
                        <input v-model="email" class="form-control" id="email" type="email" placeholder="votreadresse@messagerie.fr">
                        <small v-if="v$.email.required.$invalid" class="text-danger">{{ v$.email.required.$message }}</small>
                        <small v-if="v$.email.email.$invalid" class="text-danger">{{ v$.email.email.$message }}</small>
                    </div>
                    <div class="col">
                        <label for="password">Mot de passe</label>
                        <input v-model="password" class="form-control" id="password" type="password">
                        <small v-if="v$.password.required.$invalid" class="text-danger">{{ v$.password.required.$message }}</small>
                        <small :class="v$.password.$invalid ? invalid : valid"> 
                            <div v-if="v$.password.$invalid" class="valid-password-instructions">
                                <p class="m-0 text-danger">Le mot de passe doit contenir au moins :</p>
                               <ul>
                                   <li :class="[ v$.password.majuscule.$invalid ? invalid : valid]" >{{v$.password.majuscule.$message}}</li>
                                   <li :class="[ v$.password.minLength.$invalid ? invalid : valid]" >{{v$.password.minLength.$message}}</li>
                                   <li :class="[ v$.password.special.$invalid ? invalid : valid]" >{{v$.password.special.$message}}</li>
                                </ul>   
                            </div>
                        </small>
                    </div>
                    <div class="col">
                        <label for="confirmed-password">Confirmez le mot de passe</label>
                        <input v-model="confirmedPassword" class="form-control" id="confirmed-password" type="password">
                        <small v-if="v$.confirmedPassword.sameAsPassword.$invalid" class="text-danger">Les mots de passe doivent être identiques </small>
                    </div>
                </div>
                <div class="row form-group mb-5">
                    <div class="col">   
                        <label for="firstName">Prénom</label>
                        <input v-model="firstName" class="form-control" id="firstName" type="name">
                        <small v-if="v$.firstName.required.$invalid" class="text-danger">{{ v$.firstName.required.$message }}</small>
                        <small v-if="v$.firstName.alpha.$invalid" class="text-danger">{{ v$.firstName.alpha.$message }}</small>
                        <small v-if="v$.firstName.minLength.$invalid" class="text-danger">{{ v$.firstName.minLength.$message }}</small>

                    </div>
                    <div class="col">
                        <label for="lastName">Nom</label>
                        <input v-model="lastName" class="form-control" id="lastName" type="name">
                        <small v-if="v$.lastName.required.$invalid" class="text-danger">{{ v$.lastName.required.$message }}</small>
                        <small v-if="v$.lastName.alpha.$invalid" class="text-danger">{{ v$.lastName.alpha.$message }}</small>
                        <small v-if="v$.lastName.minLength.$invalid" class="text-danger">{{ v$.lastName.minLength.$message }}</small>
                    </div>
                    <div class="col">
                        <label for="birthday">Votre date de naissance :</label>
                        <input class="form-control" type="date">
                    </div>
                </div>
                <div class="row form-group mb-5">
                    <div class="col-1">
                        <label for="adressNum">N°</label>
                        <input v-model="adressNum" class="form-control" id="adressNum" type="number" placeholder="2">
                    </div>
                    <div class="col-6">
                        <label for="adress">Adresse</label>
                        <input v-model="adress" class="form-control" id="adress" type="text" placeholder="rue du 18 mai 1945">
                    </div>
                    <div class="col-3">
                        <label for="city">Ville</label>
                        <input v-model="city" id="city" class="form-control" type="text" placeholder="Paris">
                    </div>
                    <div class="col-2">
                        <label for="cp">CP</label>
                        <input v-model="cp" id="cp" class="form-control" type="text" placeholder="75000">
                    </div>
                </div>
                <input @click.prevent="submitForm()" class="btn btn-outline-dark" type="submit" value="Creer un compte">
            </fieldset>
        </form>
    </div>
</template>
<script>

import { useVuelidate } from '@vuelidate/core'
import { helpers, required, email, minLength, sameAs, alpha, numeric } from '@vuelidate/validators'

const majuscule = helpers.regex(/[A-Z]{1,}/)
const special = helpers.regex(/[!?*$;]{1,}/)


export default {
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            email: "",
            password: "",
            confirmedPassword: "",  
            firstName: "",
            lastName: "",
            adressNum: "",
            adress: "",
            city: "",
            cp: "",
            valid: 'text-success',
            invalid: 'text-danger',
        }
    },
    validations() {
        return {
            email: { 
                required: helpers.withMessage("Champ obligatoire", required),
                 email: helpers.withMessage("Entrez une adresse email valide", email)
                },
            password: {
                required: helpers.withMessage("Champ obligatoire", required),
                majuscule: helpers.withMessage("Une majuscule", majuscule),
                minLength : helpers.withMessage("8 caractères", minLength(8)),
                special: helpers.withMessage("Un caractère spécial (!?*$;)", special)
                },
            confirmedPassword: {
                 required: helpers.withMessage("Champ obligatoire", required),
                 sameAsPassword : sameAs(this.password)
                },  
            firstName: {
                required: helpers.withMessage("Champ obligatoire", required),
                alpha: helpers.withMessage("N'est pas un prénom valide", alpha),
                minLength: helpers.withMessage("Vous devez entrer au moins 3 caractères", minLength(3))
                },
            lastName: {
                required: helpers.withMessage("Champ obligatoire", required),
                alpha: helpers.withMessage("N'est pas un prénom valide", alpha),
                minLength: helpers.withMessage("Vous devez entrer au moins 3 caractères", minLength(3))
                },
            adressNum: {
                 required,
                 numeric: numeric,
                },
            adress: {
                 required 
                },
            city: {
                 required 
                },
            cp: {
                 required,
                 numeric: numeric,      
                }
        }
    },
    methods: {
        submitForm() {
            console.log("formulaire valider !", this.v$)
        }
    },
    computed: {
        showError() {
            return this.v$.$validate
        }
    }
    
}
</script>

<style scoped>
    .create-account-form-template {
        margin-top: 100px;
    }
</style>