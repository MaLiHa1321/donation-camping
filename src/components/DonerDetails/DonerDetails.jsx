import { Link } from "react-router-dom";


const DonerDetails = ({doner}) => {
    console.log(doner)
    const {card_bg,picture,title,category,category_bg,text_button_bg,description,id,price} = doner || {};
    return (
        <div className="flex flex-col lg:flex-row gap-4" style={{backgroundColor: card_bg}} >
            <img src={picture} alt="" className="w-[200px] h-[200px]" />
            <div >
                <h3 className="text-2xl rounded-lg mt-3 border border-white" style={{backgroundColor: card_bg, color: text_button_bg}}>{category}</h3>
            <h2 className="text-3xl">{title}</h2>
            <p style={{color: text_button_bg}}>Price: {price}</p>

            <Link to={`/cate/${id}`}>
            <button className="btn text-white border border-white" style={{backgroundColor: text_button_bg}}>Veiw Details</button>
            </Link>
          
            </div>
             
            
        </div>
    );
};

export default DonerDetails;