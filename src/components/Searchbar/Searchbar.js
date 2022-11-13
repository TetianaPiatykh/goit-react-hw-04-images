import { Component } from "react";
import { BsSearch } from "react-icons/bs";
import { toast } from 'react-toastify';
import { SearchBar, SearchForm, SearchFormBtn, SearchFormInput, SearchFormBtnLabel } from './Searchbar.styled';
import PropTypes from 'prop-types';

export default class Searchbar extends Component  {
    state = {
        query: '',

    }

    handleQueryChange = e => {

        

        this.setState({ query: e.currentTarget.value.toLowerCase() });
        
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.query.trim() === '') {
            // alert('Введити поисковый запрос')
            toast.error('Please enter a search term')
            return;
        }


        this.props.onSubmit(this.state.query);
    }
    


    render() {
        return (
        <SearchBar onSubmit={this.handleSubmit}>
            <SearchForm>
                    <SearchFormBtn type="submit" >
                        <BsSearch />
                    <SearchFormBtnLabel>Search</SearchFormBtnLabel>
                </SearchFormBtn>

                <SearchFormInput
                    //   class="input"
                    type="text"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.query}
                    onChange={this.handleQueryChange}
                />
            </SearchForm>
        </SearchBar>
    );
    }
    
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};