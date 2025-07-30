import{ useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";


function Clock(){
    const [time,setTime]=useState(new Date());
    useEffect(()=>{
        const timer=setInterval(() => {
            setTime(new Date());
        },1000);
        return ()=> clearInterval(timer)
    },[])
    return(
        <>
        <Header />
        <div style={{textAlign: "center", marginTop: "50px", fontSize: "24px"
, fontFamily: "Arial, sans-serif", padding: "40px"}}>
            <h1>{time.toLocaleString()}</h1>
        </div>
        <Footer />
        </>
    )
}
export default Clock;