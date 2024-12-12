import "./CardList.scss";
import Card from "../Card/Card";

const CardList = ({ cocktails }) => {

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