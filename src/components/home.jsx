import {auth , myauth} from "../config/firbase";

export const Home =()=>{
    return(
        <div>
            this is Home
            <p>{auth.currentUser?.displayName}</p>
            <p>{myauth.currentUser?.email}</p>
        </div>
    );
}





