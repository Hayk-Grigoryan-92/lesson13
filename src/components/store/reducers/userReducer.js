
const initialState = {
    users: [],
    isVerify: false
}

export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_USER':
            return { ...state, users: [...state.users, action.payload] }

        case 'IS_VERIFY':
            return {...state, isVerify: action.payload}

        default:
            return state
    }
}