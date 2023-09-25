import { Link } from "react-router-dom";


const Categories = ({categorie}) => {

    const {card_bg,picture,title,category,category_bg,text_button_bg,description,id} = categorie;
    return (
      <div>
        <Link to={`/cate/${id}`}>

<div className="card card-compact w-78 h-full shadow-xl" style={{backgroundColor: card_bg}}>
<figure className="w-full h-full"> <img src={picture} alt="" className="w-full h-full" /> </figure>
 <div className="card-body">
   <button className="btn" style={{backgroundColor: card_bg, color: text_button_bg}}>{category}</button>
   {/* <h2 className="card-title p-2" > /h2> */}
   <p className="text-2xl" style={{color: text_button_bg}}>{title}</p>

 </div>
</div>

      </Link>

      </div>

 
 

     
 
    );
};

export default Categories;