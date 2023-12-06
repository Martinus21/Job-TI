import React from "react";

// stores
import { 
    useDispatch, useSelector
} from "react-redux";
import {SET_LOADING,SET_AUTH} from "../stores/users/functions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// stores

function Login(){
    let history=useHistory();
    
    let dispatch=useDispatch();
    let [logins,set_logins]=React.useState({
        'username':"",
        'password':""
    });

    const LoginApp=(e)=>{
        e.preventDefault();
        dispatch(SET_AUTH({isAuthenticated:true}));
        history.push("/pages/jobs")
    }
    
    return (
        <div>
            <form>
                <input type="text" onChange={(e)=>{set_logins({...logins,username:e.target.value})}} />
                <input type="password" onChange={(e)=>{set_logins({...logins,password:e.target.value})}} />
                <button type="button" onClick={LoginApp}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;