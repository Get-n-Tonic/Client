import { Link, useLocation } from "react-router-dom";
import "./Card.scss";

const Card = ({
    cocktail
}) => {
    const location = useLocation();
    return (
        <>
            {location.pathname === "/" ? (
                // add "card__active" class to justify desktop view
                <div className="card">
                    <Link to={`/cocktails/${cocktail.drink_id}`} className="card__link">
                        {/* display cocktail */}
                        <img src={cocktail.image_url} alt={cocktail.instructions} className="card__image" />

                        {/* display cocktail name */}
                        <article className="card__placeholder">
                            <h3 className="card__cocktails">{cocktail.name}</h3>
                        </article>
                    </Link>

                    {/* display tags */}
                    <div className="card__holder">
                        <span className="card__category">{cocktail.category}</span>
                    </div>
                </div>
            ) : (
                <div className="cocktail">
                    {/* display photo */}
                    <div className="cocktail__placeholder">
                        <img src={cocktail.image_url} alt={cocktail.instructions} className="cocktail__image" />

                        <div className="cocktail__ingredients cocktail__ingredients--responsive">
                            <ul>
                                {cocktail.ingredients.map((ingredient, index) => (
                                    <li key={index} className="cocktail__ingredient">
                                        {ingredient}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* display name and category */}
                    <div className="cocktail__holder">
                        <h3 className="cocktail__cocktails">{cocktail.name}</h3>
                        <span className="cocktail__category">{cocktail.category}</span>
                    </div>

                    {/* display instructions */}
                    <p className="cocktail__instructions">{cocktail.instructions}</p>

                    {/* display ingredients */}
                    <div className="cocktail__ingredients cocktail__ingredients--mobile">
                        <ul>
                            {cocktail.ingredients.map((ingredient, index) => (
                                <li key={index} className="cocktail__ingredient">
                                    {ingredient}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            )}
        </>
    );
};

export default Card;
