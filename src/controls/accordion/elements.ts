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

const enterTransition = { 
    type: 'spring',
    stiffness: 5000, 
    damping: 2,
    duration: 150
};

const exitTransition = { duration: 150 };

const BaseTab = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

export const TabItem = posed(BaseTab)({
    leftOpen: {
        x: 0,
        width: 'auto',
        opacity: 1,
    },
    leftClosed: {
        x: 50,
        opacity: 0
    },
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