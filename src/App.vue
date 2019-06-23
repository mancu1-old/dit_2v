<template>
    <div id="app">
        <span>
            Расписание Каи
        </span>
        <el-autocomplete v-model="state"
                         :fetch-suggestions="querySearchAsync"
                         placeholder="Please input" 
                         @select="handleSelect"></el-autocomplete>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div>
</template>

<script lang='ts'>
    import {
        Component,
        Prop,
        Vue,
    } from 'vue-property-decorator';
    import axios from 'axios';
    import ElementUI from 'element-ui';
    import * as types from './store/mutation-types';

    Vue.use(ElementUI);

    @Component
    export default class App extends Vue {
        private state: any = '';

        private querySearchAsync(queryString: string, cb: any) {
            this.$store.dispatch(types.ADD_TO_CART, queryString).then(() => {
                let temp: any[] = this.$store.getters.getData;
                let temp2 = temp.filter(this.createFilter(queryString));
                //console.log('start \n --------------------------- ');
                //console.log('temp');
                //console.log(temp);
                //console.log('temp2');
                //console.log(temp2);
                //console.log('--------------------------- \n end');
                cb(temp2);
            })
        }

        private createFilter(queryString: string) {
            return (link: any) => {
                return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        }
        private handleSelect(item: any) {
            this.$store.commit(types.USER_LOADING, item);
            console.log("here");
            this.$store.dispatch(types.USER_REQUEST)
                .then(() => { console.log("here"); })
                .finally(() => { console.log('fin') })
                ;
        }

    }
</script>

<style lang="scss">

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        a

    {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active

    {
        color: #42b983;
    }

    }
    }
</style>
