import React from 'react';
import style from './recipe.module.css';


const Recipe = ({title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <img className={style.image} src={image} alt="" />
            <h1 className={style.title}>{title}</h1>
            <p className={style.calories}>{Math.round(calories)} kcal per portion</p>
            <p className={style.ingredientsTitle}> Ingredients: </p>
            <ul className={style.ingredients}>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
          
        </div>
    );
}

export default Recipe;