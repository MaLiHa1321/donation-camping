
import { useLoaderData, useParams } from "react-router-dom";



const Categorie = () => {
  
    const {id} = useParams();
    const item = useLoaderData();
    const idInt = parseInt(id);

    const items = item.find(items => items.id === idInt );
    const {picture,title,description,price,text_button_bg} = items;


 


    return (
        <div>
            <img src={picture} alt="" className="w-full" />
            <div className="mb-[-40px] bg-black opacity-50 p-4">
               <button className="text-black p-4 rounded-lg flex justify-start" style={{backgroundColor:text_button_bg}}>Donate {price}tk</button>
            </div>
            <h2 className="text-3xl font-bold mt-9">{title}</h2>
            <p>{description}</p>
         
            
        </div>
    );
};

export default Categorie;