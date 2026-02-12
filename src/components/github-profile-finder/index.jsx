
import { useEffect, useState } from "react";
import User from "./User";
import "./styles.css"
export default function GithubProfileFinder() {

    const [userName, setUserName] = useState("mohit1");
    const [user, setUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(false);
    const [error,setError]=useState("");


    function handleUserName(e) {
        setUserName(e.target.value);
       
    }
    async function fetchUser(name,signal) {
        try {
            setLoadingUser(true);
            setError("")
            const response = await fetch(`https://api.github.com/users/${name}`,
                {signal}
            );
            if(!response.ok){
                if(response.status===404)
                 throw new Error("user not found")
                if(response.status===403){
                    throw new Error("API rate limit exceeded")
                }
                throw new Error("something went wrong")
            }
            const data = await response.json();
            setUser(data);
            console.log(data)
            // console.log(user)s
        }
        catch (err) {
            if(err.name==="AbortError") return;
            setError(err.message);
            setUser(null);
        }
        finally {
            setLoadingUser(false);

        }
    }
    
    function handleSeachUser(){
        fetchUser()
    }
    useEffect(() => {
        
        if(!userName) return;
        const controller=new AbortController();

        const timer=setTimeout(() => {
            fetchUser(userName.trim(),controller.signal)
        }, 500);
        return ()=>clearTimeout(timer)
    }, [userName]);

    return <div className="gitub-profile">
        <div className="github-profile-wrapper">
            <div>
                <input
                    type="text"
                    placeholder="type here to search"
                    value={userName}
                    onChange={handleUserName}
                />
                <button onClick={handleSeachUser}>Search</button>
            </div>
            {loadingUser && <p>Loading...</p> }
            {error && <p className="error">{error}</p>}
            {!loadingUser && !error && user && <User user={user}></User>}
            

        </div>

    </div>
}