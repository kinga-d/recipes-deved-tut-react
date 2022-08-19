import React, { useEffect, useState } from "react";
import Recipe from './Recipe';
import './App.css';

const App = () => {
    const APP_ID = "0282fd7c";
    const APP_KEY = "7462d825a83b3cd5e8e8ce1841523d44";
    const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
    }

    return (
        <div className="App">
            <form className="seach-form">
                <input className="search-bar" type="text" />
                <button  className="search-button" type="submit">
                     
                </button>
            </form>
            {recipes.map(recipe => (
                <Recipe />))
};
            </div>
);
};

export default App;
