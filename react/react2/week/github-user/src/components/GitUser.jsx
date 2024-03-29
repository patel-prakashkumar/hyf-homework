import UserContext from "./Context";
import React, { useContext } from "react";

export default function UserDetails() {
    const {
        isLoading,
        error,
        usersResult
    }  = useContext(UserContext);

    return (
        <>
        <div className="form-list">
          <h2>GitHub Users List</h2>
            {isLoading && <p>loading....</p>}
            {error && <div><h2>Search is Failed : Error</h2><p>{error}</p></div>}
            { usersResult.length === 0 && !error ? 
                <h4>No results.</h4> : 
                <ul>
                    {usersResult.map((user => {
                        return(
                            <li key={user.id}>
                                {user.login}
                            </li>
                        )
                    }))}
                </ul>
            }
            </div>  
        </>
    )
}