import * as TeamBuildingTypes from './team-building'

type EncryptTab = 'encryptTab'
type DecryptTab = 'decryptTab'
type SignTab = 'signTab'
type VerifyTab = 'verifyTab'
export type TabTitles = 'Encrypt' | 'Decrypt' | 'Sign' | 'Verify'
export type CryptoSubTab = EncryptTab | DecryptTab | SignTab | VerifyTab

export type Operations = 'encrypt' | 'decrypt' | 'sign' | 'verify'
export type InputTypes = 'text' | 'file'
export type ErrorTypes = ''

export type CommonState = {
  errorMessage: string
  errorType: ErrorTypes
  input: string
  inputType: InputTypes
  output: string
}

export type EncryptOptions = {
  includeSelf: boolean
  sign: boolean
  usePGP: boolean
}
export type DecryptOptions = {}
export type SignOptions = {}
export type VerifyOptions = {}
export type OperationsOptions = EncryptOptions | DecryptOptions | SignOptions | VerifyOptions

export type EncrypState = CommonState & {
  meta: {
    canUsePGP: boolean
  }
  options: EncryptOptions
  recipients: Set<TeamBuildingTypes.User> // Only for encrypt operation
}

export type DecryptState = CommonState & {}

export type SignState = CommonState & {}

export type VerifyState = CommonState & {}

export type State = Readonly<{
  decrypt: DecryptState
  encrypt: EncrypState
  sign: SignState
  teamBuilding: TeamBuildingTypes.TeamBuildingSubState
  verify: VerifyState
}>
