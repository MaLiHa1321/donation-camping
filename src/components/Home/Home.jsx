import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";


const Home = () => {
    const categories = useLoaderData();
   
    return (
        <div>
           <Banner></Banner>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {
                categories.map(categorie => <Categories key={categorie.id} categorie={categorie}></Categories>)
            }
           </div>
            
        </div>
    );
};

export default Home;