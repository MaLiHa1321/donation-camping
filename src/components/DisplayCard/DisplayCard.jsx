

const DisplayCard = ({doner}) => {
   
    const {card_bg,picture,title,category,category_bg,text_button_bg,description,id,price} = doner || {};

    const handleDonate =() =>{

        const addedDonate = [];
      
        const donateItem = JSON.parse(localStorage.getItem('donate'))
        if(!donateItem){
          addedDonate.push(doner)
          localStorage.setItem('donate', JSON.stringify(addedDonate))
          alert("sucessfully add")
          
        }
        else{
            const exits = donateItem.find(doner => doner.id === id)
            if(!exits){
                addedDonate.push(...donateItem,doner)
                localStorage.setItem('donate', JSON.stringify(addedDonate))
                alert("sucessfully add")

            }
            else{
                alert("already added")
                return;
            }
          
        }


    }

    return (
        <div>
            <div className="relative">
            <img src={picture} alt="" className="w-full h-[50%]" />
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