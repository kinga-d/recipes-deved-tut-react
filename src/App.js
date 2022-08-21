import React, { useEffect, useState } from "react";
import Recipe from './Recipe';
import './App.css';

const App = () => {
    const APP_ID = "0282fd7c";
    const APP_KEY = "7462d825a83b3cd5e8e8ce1841523d44";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState({});

    useEffect(() => {
        getRecipes();
    }, [query]); //useEffect dzia³a tylko kiedy query siê zmienia

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    };

    return (
        <div className="App">
            <p className="title">Recipe finder</p>
            <div className="formCenter">
            <form onSubmit={getSearch} className="seach-form">
                <input
                    className="search-bar"
                    type="text"
                    value={search}
                    onChange={updateSearch}
                    placeholder="something yummy is waiting"
                />
                <button  className="search-button" type="submit">
                     Search
                </button>
                </form>
                </div>
            <div className="recipes">
            {recipes.map(recipe => (
                <Recipe
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                    
                />))
            }</div>
        </div>
    );
};

export default App;
