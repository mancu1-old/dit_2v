import { ActionContextBasic } from '../index';
import * as types from '../mutation-types';
import Axios from 'axios';

export interface State {
    data: any[];
    status: string;
}

const initState: State = {
    data: [],
    status: '',
};

const getters = {
    getData: (state: State) => state.data,
};
const actions = {
    [types.ADD_TO_CART]: (contex: ActionContextBasic, str: string) => {
        new Promise(function (resolve, reject) {
            contex.commit(types.ADMIN_STATUS_CHANGE_LOADING);
            Axios.get('https://kai.ru/raspisanie?p_p_id=pubStudentSchedule_WAR_publicStudentSchedule10'
                + '&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=getGroupsURL'
                + `&p_p_cacheability=cacheLevelPage&p_p_col_id=column-1&p_p_col_count=1&query=${str}`)
                .then(res => {
                    contex.commit(types.ADMIN_STATUS_CHANGE_REQUEST, res.data);
                    contex.commit(types.ADMIN_STATUS_CHANGE_SUCCESS);
                    resolve();
                })
                .catch(err => {
                    contex.commit(types.ADMIN_STATUS_CHANGE_ERROR);
                    contex.commit(types.ERROR_NEW, err);
                    reject();
                })
        })
    }
};

const mutations = {
    [types.ADMIN_STATUS_CHANGE_LOADING]: (state: State) => {
        state.status = 'loading'
    },
    [types.ADMIN_STATUS_CHANGE_SUCCESS]: (state: State) => {
        state.status = 'set'
    },
    [types.ADMIN_STATUS_CHANGE_ERROR]: (state: State) => {
        state.status = 'error'
    },
    [types.ADMIN_STATUS_CHANGE_REQUEST]: (state: State, res: any[]) => {
        state.data = res.map(item => ({...item, value: item.group}))
    }
};

export default {
    actions,
    getters,
    mutations,
    state: initState,
};
