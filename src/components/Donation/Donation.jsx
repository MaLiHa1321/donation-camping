import { useEffect, useState } from "react";
import DonerDetails from "../DonerDetails/DonerDetails";



const Donation = () => {

    const [donar, setDoner] = useState([])
    const [noFound, SetFound] = useState(false)
    const [dataLength, setDatalength] = useState(4);

    useEffect(()=>{
        const donateItem = JSON.parse(localStorage.getItem('donate'))
        if(donateItem){
            setDoner(donateItem)
        }
        else{
          SetFound("No data found")
        }
       
    },[])

    console.log(donar)
  
    return (
       <div className="w-11/12 mx-auto">
        {
           noFound? <p>{noFound}</p>: <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                {
                    donar.slice(0,dataLength).map(doner => <DonerDetails key={donar.id} doner={doner}></DonerDetails>)
                }
            </div>

              {donar.length >= 5 && dataLength < donar.length && (
                <div>
                <button onClick={() => setDatalength(donar.length)}
                 className="btn btn-primary mt-5">Show all</button>
            </div>
              )}         
          

           </div> 
        }
       </div>
    );
};

export default Donation;