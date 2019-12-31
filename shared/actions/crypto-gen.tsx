// NOTE: This file is GENERATED from json files in actions/json. Run 'yarn build-actions' to regenerate

import * as Types from '../constants/types/crypto'
import * as TeamBuildingTypes from '../constants/types/team-building'

// Constants
export const resetStore = 'common:resetStore' // not a part of crypto but is handled by every reducer. NEVER dispatch this
export const typePrefix = 'crypto:'
export const clearInput = 'crypto:clearInput'
export const clearRecipients = 'crypto:clearRecipients'
export const setInputType = 'crypto:setInputType'
export const setInputValue = 'crypto:setInputValue'
export const setOptions = 'crypto:setOptions'
export const setRecipients = 'crypto:setRecipients'

// Payload Types
type _ClearInputPayload = void
type _ClearRecipientsPayload = {readonly operation: Types.Operations}
type _SetInputTypePayload = {readonly operation: Types.Operations; readonly type: Types.InputTypes}
type _SetInputValuePayload = {readonly operation: Types.Operations; readonly value: string}
type _SetOptionsPayload = {readonly operation: Types.Operations; readonly options: Types.OperationsOptions}
type _SetRecipientsPayload = {
  readonly operation: Types.Operations
  readonly recipients: Array<TeamBuildingTypes.User>
}

// Action Creators
/**
 * Array recipients of operations, provided via TeamBuilding
 */
export const createSetRecipients = (payload: _SetRecipientsPayload): SetRecipientsPayload => ({
  payload,
  type: setRecipients,
})
/**
 * Remove all recipients from operation
 */
export const createClearRecipients = (payload: _ClearRecipientsPayload): ClearRecipientsPayload => ({
  payload,
  type: clearRecipients,
})
export const createClearInput = (payload: _ClearInputPayload): ClearInputPayload => ({
  payload,
  type: clearInput,
})
export const createSetInputType = (payload: _SetInputTypePayload): SetInputTypePayload => ({
  payload,
  type: setInputType,
})
export const createSetInputValue = (payload: _SetInputValuePayload): SetInputValuePayload => ({
  payload,
  type: setInputValue,
})
export const createSetOptions = (payload: _SetOptionsPayload): SetOptionsPayload => ({
  payload,
  type: setOptions,
})

// Action Payloads
export type ClearInputPayload = {readonly payload: _ClearInputPayload; readonly type: typeof clearInput}
export type ClearRecipientsPayload = {
  readonly payload: _ClearRecipientsPayload
  readonly type: typeof clearRecipients
}
export type SetInputTypePayload = {readonly payload: _SetInputTypePayload; readonly type: typeof setInputType}
export type SetInputValuePayload = {
  readonly payload: _SetInputValuePayload
  readonly type: typeof setInputValue
}
export type SetOptionsPayload = {readonly payload: _SetOptionsPayload; readonly type: typeof setOptions}
export type SetRecipientsPayload = {
  readonly payload: _SetRecipientsPayload
  readonly type: typeof setRecipients
}

// All Actions
// prettier-ignore
export type Actions =
  | ClearInputPayload
  | ClearRecipientsPayload
  | SetInputTypePayload
  | SetInputValuePayload
  | SetOptionsPayload
  | SetRecipientsPayload
  | {type: 'common:resetStore', payload: {}}
