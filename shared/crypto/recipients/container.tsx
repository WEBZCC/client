import * as Container from '../../util/container'
import * as CryptoGen from '../../actions/crypto-gen'
import {appendEncryptRecipientsBuilder} from '../../actions/typed-routes'
import Recipients from '.'

export default Container.namedConnect(
  (state: Container.TypedState) => ({
    recipients: state.crypto.encrypt.recipients,
  }),
  dispatch => ({
    onAddRecipients: () => dispatch(appendEncryptRecipientsBuilder()),
    onClearRecipients: () => dispatch(CryptoGen.createClearRecipients({operation: 'encrypt'})),
  }),
  (stateProps, dispatchProps) => ({
    onAddRecipients: dispatchProps.onAddRecipients,
    onClearRecipients: dispatchProps.onClearRecipients,
    recipients: stateProps.recipients,
  }),
  'RecipientsContainer'
)(Recipients)
