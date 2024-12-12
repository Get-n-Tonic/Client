import { useState, useEffect } from 'react';
import "./HomePage.scss"
// import Header from '../../components/Header/Header';
// import Footer from '../../components/Footer/Footer';
import CardList from '../../components/CardList/CardList';
import { getCocktails } from "../../api/routes";

function HomePage() {
    const [cocktails, setCocktails] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    // fetch the photos using API endpoint
    useEffect(() => {
        const fetchCocktails = async () => {
            try {
                const Photos = await getCocktails();
                setCocktails(Photos);
            } catch (error) {
                console.error("Error fetching photos:", error);
            }
        };

        fetchCocktails();
    }, []);

    const filteredCocktails  =
        selectedCategory === "All"
            ? cocktails
            : cocktails.filter(cocktail => cocktail.category === selectedCategory);

    // Get unique categories for filtering
    const categories = ["All", ...new Set(cocktails.map(cocktail => cocktail.category))];


    return (
        <>
            {/* header section */}
            <Header />
            <div className='container'>
                <div className="filter-bar">
                    <label htmlFor="category-filter">Filter by Category: </label>
                    <select
                        id="category-filter"
                        value={selectedCategory}
                        onChange={e => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Card List */}
                <CardList cocktails={filteredCocktails} selectedCategory={selectedCategory} />
            </div>

            {/* footer section */}
            <Footer />
        </>
    )
}

export default HomePage;
