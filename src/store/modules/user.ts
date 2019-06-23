import axios from 'axios';
import Vue from 'vue';
// import { BASERESTURL } from '../../environment';
import { ActionContextBasic } from '../index';
import * as types from '../mutation-types';

export interface State {
    status: string;
    shed: any;
    group: any;
}
const initState: State = {
    status: '',
    shed: null,
    group: { id: "18542", forma: "4toto" }
};
const getters = {
    getProfile: (state: State) => state.status,
    getShed: (state: State) => state.shed,
};

const actions = {
    [types.USER_REQUEST]: (context: ActionContextBasic) => {
        context.commit(types.USER_REQUEST);
        axios.post('https://kai.ru/raspisanie' +
            '?p_p_id=pubStudentSchedule_WAR_publicStudentSchedule10' +
            '&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=schedule' +
            '&p_p_cacheability=cacheLevelPage&p_p_col_id=column-1&p_p_col_count=1',
            `groupId=${context.state.group.id}&programForm=${context.state.group.forma}`, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                },
                withCredentials: false,
            })
            .then((res) => {
                context.commit(types.USER_SET, res.data);
            })
            .catch((error) => {
                context.commit(types.USER_SET, error);
            });
    },
};

const mutations = {
    [types.USER_LOADING]: (state: State, newGroup: any) => {
        state.group = newGroup;
    },
    [types.USER_REQUEST]: (state: State) => {
        state.status = 'loading';
    },
    [types.USER_SET]: (state: State, a: any) => {
        state.status = 'set';
        state.shed = a;
    },
};

export default {
    actions,
    getters,
    mutations,
    state: initState,
};
