<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h4 class="mb-0 ml-3">Product Categories</h4>
                        <router-link :to="{name:'catCreate'}" class="btn btn-primary mr-3"> Product Create</router-link>
                    </div>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th style="width:100px">Id</th>
                                    <th>Product Name</th>
                                    <th>Product Slug</th>
                                    <th style="width:200px">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr v-for=" category in cats" :key="category.id">
                                    <td style="width:100px">{{category.id}}</td>
                                    <td>{{category.name}}</td>
                                    <td>{{category.slug}}</td>
                                <td style="width:200px">
                                  <router-link :to="{name: 'catEdit', params: {id: category.id}}" class="btn btn-primary btn-sm">Edit</router-link>
                                    <a  @click.prevent="deleteCategory(category)" class="btn btn-danger" > Delete </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>import axios from "axios"

    export default {
        data(){
                return{
                    cats:[]
                }
        },
        methods:{
                getCat(){
                    axios.get('/api/category').then(response =>{
                        this.cats=response.data;
                    })
                },
                 deleteCategory(category){
                axios.delete(`/api/category/${category.id}`).then(() => {
                this.$toast.success({
                    title:'Success!',
                    message:'Category deleted successfully.'
                });
            });
                 let index = this.cats.indexOf(category);
                this.cats.splice(index, 1);
            }
        },
        mounted() {
            this.getCat()
        },
    }
</script>

<style scoped>

</style>
