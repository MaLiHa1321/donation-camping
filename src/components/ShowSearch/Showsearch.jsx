


const Showsearch = ({filteredCategories}) => {
    

    // if (!filteredCategories || !Array.isArray(filteredCategories)) {
    //     return null; // Return early if it's not valid
    //   }
      console.log("Received Categories:", filteredCategories);

    // const {card_bg,picture,title,category,category_bg,text_button_bg,description,id} = filteredCategories
    return (
        <div>
        {filteredCategories.map((category) => (
        <div key={category.id}>
          <h1>{category.category}</h1>
          <p>{category.description}</p>
          {/* Render other category information here */}
        </div>
      ))}
            
        </div>
    );
};

export default Showsearch;