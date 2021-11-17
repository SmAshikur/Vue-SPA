 <template>
     <div>
          <div class="container py-5">
        <h2>Our Products</h2>
        <div class="row"  >
            <div class="col-3 mb-3" v-for="product in pro.data" :key="product.id">
                <div class="card">
                    <h1>{{product.id}}</h1>
                    <img :src="product.image" class="card-img-top" style="height: 150px; object-fit: cover; overflow: hidden" alt="...">
                    <div class="card-body">
                        <div class="mb-2 d-flex justify-content-between">
                            <label class="badge badge-danger mb-3"> {{product.category.name}} </label>
                            <h4>${{ product.price }}</h4>
                        </div>
                        <h5 class="card-title">
                            {{ product.title }}
                        </h5>
                        <router-link :to="{ name: 'proDetails', params: {slug: product.slug }}" class="btn btn-primary">View Product</router-link>
                    </div>
                </div>
            </div>
        </div>


        <div class="text-center mt-5" v-if="apiCallLoaded">
            <button class="btn btn-primary" :disabled="!next_page_url" @click.prevent="loadMoreProducts(next_page_url)">Load Next Products</button>
        </div>
        </div>

 <div class="card-footer d-flex justify-content-center align-items-center my-5 py-2">
                        <pagination :data="pro" @pagination-change-page="getCat"></pagination>
                    </div>
        </div>

 </template>

 <script>

 export default {


     data() {
         return {
           pro:[],
           next_page_url:null,
 apiCallLoaded: false,
         };
     },

     mounted() {
         this.getCat();
     },

     methods: {
            getCat(page){
                    axios.get('/api/products?page='+(page)).then(response =>{
                        this.pro=response.data;
                        this.next_page_url=response.data.next_page_url;
                        this.apiCallLoaded = true;
                    })
                },
         loadMoreProducts(url){
                    axios.get(url).then(response =>{
                      //  console.log(response.data)
                        this.pro=response.data;
                        this.next_page_url=response.data.next_page_url;

                    })
                },
     },
 };
 </script>

 <style lang="scss" scoped>

 </style>
