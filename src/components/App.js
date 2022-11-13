import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppForm } from "./App.styled";
import Searchbar from './Searchbar/Searchbar';
import { getImages } from '../api';
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./Button/Button";
import { Loader } from "./Loader/Loader";



export class App extends Component {

  state = {
    page: 1,
    perPage: 12,
    query: '',
    images: [],
    endOffList: false,
    isLoading: false,
    error: false

  };

  async componentDidUpdate(prevProps, prevState) {

    if (prevState.page !== this.state.page || prevState.query !== this.state.query ) {

      this.fetchImages(); 
    }
  }


  handleFormSubmit = (query) => {
    if (this.state.query !== query) {
    this.setState({ query: query, page: 1, endOffList: false, images: [], });
    console.log(query);
    }

  }
  componentDidMount() {
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }



  fetchImages = async () => {
    const { page, query, perPage} = this.state;
    try {
      this.setState({ isLoading: true });
      const images = await getImages(query, page, perPage);
      const newImages = await images.hits;
      const totalPages = Math.ceil(images.totalHits / perPage);
      this.endOffListFunction(page, totalPages)
    
      this.setState(({ images }) => ({
      
        images: [...images, ...newImages],
      }));
    
    } catch {

      this.setState({ error: true });

    } finally {

      this.setState({ isLoading: false });

    }

  }

  endOffListFunction = (page, totalPages) => {
    if (page === totalPages) {
      this.setState({ endOffList: true });
      toast.info("Sorry, but this is the end of search results.");
    }
  }


  render() {
    const { images, endOffList, isLoading } = this.state;
    return (  
    <AppForm > 
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} />

        {images.length > 0 && !endOffList && (<LoadMoreBtn loadMore={this.loadMore} />)}

        {isLoading && <Loader />}
        
        <ToastContainer autoClose={3000} />
    </AppForm>
  );
  }
 
};

