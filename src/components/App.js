import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppForm } from "./App.styled";
import {Searchbar} from './Searchbar/Searchbar';
import { getImages } from '../api';
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./Button/Button";
import { Loader } from "./Loader/Loader";



export const App = () => {

  const [page, setPage] = useState(1);
  // const [perPage, setPerPage] = useState(12);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [endOffList, setEndOffList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const PER_PAGE = 12;

  useEffect(() => {
  
    async function fetchImages() {
      try {
        if (query === '') {
          return;
        };
      setIsLoading(true);
      const images = await getImages(query, page, PER_PAGE);
      const newImages = await images.hits;
      const totalPages = Math.ceil(images.totalHits / PER_PAGE);
      endOffListFunction(page, totalPages);
      setImages(images => [...images, ...newImages]);
    
    } catch(error) {

          setError(true);
          console.log(error);

    } finally {

      setIsLoading(false);

    }
    }
    fetchImages();
  }, [page, query, error]) 


  const handleFormSubmit = (searchBarValue) => {
    if (query !== searchBarValue) {
      setQuery(searchBarValue);
      setPage(1);
      setEndOffList(false);
      setImages([]);
    };

  }

  const loadMore = () => {
    setPage(prevState => prevState.page + 1);
  }

  const endOffListFunction = (page, totalPages) => {
    if (page === totalPages) {
      setEndOffList(true);
      toast.info("Sorry, but this is the end of search results.");
    }
  }



    // const { images, endOffList, isLoading } = this.state;
    return (  
    <AppForm > 
        <Searchbar onSubmit={handleFormSubmit} />
        <ImageGallery images={images} />

        {images.length > 0 && !endOffList && (<LoadMoreBtn loadMore={loadMore} />)}

        {isLoading && <Loader />}
        
        <ToastContainer autoClose={3000} />
    </AppForm>
  );
  
 
};

