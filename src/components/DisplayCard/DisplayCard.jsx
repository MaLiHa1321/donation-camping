

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
            <img src={picture} alt="" className="w-full h-full" />
            <div className="bg-overlay bg-black p-4">
                <button onClick={handleDonate} className="btn flex justify-start" style={{backgroundColor: text_button_bg}}>Donate {price}Tk</button>
            </div>
            <h1 className="text-3xl font-bold mt-12">{title}</h1>
            <p>{description}</p>

            
        </div>
    );
};

export default DisplayCard;