<template>
    <div id="page-produits">
        <div class="menu-filtrant">
            <fieldset>
            <legend>Selectionnez les produits à afficher : </legend>
                <span><input type="checkbox" id="baumes" name="baumes"><label for="baumes">Baumes</label></span>
                <span><input type="checkbox" id="huiles" name="huiles"><label for="huiles">Huiles</label></span>
                <span><input type="checkbox" id="accesoires" name="accesoires"><label for="accesoires">Accesoires</label></span>
                <span><input type="checkbox" id="coffret" name="coffret"><label for="coffret">Coffret</label></span>
            </fieldset>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
fieldset {
    display: flex;
    flex-direction: column;
    padding: 25px;
    width: 15%;
 }

</style>