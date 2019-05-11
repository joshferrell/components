import * as React from 'react';

type State = {
    openIndexes: Array<number>;
}

interface RenderChild {
    (data: { openIndexes: Array<number>, handleItemClick: (index: number) => void }): React.ReactNode;
}

type PropTypes = {
    defaultIndexes?: Array<number>;
    children: RenderChild;
}

class Accordion extends React.Component<PropTypes, State> {
    defaultProps = {
        defaultIndex: [0]
    }

    state = {
        openIndexes: [0]
    }

    toggleIndex = (index: number) => {
        this.setState({ openIndexes: [index] });

        // this.setState(({ openIndexes }) => {
        //     const closing = openIndexes.includes(index);
        //     return ({
        //         openIndexes: closing ? openIndexes.filter(i => i !== index) : openIndexes.concat([index])
        //     });
        // });
    }

    render = () => this.props.children({
        openIndexes: this.state.openIndexes,
        handleItemClick: this.toggleIndex
    })
}

export default Accordion;