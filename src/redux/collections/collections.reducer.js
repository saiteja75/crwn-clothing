import SHOP_DATA from "./collections.data";

const INITIAL_STATE = {
    collections:SHOP_DATA
}

const collectionReducer = (currentState=INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return currentState;
    }
}

export default collectionReducer;