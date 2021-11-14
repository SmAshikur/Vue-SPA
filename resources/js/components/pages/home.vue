 <template>
     <div>
          <div class="container py-5">
        <h2>Our Products</h2>
        <div class="row"  >
            <div class="col-3 mb-3" v-for="product in pro" :key="product.id">
                <div class="card">
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

    </div>
 
     </div>
 </template>

 <script>

 export default {


     data() {
         return {
           pro:[]
         };
     },

     mounted() {
         this.getCat();
     },

     methods: {
            getCat(){
                    axios.get('/api/products').then(response =>{
                        this.pro=response.data;
                    })
                },
     },
 };
 </script>

 <style lang="scss" scoped>

 </style>
