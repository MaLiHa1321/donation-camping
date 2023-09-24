

const Categories = ({categorie}) => {
    console.log(categorie)
    const {card_bg,picture,title,category,category_bg,text_button_bg,description} = categorie;
    return (
        <div className="card card-compact w-78 shadow-xl" style={{backgroundColor: card_bg}}>
 <figure className="w-full h-full"> <img src={picture} alt="Shoes" className="w-full h-full" /> </figure>
  <div className="card-body">
    <h2 className="card-title p-2" style={{backgroundColor: category_bg}}> {category}</h2>
    <p className="text-2xl" style={{color: text_button_bg}}>{title}</p>
 
  </div>
</div>
    );
};

export default Categories;