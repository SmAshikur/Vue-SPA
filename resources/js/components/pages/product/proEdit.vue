<template>
 <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h4 class="mb-0 ml-3">Product create-{{productForm.title}}</h4>
                        <router-link :to="{name:'proIn'}" class="btn btn-primary mr-3"> Product List</router-link>
                    </div>

                           <div class="card-body">
                        <div class="row">
                            <div class="col-6 offset-3">
                                <form @submit.prevent="saveProduct">
                                    <div class="form-group">
                                        <label for="">Product Title</label>
                                        <input type="text" v-model="productForm.title" class="form-control" name="title" placeholder="product name"
                                         :class="{ 'is-invalid': productForm.errors.has('title') }">
                                        <has-error :form="productForm" field="title"></has-error>
                                    </div>
                                     <div class="form-group">
                                        <label for="">Select Product Category</label>
                                        <select name="category_id" class="form-control" v-model="productForm.category_id" :class="{ 'is-invalid': productForm.errors.has('category_id') }">
                                            <option style="display:none;" value="" selected>Select Category</option>
                                            <option :value="category.id" v-for="category in categories" :key="category.id"> {{
                                                category.name }}</option>
                                        </select>
                                        <has-error :form="productForm" field="category_id"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <label for="">Product Price</label>
                                        <input type="number" v-model="productForm.price" class="form-control" name="price" placeholder="product price"
                                         :class="{ 'is-invalid': productForm.errors.has('price') }">
                                        <has-error :form="productForm" field="price"></has-error>
                                    </div>
                                    <div class="form-group">
                                       <div class="row">
                                            <div class="col-8">
                                                    <label for="">product Image</label>
                                            <input type="file"  class="form-control-file" name="image" placeholder="product image"
                                            @change="onImageChange" :class="{ 'is-invalid': productForm.errors.has('image') }">
                                            <has-error :form="productForm" field="image"></has-error>
                                            </div>
                                            <div class="col-4">
                                                <div style="width: 100%; max-height: 150px; overflow:hidden">
                                                    <img :src="image" alt="" class="img-fluid">
                                                </div>
                                            </div>
                                       </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="">product name</label>
                                        <textarea type="text" v-model="productForm.description" class="form-control" name="description" placeholder="product name"
                                         :class="{ 'is-invalid': productForm.errors.has('description') }" rows="3"></textarea>
                                        <has-error :form="productForm" field="desrciption"></has-error>
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
    import { objectToFormData } from 'object-to-formdata'
    export default {
        data(){
            return {
               productForm: new Form({
                title: '',
                price: '',
                image: '',
                description: '',
                category_id:'',
                _method: 'put',
            }),
            image: '',
            categories:[]

            }
        },
        methods: {
            loadProduct(){
              let id = this.$route.params.id;

            axios.get(`/api/product/${id}/edit`).then(response => {
                let product = response.data;
                this.productForm.title = product.title;
                this.productForm.price = product.price;
                this.productForm.description = product.description;
                 this.productForm.category_id = product.category_id;
                this.image =product.image;
            });
            },

        saveProduct(){
            let id = this.$route.params.id;
            this.productForm.post('/api/product/'+id, {
                transformRequest: [function (data, headers) {
                    return objectToFormData(data)
                }],
                onUploadProgress: e => {
                    // Do whatever you want with the progress event
                    console.log(e)
                }
            }).then(({ data }) => {
                this.image = data.image;
               // console.log(data)
                this.$toast.success({
                    title:'Success!',
                    message:'Product saved successfully.'
                });
            })
        },
        onImageChange(e){
            const file = e.target.files[0]
            // Do some client side validation...
            this.productForm.image = file
        },
         loadCategories(){
            axios.get('/api/category').then(response => {
                this.categories = response.data;
            });
        }
        },
         mounted(){
            this.loadProduct();
             this.loadCategories();
        }
    }
</script>


<style>

</style>
