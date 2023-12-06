const initialState = {
    list_jobs:[]
};

const users = ((state = initialState, action) => {
    let { type, data } = action;
    // console.log(type,data);
    switch (type) {
        case "SET_JOBS":
            return { ...state, list_jobs: data};
        default: 
            return state;
    }
})

export default users;