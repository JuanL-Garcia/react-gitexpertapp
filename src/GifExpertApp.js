import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ value }) => {
    
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);
    /*
    const handleAdd = () => {
        const seriesArray = ['Full Metal Alchemist', 'Hunter X Hunter', 'Bleach', 'Naruto'];
        setCategories(cats => [...cats, seriesArray[Math.floor(Math.random() * seriesArray.length)]]);
        //setCategories([...categories,seriesArray[Math.floor(Math.random() * seriesArray.length)]]);
        
    };*/
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={ setCategories } ></AddCategory>
            <hr />
            
            <ol>
                {
                    categories.map( category => (
                        <GifGrid key={ category } category={ category }></GifGrid>
                    ))
                }
            </ol>
        </>
    );    
}

export default GifExpertApp;