import { useState} from "react";
import { BsSearch } from "react-icons/bs";
import { toast } from 'react-toastify';
import { SearchBar, SearchForm, SearchFormBtn, SearchFormInput, SearchFormBtnLabel } from './Searchbar.styled';
import PropTypes from 'prop-types';

export const Searchbar = ({onSubmit}) => {

    const [query, setQuery] = useState('');


    const handleQueryChange = e => {
        setQuery(e.currentTarget.value.toLowerCase());     
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() === '') {
            // alert('Введити поисковый запрос')
            toast.error('Please enter a search term')
            return;
        }
        onSubmit(query);
    }
    

        return (
        <SearchBar onSubmit={handleSubmit}>
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
                    value={query}
                    onChange={handleQueryChange}
                />
            </SearchForm>
        </SearchBar>
    );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};