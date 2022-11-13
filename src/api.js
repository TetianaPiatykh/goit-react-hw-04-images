import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['key'] = '29651354-06221cc15eb0ca625c8b2fb12';

export const getImages = async (query, page, perPage) => {
    try {
        const response = await axios.get( '?', {
            params: {
                q: query,
                page: page,
                key: '29651354-06221cc15eb0ca625c8b2fb12',
                image_type: 'photo',
                orientation: 'horizontal',
                per_page: perPage,
            }
        });
        console.log(response.data);
        return response.data;
        
    
    } catch (error) { };

}

