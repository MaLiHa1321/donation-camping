
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DisplayCard from "../DisplayCard/DisplayCard";



const Categorie = () => {
    const [doner, setDoner] = useState();
  
    const {id} = useParams();
    const item = useLoaderData();
    const idInt = parseInt(id);

  

    useEffect(()=>{
        const findDoner = item?.find(item => item.id === idInt)
       setDoner(findDoner)
    },[idInt,item])

 
    return (
        <div>
         
         <DisplayCard doner={doner}></DisplayCard>
         
            
        </div>
    );
};

export default Categorie;