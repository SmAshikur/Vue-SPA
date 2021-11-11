<template>
    <div class="container-fluid mb-3">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <router-link class="navbar-brand" :to="{name:'home'}" >Navbar</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" :to="{name:'home'}">Home </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'catIn'}">Category </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'proIn'}">Product </router-link>
                    </li>
                     <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'login'}">Log In </router-link>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link" @click.prevent="logout()">Log out </a>
                    </li>
                </ul>

            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        methods: {
            logout(){
                axios.post('/logout').then(response =>{
                    this.$router.push({name: 'login'});
                     this.$toast.success({
                        title:'Success!',
                       message:'Log out successfully.'
                    })
                })
            }
        },
    }
</script>

<style scoped>

</style>
