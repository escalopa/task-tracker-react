import _ from 'lodash'

export function compareFormStates(formState, INITIAL_STATE) {
  _.isEqual(formState, INITIAL_STATE)
}