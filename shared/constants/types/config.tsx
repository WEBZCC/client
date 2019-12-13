import * as NetInfo from '@react-native-community/netinfo'
import * as RPCTypes from './rpc-gen'
import {ConversationIDKey} from './chat2'
import {DarkModePreference} from '../../styles/dark-mode'
import {LocalPath} from './fs'
import {RPCError} from '../../util/errors'
import {Tab} from '../tabs'

export type UpdateInfoStatus = 'ok' | 'suggested' | 'critical'

export type UpdateInfoResponse = {
  message: string
}

export type UpdateInfo = {
  updating: boolean
  status: UpdateInfoStatus
  critical?: UpdateInfoResponse
  suggested?: UpdateInfoResponse
}
export type DaemonHandshakeState = 'starting' | 'waitingForWaiters' | 'done'
export type ConfiguredAccount = {
  hasStoredSecret: boolean
  username: string
}
// 'notavailable' is the desktop default
export type ConnectionType = NetInfo.NetInfoStateType | 'notavailable'

export type WindowState = {
  dockHidden: boolean
  height: number
  isFullScreen: boolean
  width: number
  windowHidden: boolean
  x: number
  y: number
}

export type State = {
  // if we ever restart handshake up this so we can ignore any waiters for old things
  appFocused: boolean
  appFocusedCount: number
  avatarRefreshCounter: Map<string, number>
  configuredAccounts: Array<ConfiguredAccount>
  daemonError?: Error
  daemonHandshakeFailedReason: string
  daemonHandshakeRetriesLeft: number
  daemonHandshakeState: DaemonHandshakeState
  daemonHandshakeVersion: number
  daemonHandshakeWaiters: Map<string, number>
  darkModePreference: DarkModePreference
  debugDump: Array<string>
  defaultUsername: string
  deviceID: RPCTypes.DeviceID
  deviceName?: string
  followers: Set<string>
  following: Set<string>
  globalError?: Error | RPCError
  httpSrvAddress: string
  httpSrvToken: string
  justDeletedSelf: string
  loggedIn: boolean
  logoutHandshakeVersion: number
  logoutHandshakeWaiters: Map<string, number>
  menubarWindowID: number
  notifySound: boolean
  openAtLogin: boolean
  osNetworkOnline: boolean
  pushLoaded: boolean
  registered: boolean
  remoteWindowNeedsProps: Map<string, Map<string, number>>
  runtimeStats?: RPCTypes.RuntimeStats
  startupConversation: ConversationIDKey
  startupDetailsLoaded: boolean
  startupFollowUser: string
  startupLink: string
  startupSharePath?: LocalPath
  startupTab?: Tab
  startupWasFromPush: boolean
  systemDarkMode: boolean
  uid: string
  updateInfo: UpdateInfo
  useNativeFrame: boolean
  userActive: boolean
  userSwitching: boolean
  username: string
  whatsNewLastSeenVersion: string
  windowState: WindowState
}
