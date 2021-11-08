<template>
 <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h4 class="mb-0 ml-3">Product create</h4>
                        <router-link :to="{name:'proIn'}" class="btn btn-primary mr-3"> Product List</router-link>
                    </div>

                           <div class="card-body">
                        <div class="row">
                            <div class="col-6 offset-3">
                                <form @submit.prevent="createProduct">
                                    <div class="form-group">
                                        <label for="">Product Title</label>
                                        <input type="text" v-model="productForm.title" class="form-control" name="title" placeholder="product name"
                                         :class="{ 'is-invalid': productForm.errors.has('title') }">
                                        <has-error :form="productForm" field="title"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Product Price</label>
                                        <input type="number" v-model="productForm.price" class="form-control" name="price" placeholder="product price"
                                         :class="{ 'is-invalid': productForm.errors.has('price') }">
                                        <has-error :form="productForm" field="price"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <label for="">product Price</label>
                                        <input type="file"  class="form-control-file" name="image" placeholder="product image"
                                        :class="{ 'is-invalid': productForm.errors.has('image') }">
                                        <has-error :form="productForm" field="image"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <label for="">product name</label>
                                        <textarea type="text" v-model="productForm.description" class="form-control" name="desription" placeholder="product name"
                                         :class="{ 'is-invalid': productForm.errors.has('desription') }" rows="3"></textarea>
                                        <has-error :form="productForm" field="desription"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-success">Create product</button>
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
    export default {
        data(){
            return {
                productForm: new Form({
                    title: '',
                    price: '',
                    image: '',
                    description: '',
                }),
            }
        },
        methods: {
            createProduct(){
                this.productForm.post('/api/product').then(({ data }) => {
                   //console.log(data);
                    this.productForm.title = '';
                    this.productForm.description = '';
                    this.productForm.price = '';
                   this.$toast.success({
                       title:'Success!',
                      message:'product created successfully.'
                    })
                })
            }
        }
    }
</script>


<style>

</style>
