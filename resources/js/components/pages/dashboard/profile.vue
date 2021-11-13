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
            <h5 class="mb-5">
                welcome {{profileForm.name}}
            </h5>
            <div class="row">
                <div class="col-8 offset-2">
                    <form action="" method="" @submit.prevent="update">
                        <div class="form-group">
                                        <label for="">Your Name</label>
                                        <input type="text" class="form-control" placeholder="Your name" v-model="profileForm.name" :class="{ 'is-invalid': profileForm.errors.has('name') }">
                                        <has-error :form="profileForm" field="name"></has-error>
                                    </div>
                         <div class="form-group">
                                        <label for="">Your email</label>
                                        <input type="text" class="form-control" placeholder="Your email" v-model="profileForm.email" :class="{ 'is-invalid': profileForm.errors.has('email') }">
                                        <has-error :form="profileForm" field="email"></has-error>
                                    </div>
                         <div class="form-group">
                                        <label for="">Your Password</label>
                                        <input type="password" class="form-control" placeholder="Your password" v-model="profileForm.password" :class="{ 'is-invalid': profileForm.errors.has('password') }">
                                        <has-error :form="profileForm" field="password"></has-error>
                                    </div>
                         <div class="form-group">
                                        <label for="">Confirm Password</label>
                                        <input type="password" class="form-control" placeholder="Confirm password" v-model="profileForm.password_confirmation" :class="{ 'is-invalid': profileForm.errors.has('password_confirmation') }">
                                        <has-error :form="profileForm" field="password_confirmation"></has-error>
                                    </div>
                        <div class="form-group d-flex justify-content-center">
                          <button class="btn btn-success"> save  </button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
            </div>

             <div class="col-md-4">
                <div class="list-group">
                    <router-link :to="{name:'profile'}" class="list-group-item list-group-item-action" >Edit Profile </router-link>
                    <router-link :to="{name:'dashboard'}" class="list-group-item list-group-item-action" >Profile </router-link>
                    <router-link :to="{name:'profile'}" class="list-group-item list-group-item-action" @click.prevent="logout()">Log out </router-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Form from 'vform';
export default {
    name: 'Spa2Dashboard',

    data() {
        return {
            profileForm : new Form({
                name: '',
                email:'',
                password:'',
                password_confirmation: '',
            })
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
                        },
                            user() {
                                let user =  this.$store.getters.getUser;
                                this.profileForm.name=user.name;
                                this.profileForm.email=user.email;
                             },
                             update(){
                                 this.profileForm.post('/api/user').then(response =>{
                                        this.$store.commit('SET_USER', response.data);
                                        // toast success notification
                                        this.$toast.success({
                                            title:'Success!',
                                            message:'Profile updated successfully.'
                                        });
                                 })
                             }

                },
                created(){
                                 this.user();
                             },

                    computed:{

                    }
};
</script>

<style lang="scss" scoped>

</style>
