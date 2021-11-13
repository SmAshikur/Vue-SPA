<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="card">
            <div class="card-header">
                <h2>
                    This is Dashboard
                </h2>
            </div>
            <div class="card-body">
            <h5>
                welcome {{user.name}}
            </h5>
            </div>
        </div>
            </div>
            <div class="col-md-4">
                <div class="list-group">
                    <router-link :to="{name:'profile'}" class="list-group-item list-group-item-action" >Edit Profile </router-link>
                    <router-link :to="{name:'dashboard'}" class="list-group-item list-group-item-action" >Profile </router-link>
                    <a   class="list-group-item list-group-item-action" @click.prevent="logout()">Log out </a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Spa2Dashboard',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
 logout(){
                axios.post('/logout').then(response =>{
                   // this.$router.push({name: 'login'});
                     this.$toast.success({
                        title:'Success!',
                       message:'Log out successfully.'
                    });
                     localStorage.removeItem("auth");
                this.$store.commit('SET_AUTHENTICATED', false);
                this.$router.push({ name: 'login' });
                })
            }
    },
    computed:{
         user() {
            return this.$store.getters.getUser;
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
