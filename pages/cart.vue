<template>
  <div class="container">
    <div class="list-title">cart</div>
    <CartList></CartList>

    <div class="extra-panel">
        <button>구매</button>
    </div>
  </div>
</template>

<script>
// import {FETCH_CART_ITEMS} from '@/store/index'
import CartList from '@/components/CartList.vue';
export default {
    components: {
        CartList
    }
    // async asyncData({ store }) {
    //     await store.dispatch(FETCH_CART_ITEMS)
    // }
}
</script>

<style scoped>
.container {
    margin: 2rem 10rem;
}
.list-title {
    font-weight: 700;
    font-size: 1.4rem;
}
.extra-panel {
    text-align: right;
    padding: 0.2rem 0;
}
</style>