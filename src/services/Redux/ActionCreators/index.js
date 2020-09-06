import axios from 'axios';

export const SET_ITEMS = "SET_USER_LOGGED_IN";
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

const setItems = items => ({ type: SET_ITEMS, payload: items });

export const addItem = itemDetails => ({ type: ADD_ITEM, payload: itemDetails });

export const deleteItem = index => ({ type: DELETE_ITEM, payload: index });


const apiUrl = ' http://localhost:3000/items';

export const fetchData = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch(setItems(data))
            })
            .catch(error => {
                throw (error);
            });
    };
};