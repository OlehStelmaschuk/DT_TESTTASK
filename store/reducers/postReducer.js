import * as TYPE from '../constants/postConstants';
import * as R from 'ramda';

export const postReducer = (state = { loading: false, post: null, posts: [] }, { type, payload }) => {
    switch (type) {
        case TYPE.LOADING_DATA: {
            return {
                ...state,
                loading: true,
            };
        }
        case TYPE.DELETE_POST: {
            return {
                ...state,
                posts: R.reject((o) => o.id === payload, state.posts),
            };
        }
        case TYPE.CLEAR_POST: {
            return {
                ...state,
                post: null,
            };
        }
        case TYPE.CREATE_POST:
        case TYPE.GET_ALL_POSTS: {
            return {
                ...state,
                posts: R.reverse(payload),
                loading: false,
            };
        }
        case TYPE.GET_POST: {
            return {
                ...state,
                post: payload,
                loading: false,
            };
        }
        default:
            return state;
    }
};
