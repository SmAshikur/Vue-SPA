<template>
    <div class="container py-2">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-header">
                        <H3>Login Please</H3>
                    </div>
                    <div class="card-body">
                        <form method="post" @submit.prevent="login()">
                            <div class="form-group">
                                <label>Email</label>
                                <input type="text" class="form-control" placeholder="email"
                                  >

                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="password" placeholder="Enter your password" class="form-control"
                                 >

                            </div>
                            <div class="d-flex justify-content-center">
                                 <button type="submit" class="btn btn-success"> Log in </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Spa2Login',

    data() {
        return {

        }
    },

    methods: {
        login(){
         axios.get('/sanctum/csrf-cookie').then(response => {
             console.log('hello');
             console.log(response);
              axios.post('/api/login',{
                  email : 'admin@gmail.com',
                   password:'123demo',
               }).then(response =>{
                 console.log(response)
                //  this.getUserData();
              })
        });
        },
      //  getUserData(){
          //  axios.get('/api/user').then(response =>{
            //    console.log(response.data);

           // })
       // }
    },
   // mounted() {
      //  this.getUserData();
   // },

};
</script>

<style lang="scss" scoped>

</style>
