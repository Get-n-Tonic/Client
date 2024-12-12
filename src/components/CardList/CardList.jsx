import "./CardList.scss";
import Card from "../Card/Card";

const CardList = ({ cocktails, selectedCategory }) => {
    let filteredCards = [];

    // select cards include selected tag if there is selected tag
    if (selectedCategory !== "") {
        filteredCards = cocktails.filter((card) => {
            return card.tags.includes(selectedCategory);
        });
    } else {
        filteredCards = cocktails;
    }

    return (
        <section className="cards">

            {/* map the selected cards and render card component */}
            {filteredCards.map((item) => (
                <Card
                    key={item.id}
                    cocktail={item}
                />
            ))}
        </section>
    );
};

export default CardList;