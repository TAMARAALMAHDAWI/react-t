import { useStatet , createContext} from "react";
import  ComponentB  from  "./componentB";

export const createContext = createContext();

function componentA() {
    const [user,setUser] = useStatet("spongeBob");

    return(
        <div className="box">
            <h1>componentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <createContext.provider value={{user}}>
                <componentB user={user} />
            </createContext.provider>
        </div>
    );
}

export default componentA;