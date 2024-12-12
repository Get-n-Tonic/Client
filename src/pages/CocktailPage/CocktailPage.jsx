import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "./CocktailPage.scss";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import { getCocktailById } from '../../api/routes';



function CocktailPage() {
    const [cocktail, setCocktail] = useState(null);
    const params = useParams();

    // fetch the photo and comments by id using API endpoints
    useEffect(() => {
        const fetchCocktail = async () => {
            try {
                const selectedCocktail= await getCocktailById(params.id);
                setCocktail(selectedCocktail);
            } catch (err) {
                console.error("Error fetching photo:", err);
            }
        };
        fetchCocktail();
    }, [params.id]);

    if (cocktail) {
        return (
            <>
                {/* header section */}
                <Header />
                <div className='content'>
                    {/* Render the Card component */}
                    <Card key={cocktail.id} cocktail={cocktail} />
                </div>
                

                {/* footer section */}
                <Footer />
            </>
        )
    }
}


export default CocktailPage;