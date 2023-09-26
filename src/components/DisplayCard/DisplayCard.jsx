import toast, { Toaster } from 'react-hot-toast';

const DisplayCard = ({doner}) => {
   
    const {card_bg,picture,title,category,category_bg,text_button_bg,description,id,price} = doner || {};

    const handleDonate =() =>{

        const addedDonate = [];
      
        const donateItem = JSON.parse(localStorage.getItem('donate'))
        if(!donateItem){
          addedDonate.push(doner)
          localStorage.setItem('donate', JSON.stringify(addedDonate))
          toast.success('Successfully added!')
          
        }
        else{
            const exits = donateItem.find(doner => doner.id === id)
            if(!exits){
                addedDonate.push(...donateItem,doner)
                localStorage.setItem('donate', JSON.stringify(addedDonate))
                toast.success('Successfully added!')

            }
            else{
                toast.error("Already added.")
                return;
            }
          
        }


    }

    return (
        <div>
            <Toaster
  position="top-right"
  reverseOrder={false}
/>
            <div className="relative">
            <img src={picture} alt="" className="w-full h-[450px]"/>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
            <button onClick={handleDonate} className="btn flex justify-start text-white" style={{ backgroundColor: text_button_bg }}>
      Donate {price}Tk
    </button>

            </div>
            </div>
        
            <h2 className="text-4xl font-bold flex justify-start m-3 ">{title}</h2>
            <p className="text-xl">{description}</p>

           



            
        </div>
    );
};

export default DisplayCard;