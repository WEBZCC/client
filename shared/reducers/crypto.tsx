import logger from '../logger'
import * as Types from '../constants/types/crypto'
import * as Constants from '../constants/crypto'
import * as Container from '../util/container'
import * as TeamBuildingGen from '../actions/team-building-gen'
import * as CryptoGen from '../actions/crypto-gen'
import {editTeambuildingDraft} from './team-building'
import {teamBuilderReducerCreator} from '../team-building/reducer-helper'

const initialState: Types.State = Constants.makeState()

type Actions = CryptoGen.Actions | TeamBuildingGen.Actions

const operationGuard = (operation: Types.Operations, action: CryptoGen.Actions) => {
  if (operation) return false

  logger.error(
    `Crypto reducer: Action (${action.type}) did not contain operation ( "encrypt", "decrypt", "verify", "sign" )`
  )
  return true
}

export default Container.makeReducer<Actions, Types.State>(initialState, {
  [CryptoGen.clearRecipients]: (draftState, action) => {
    const {operation} = action.payload

    if (operationGuard(operation, action)) return

    if (operation === Constants.Operations.Encrypt) {
      logger.info('JRY clearling state.crypto.encrypt.recipients')
      draftState.encrypt.recipients = initialState.encrypt.recipients
    }
  },
  [CryptoGen.setRecipients]: (draftState, action) => {
    const {operation, recipients} = action.payload

    if (operationGuard(operation, action)) return

    if (operation === Constants.Operations.Encrypt) {
      logger.info('JRY updating state.crypto.encrypt.recipients to', {recipients})
      draftState.encrypt.recipients = recipients
    }
  },
  // Encrypt: Handle team building when selecting keybase users
  ...teamBuilderReducerCreator<Types.State>(
    (draftState: Container.Draft<Types.State>, action: TeamBuildingGen.Actions) => {
      const val = editTeambuildingDraft('crypto', draftState.teamBuilding, action)
      console.log('JRY teamBuilding', {action})
      if (val !== undefined) {
        draftState.teamBuilding = val
      }
    }
  ),
})
