import{ useState, useEffect } from "react";
function Clock(){
    const [time,setTime]=useState(new Date());
    useEffect(()=>{
        const timer=setInterval(() => {
            setTime(new Date());
        },1000);
        return ()=> clearInterval(timer)
    },[])
    return(
        <div>
            <h1>{time.toLocaleString()}</h1>
        </div>
    )
}
export default Clock;