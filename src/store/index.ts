import Vue from 'vue';
import Vuex, { Commit, Dispatch } from 'vuex';
// import auth, { State as AuthState } from './modules/auth';
// import cashier, { State as CashierState } from './modules/cashier';
// import city, { State as CityState } from './modules/city';
import error, { State as ErrorState } from './modules/errors';
// import order, { State as OrderState } from './modules/order';
// import orderCreate, { State as OrderCreateState } from './modules/orderCreate';
// import menuProducts, { State as menuProductsState } from './modules/productsList';
import user, { State as UserState } from './modules/user';
// import admin, { State as AdminState } from './modules/admin';
import reqLoad, { State as ReqLoadState } from './modules/reqLoad';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        reqLoad,
        // admin,
        // auth,
        // cashier,
        // city,
        error,
        // menuProducts,
        // order,
        // orderCreate,
        user,
    },
});

export interface ActionContextBasic {
    state: any;      // same as store.state, or local state if in modules
    rootState: any;  // same as store.state, only in modules
    commit: Commit;     // same as store.commit
    dispatch: Dispatch;   // same as store.dispatch
    getters: any;    // same as store.getters, or local getters if in modules
    rootGetters: any; // same as store.getters, only in modules
}

export interface GState {
    reqLoad: ReqLoadState;
    // admin: AdminState;
    // menuProducts: menuProductsState;
    // city: CityState;
    // cashier: CashierState;
    user: UserState;
    // auth: AuthState;
    // order: OrderState;
    // orderCreate: OrderCreateState;
    error: ErrorState;
}
