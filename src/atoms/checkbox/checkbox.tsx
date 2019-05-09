import * as React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    position: relative;

    label::before {
        content: "";
        display: inline-block;
        
        height: 16px;
        width: 16px;
        
        border: 1px solid;   
    }

    label::after {
        content: "";
        display: inline-block;

        position: absolute;
        left: 4px;
        top: 3px;

        height: 6px;
        width: 9px;
        border-left: 2px solid;
        border-bottom: 2px solid;

        transform: rotate(-45deg);
    }
`;
const Input = styled.input`
    opacity: 0;

    &:focus + label {
        outline: rgb(59, 153, 252) auto 5px;
    }

    & + label::after {
        content: none;
    }

    &:checked + label::after {
        content: '';
    }
`;

const Checkbox = () => (
    <Box>
        <Input type="checkbox" id="checkbox_1" />
        <label htmlFor="checkbox_1">Text</label>
    </Box>
)

export default Checkbox;