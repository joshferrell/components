import posed from 'react-pose';
import styled from 'styled-components';

const BaseItem = styled.li.attrs({
    role: 'presentation'
})`
    overflow: hidden;
`;

export const AccordionItem = posed(BaseItem)({
    closed: { height: 0 },
    open: { height: 'auto' }
});

const TabItem = posed(BaseItem)({
    leftOpen: {},
    leftClosed: {},
    rightOpen: {},
    rightClosed: {},
    upOpen: {},
    upClosed: {},
    downOpen: {},
    downClosed: {}
});

// TODO: make tab container
// TODO: make tab control

// TODO: make accordion container
// TODO: make accordion control