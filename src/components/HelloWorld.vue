<template>
    <div class='hello'>
        <div class='asd' v-for='item in test'>
            <el-table :data='item'
                      style='width: 100%'>
                <el-table-column prop='audNum'
                                 label='Номер Ауд'>
                </el-table-column>
                <el-table-column prop='disciplName'
                                 label='Предмет'>
                </el-table-column>
                <el-table-column prop='dayTime'
                                 label='Время'>
                </el-table-column>
                <el-table-column prop='prepodName'
                                 label='Преподователь'>
                </el-table-column>
            </el-table>
            <br>
        </div>
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
    import * as types from '../store/mutation-types';

    Vue.use(ElementUI);

    @Component
    export default class HelloWorld extends Vue {
        @Prop() private msg!: string;
        private created() {
            this.$store.dispatch(types.USER_REQUEST);
        }

        get test(): any[] {
            return this.$store.getters.getShed;
        }
        
    }
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>

    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
