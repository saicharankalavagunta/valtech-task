import { SET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../ActionCreators";
const initialState = {
    items: [],
};

const Reducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case SET_ITEMS: {
            return { ...state, items: action.payload };
        }
        case ADD_ITEM: {
            return { ...state, items: state.items.concat(action.payload) };

        }
        case DELETE_ITEM: {
            return {
                items: state.items.filter((item, index) => index !== action.payload)
            }
        }
        default:
            return state;
    }
};

export default Reducer;
