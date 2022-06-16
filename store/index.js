import { fetchCartItems } from "~/api";

export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';

export const state = () => ({
    cartItems: []
});

export const mutations = {
    addCartItem(state, cartItem) {
            cartItem.imageUrl = `${ cartItem.imageUrl }?random=${ Math.random() }`;
            state.cartItems.push(cartItem);
    },
    setCartItems(state, cartItems) {
        state.cartItems = cartItems.map(item => ({
                ...item,
                imageUrl: `${ item.imageUrl }?random=${ Math.random() }`
            }))
    } 
}

export const actions = {
    async [FETCH_CART_ITEMS]({commit}) {
        const {data} = await fetchCartItems();
        commit('setCartItems', data);
    },
    // async nuxtServerInit(storeContext, nuxtContext) {
    //     const {data} = await fetchCartItems();
    //     storeContext.commit('setCartItems', data);
    // }
}
