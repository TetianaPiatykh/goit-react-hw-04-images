import { Button } from "./Button.styled";
import PropTypes from 'prop-types';

export const LoadMoreBtn = ({ loadMore }) => {
    return (
        <Button type="button" onClick={() => loadMore()}>Load more...</Button>
    );
};

LoadMoreBtn.propTypes = {
  loadMore: PropTypes.func.isRequired,
};