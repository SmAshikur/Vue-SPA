<template>
 <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h4 class="mb-0 ml-3">Product create</h4>

                    </div>

                          <div class="card-body">
                                <form action="" method="post" @submit.prevent="login()">
                                    <div class="form-group">
                                        <label for="">Email</label>
                                        <input type="text" v-model="loginForm.email" class="form-control" placeholder="email" :class="{ 'is-invalid': loginForm.errors.has('email') }">
                                        <has-error :form="loginForm" field="email"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Password</label>
                                        <input type="password" v-model="loginForm.password" class="form-control" placeholder="password" :class="{ 'is-invalid': loginForm.errors.has('password') }" >
                                        <has-error :form="loginForm" field="password"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" :disabled="loginForm.busy" class="btn btn-success px-4">Login</button>
                                    </div>
                                </form>
                            </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Form } from 'vform'
export default {
    data(){
        return {
            loginForm: new Form({
                email: '',
                password: '',
            }),
        }
    },
    methods: {
        async login(){
            await axios.get('/sanctum/csrf-cookie')
            await this.loginForm.post('/login')
            await this.getUserData();
            this.$toast.success({
                title:'Success!',
                message:'Welcome, Dear!'
            });

            this.$router.push({ name: 'dashboard' });
        },
        async getUserData(){
            await axios.get('/api/user').then(response => {
                let user = response.data;
                this.$store.commit('SET_USER', user);
                this.$store.commit('SET_AUTHENTICATED', true);
                localStorage.setItem("auth", true);
            });
        }
    },
    mounted(){

    }
}
</script>

<style>

</style>
