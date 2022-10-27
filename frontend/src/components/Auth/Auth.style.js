import { TextField} from "@mui/material"
import Link from "@mui/material/Link"
import { styled } from "@mui/material/styles"

export const Container = styled('div')(`
    text-align: center;  
`);

export const LoginText = styled('div')(`
    margin-top: 10vh; 
    margin-bottom: 10vh; 
    text-transform: uppercase; 
    @media (max-width: 1250px) {
        font-size: 50px;
    }
    font-size: 75px;
    color: #ffc107;
    font-family: "Arial Black", Gadget, sans-serif;
    text-shadow: 0px 0px 0 rgb(245,183,0),
                    0px 1px 0 rgb(235,173,0),
                    0px 2px 0 rgb(225,163,0),
                    0px 3px 0 rgb(215,153,0),
                    0px 4px 0 rgb(205,143,0),
                    0px 5px 0 rgb(195,133,0),
                    0px 6px 0 rgb(185,123,0),
                    0px 7px 0 rgb(175,113,0),
                    0px 8px 0 rgb(165,103,0),
                    0px 9px  0 rgb(155,93,0),
                    0px 10px 9px rgba(0,0,0,0.06),
                    0px 10px 1px rgba(0,0,0,0.5),
                    0px 0px 9px rgba(0,0,0,.2);
`);
export const ChangeAuth = styled(Link)(
    `
    cursor: pointer; 
    `
    );

export const Form = styled('form')(
`grid-template-columns: 50%; 
display: grid;
justify-content: center;
align-items: center;  
`
);
export const Input = styled(TextField)(` 
margin: 20px;
`);
