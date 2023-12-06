const initialState = {
    list_exprience:[]
};

const users = ((state = initialState, action) => {
    let { type, data } = action;
    // console.log(type,data);
    switch (type) {
        case "SET_EXPRIENCE":
            return { ...state, list_exprience: data};
        default: 
            return state;
    }
})

export default users;