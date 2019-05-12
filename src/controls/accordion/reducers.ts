
// Shared Types ------------------

export type OpenIndexes = Array<number>;

export type PropTypes = {
    onStateChange: () => {},

}

export enum ChangeTypes {
    CLOSING = 'closing',
    OPENING = 'opening'
}

// Reducer Types ----------------
export type State = {
    openIndexes: OpenIndexes;
}

export type Change = {
    type: ChangeTypes,
    openIndexes: OpenIndexes;
}

export const preventClose = (state: State, changes: Change) => 
    changes.type === ChangeTypes.CLOSING && state.openIndexes.length < 2
        ? { ...changes, openIndexes: state.openIndexes }
        : changes

export const single = (state: State, changes: Change) =>
    changes.type === ChangeTypes.OPENING
        ? { ...changes, openIndexes: changes.openIndexes.slice(-1) }
        : changes

export const combineReducers = (...reducers) => (state, changes) =>
  reducers.reduce((acc, reducer) => reducer(state, acc), changes)