<template>
    <div class="dashboard-container">
        <h1>Customer Dashboard Page</h1>
        <pre>{{content}}</pre>
    </div>
</template>

<script>

export default {
    data() {
        return {
            content: ""
        };
    },
    mounted() {
        this.axios.get('/fba/FBAindex').then(
            body => {
                this.content = body.data;
            }
        );
    }
}
</script>

<style lang="scss" scoped>
// .dashboard {
//   &-container {
//     margin: 30px;
//   }
//   &-text {
//     font-size: 30px;
//     line-height: 46px;
//   }
// }
</style>
