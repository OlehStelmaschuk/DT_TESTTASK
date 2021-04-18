import * as TYPE from '../constants/postConstants';
import { AppThunk } from '../hooks';
import axios from 'axios';
import { IPostCreate } from '../../interfaces/IPost';

const _baseURL = 'https://simple-blog-api.crew.red';

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export const getAllPosts = (): AppThunk => async (dispatch) => {
    try {
        dispatch({ type: TYPE.LOADING_DATA });
        const { data } = await axios.get(`${_baseURL}/posts`);
        dispatch({
            type: TYPE.GET_ALL_POSTS,
            payload: data,
        });
    } catch (err) {}
};

export const getSinglePost = (id: string): AppThunk => async (dispatch) => {
    try {
        dispatch({ type: TYPE.LOADING_DATA });
        dispatch({ type: TYPE.CLEAR_POST });
        const { data } = await axios.get(`${_baseURL}/posts/${id}?_embed=comments`);
        dispatch({
            type: TYPE.GET_POST,
            payload: data,
        });
    } catch (err) {}
};

export const deletePost = (id: string): AppThunk => async (dispatch) => {
    try {
        await axios.delete(`${_baseURL}/posts/${id}`);
        dispatch({
            type: TYPE.DELETE_POST,
            payload: id,
        });
    } catch (err) {}
};

export const createPost = (postData: IPostCreate): AppThunk => async (dispatch) => {
    try {
        await axios.post(`${_baseURL}/posts`, postData, config);
        const { data } = await axios.get(`${_baseURL}/posts`);
        dispatch({
            type: TYPE.GET_ALL_POSTS,
            payload: data,
        });
    } catch (err) {}
};
