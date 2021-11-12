
export const getGifs = async(category,intlimit) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${encodeURI(intlimit)}&api_key=bgRltnprAY44G3qiI5vdhS70YPGb5nrt`;
    const resp = await fetch (url);
    const {data} = await resp.json();
    // console.log(data);

    const gifs = data.map (img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    // console.log(gifs);
    // setImages(gifs);
    return gifs;
}

// getGifs();