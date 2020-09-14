export const initialState = {
    basket:[],
}

const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        default:
            break;
    }
}

export default reducer