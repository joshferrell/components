import React from 'react'

type State = {
    openIndexes: Array<number>;
}

interface RenderProp {
    (data: { openIndexes: Array<number>, handleItemClick: (index: number) => void }): React.ReactNode
}

type PropTypes = {
    openIndexes?: Array<number>
    stateReducer: (state: State, changes: any) => any
    onStateChange: (changes: any) => any
    children: RenderProp;
}

class Accordion extends React.Component<PropTypes, State> {
    static defaultProps = {
        stateReducer: (state, changes) => changes,
        onStateChange: () => { },
    }
    state = { openIndexes: [0] }
    getState(state = this.state) {
        return {
            openIndexes:
                this.props.openIndexes === undefined
                    ? state.openIndexes
                    : this.props.openIndexes,
        }
    }
    internalSetState(changes, callback = () => { }) {
        let allChanges
        this.setState(
            state => {
                const actualState = this.getState(state)
                const changesObject =
                    typeof changes === 'function' ? changes(actualState) : changes
                allChanges = this.props.stateReducer(actualState, changesObject)
                return allChanges
            },
            () => {
                this.props.onStateChange(allChanges)
                callback()
            },
        )
    }
    handleItemClick = (index: number) => {
        this.internalSetState((state: State) => {
            const closing = state.openIndexes.includes(index)
            return {
                type: closing ? 'closing' : 'opening',
                openIndexes: closing
                    ? state.openIndexes.filter((i: number) => i !== index)
                    : [...state.openIndexes, index],
            }
        })
    }
    render() {
        return this.props.children({
            openIndexes: this.getState().openIndexes,
            handleItemClick: this.handleItemClick,
        })
    }
}

export default Accordion;