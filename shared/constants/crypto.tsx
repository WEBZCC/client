import * as TeamBuildingConstants from './team-building'
import * as Types from './types/crypto'

export const encryptTab = 'encryptTab'
export const decryptTab = 'decryptTab'
export const signTab = 'signTab'
export const verifyTab = 'verifyTab'

export const TabTitles: {[k in Types.CryptoSubTab]: Types.TabTitles} = {
  decryptTab: 'Decrypt',
  encryptTab: 'Encrypt',
  signTab: 'Sign',
  verifyTab: 'Verify',
}

export const Operations: {[key: string]: Types.Operations} = {
  Decrypt: 'decrypt',
  Encrypt: 'encrypt',
  Sign: 'sign',
  Verify: 'verify',
}

const defaultCommonState = {
  errorMessage: '',
  errorType: '' as Types.ErrorTypes,
  input: '',
  inputType: 'text' as Types.InputTypes,
  output: '',
}

export const makeState = (): Types.State => ({
  decrypt: {
    ...defaultCommonState,
  },
  encrypt: {
    ...defaultCommonState,
    meta: {
      canUsePGP: false,
    },
    options: {
      includeSelf: true,
      sign: true,
      usePGP: false,
    },
    recipients: [],
  },
  sign: {
    ...defaultCommonState,
  },
  teamBuilding: TeamBuildingConstants.makeSubState(),
  verify: {
    ...defaultCommonState,
  },
})
