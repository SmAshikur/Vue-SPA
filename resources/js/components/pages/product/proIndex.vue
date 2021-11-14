<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h4 class="mb-0 ml-3">Product Categories</h4>
                        <router-link :to="{name:'proCreate'}" class="btn btn-primary mr-3"> Product Create</router-link>
                    </div>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th style="width:100px">Id</th>
                                    <th>Product Name</th>
                                    <th>category</th>
                                    <th>Product Name</th>
                                    <th>Product Slug</th>
                                    <th style="width:200px">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr v-for=" product in pro" :key="product.id">
                                    <td style="width:100px">{{product.id}}</td>
                                    <td>
                                        <div style="max-width: 150px; max-height: 150px">
                                            <img :src="product.image" class="img-fluid">
                                        </div>
                                    </td>
                                    <td>{{product.category.name}}</td>
                                    <td>{{product.title}}</td>
                                    <td>{{product.slug}}</td>
                                <td style="width:200px">
                                  <router-link :to="{name: 'proEdit', params: {id: product.id}}" class="btn btn-primary btn-sm">Edit</router-link>
                                    <a  @click.prevent="deleteProduct(product)" class="btn btn-danger" > Delete </a>
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
                    pro:[]
                }
        },
        methods:{
                getCat(){
                    axios.get('/api/product').then(response =>{
                        this.pro=response.data;
                    })
                },
                 async deleteProduct(product){
            await axios.delete(`/api/product/${product.id}`).then(() => {
                this.$toast.success({
                    title:'Success!',
                    message:'Product deleted successfully.'
                });
            });
            let index = this.pro.indexOf(product);
            this.pro.splice(index, 1);
        }

        },
        mounted() {
            this.getCat()
        },
    }
</script>

<style scoped>

</style>
