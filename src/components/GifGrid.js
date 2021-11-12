import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid=({c}) =>{    
    // const intlimit=20;
    const {data:images,loading} = useFetchGifs (c);
    // console.log(loading);
    // const [count,setCount] = useState(0);
    
    // const [images,setImages] = useState([]);

    // useEffect ( () => {
    //     getGifs(c,intlimit)
    //         .then (setImages)
    // },[])

    
    
    return (
        <>
            <h3 className="animate__fadeIn">{c}</h3>
            {
                loading&& <p className="animate__animated animate__flash">loading</p>
            }
            {/* <h3>{count}</h3>
            <button onClick={()=>setCount(count +1)}>renderizar varias verces bloqueado</button> */}
            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }        
            </div>
        </>        
    );
}
