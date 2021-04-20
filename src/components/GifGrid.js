

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {
    
    const { data:images, loading } = useFetchGifs(category);
    console.log(loading);
    
    return (
        <>
            <h3 className="animate__animated animate__bounceInLeft">{ category }</h3>
            { loading && <p>Loading</p>}
            <div className="card-grid" >
                
                {
                images.map( img => (
                    <GifGridItem 
                        key={ img.id }
                        
                        { ...img } >
                    </GifGridItem>
                ))
                }
            </div>
        </>
    )
}