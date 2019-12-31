import * as Saga from '../util/saga'
import * as TeamBuildingGen from './team-building-gen'
import * as CryptoGen from './crypto-gen'
import {TypedState} from '../util/container'
import commonTeamBuildingSaga, {filterForNs} from './team-building'

// Get list of users from crypto TeamBuilding for encrypt operation
const onSetRecipients = (state: TypedState, _: TeamBuildingGen.FinishedTeamBuildingPayload) => {
  const users = [...state.crypto.teamBuilding.finishedTeam]
  return [
    TeamBuildingGen.createCancelTeamBuilding({namespace: 'crypto'}),
    CryptoGen.createSetRecipients({operation: 'encrypt', recipients: users}),
  ]
}

function* teamBuildingSaga() {
  yield* commonTeamBuildingSaga('crypto')

  // This action is used to hook into the TeamBuildingGen.finishedTeamBuilding action.
  // We want this so that we can figure out which user(s) havbe been selected and pass that result over to store.crypto.encrypt.recipients
  yield* Saga.chainAction2(TeamBuildingGen.finishedTeamBuilding, filterForNs('crypto', onSetRecipients))
}

function* cryptoSaga() {
  yield* teamBuildingSaga()
}

export default cryptoSaga
