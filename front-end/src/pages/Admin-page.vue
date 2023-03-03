<template >
    <div class="admin-template">
        <div class="row gx-5">
            <div class="col-2">
                <Menu />
            </div>
            <div class="col-10">
                <router-view />
            </div>
        </div>
    </div>
</template>


<script>
import Menu from '../components/admin/Menu-admin.vue'

export default {
    components: {
        Menu,
    }

}


</script>


<style scoped>

    .admin-template {
        width: 95%;
        margin: 80px auto;
    }

</style>