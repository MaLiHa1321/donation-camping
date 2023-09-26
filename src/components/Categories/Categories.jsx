import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const Categories = ({categorie}) => {
 

    const {card_bg,picture,title,category,text_button_bg,id} = categorie;
    return (
      <div>
        <Link to={`/cate/${id}`}>

<div className="card card-compact w-78 h-full shadow-xl p-2" style={{backgroundColor: card_bg}}>
<figure className="w-full h-full"> <img src={picture} alt="" className='w-full h-full' /> </figure>
 <div className="card-body">
   <button className="btn shadow-lg" style={{backgroundColor: card_bg, color: text_button_bg}}>{category}</button>
   <p className="text-2xl" style={{color: text_button_bg}}>{title}</p>

 </div>
</div>

      </Link>

      </div>
    );
};

Categories.propTypes ={
  categorie: PropTypes.array
}

export default Categories;