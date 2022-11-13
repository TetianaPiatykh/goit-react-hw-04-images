import { Oval } from 'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { LoaderStyled } from './Loader.styled';

export const Loader = () => {
    return (
        <LoaderStyled>
            <Oval height={80} width={80} color="blue" secondaryColor="white" visible={true} />
        </LoaderStyled>
        
    );
}