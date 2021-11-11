<template>
 <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h4 class="mb-0 ml-3">Product create</h4>

                    </div>

                           <div class="card-body">
                        <div class="row">
                            <div class="col-6 offset-3">
                                <form @submit.prevent="createCategory">
                                    <div class="form-group">
                                        <label for="">Login Email</label>
                                        <input type="text" v-model="categoryForm.email" class="form-control"
                                         placeholder="login email"
                                        :class="{ 'is-invalid': categoryForm.errors.has('email') }">
                                        <has-error :form="categoryForm" field="email"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Login password</label>
                                        <input type="text" v-model="categoryForm.password" class="form-control"
                                          placeholder="login password"
                                        :class="{ 'is-invalid': categoryForm.errors.has('password') }">
                                        <has-error :form="categoryForm" field="password"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-success">Log in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Form } from 'vform'
import dashboardVue from '../../dashboard/dashboard.vue';
import axios from 'axios';
    export default {
        data(){
            return {
                categoryForm: new Form({
                    email: 'admin@gmail.com',
                    password: '123demo',
                }),
            }
        },
        methods: {
            createCategory(){
                axios.get('/sanctum/csrf-cookie').then(response => {
                    this.categoryForm.post('/login').then(response =>{
                        this.$router.push({name: 'dashboard'});
                         this.$toast.success({
                        title:'Success!',
                       message:'Log in successfully.'
                    })
                    })
                });
            },
            getdata(){
                axios.get('/api/user').then(response =>{
                    console.log(response.data)
                })
            }

        },
        mounted() {
            this.getdata();
        },
    }
</script>


<style>

</style>
