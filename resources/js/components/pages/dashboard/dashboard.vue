<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h2>
                    This is Dashboard
                </h2>
            </div>
            <div class="card-body">
            <h5>
                welcome {{user.name}}
            </h5>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Spa2Dashboard',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
    computed:{
         user() {
            return this.$store.getters.getUser;
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
