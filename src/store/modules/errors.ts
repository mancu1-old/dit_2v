import { ActionContextBasic } from '../index';
import * as types from '../mutation-types';

export interface State {
    error: string;
    message: string;
}

const initState: State = {
    error: '',
    message: '',
};

const getters = {
    getError: (state: State) => state.error,
    getMessage: (state: State) => state.message,
};
const actions = {
};

const mutations = {
    [types.ERROR_NEW]: (state: State, error: any) => {
        state.error = error;
    },
    [types.MESSAGE_NEW]: (state: State, message: any) => {
        state.message = message;
    },
};

export default {
    actions,
    getters,
    mutations,
    state: initState,
};
