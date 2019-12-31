import * as React from 'react'
import * as Kb from '../../common-adapters'
import * as Styles from '../../styles'
import OperationInput from '../input'
import OperationOutput from '../output'
import Recipients from '../recipients/container'

const EncryptOptions = () => {
  const onCheck = () => {}
  return (
    <Kb.Box2 direction="horizontal" fullWidth={true} gap="medium" style={styles.optionsContainer}>
      <Kb.Checkbox label="Include yourself" disabled={true} checked={true} onCheck={onCheck} />
      <Kb.Checkbox label="Sign" disabled={true} checked={true} onCheck={onCheck} />
      <Kb.Checkbox label="Use PGP" disabled={true} checked={false} onCheck={onCheck} />
    </Kb.Box2>
  )
}

const OutputBar = () => (
  <Kb.Box2 direction="horizontal" fullWidth={true} style={styles.outputBarContainer}>
    <Kb.ButtonBar direction="row" style={styles.buttonBar}>
      <Kb.Button mode="Primary" label="Copy to clipboard" fullWidth={true}></Kb.Button>
      <Kb.Button mode="Primary" label="Download as TXT file" fullWidth={true}></Kb.Button>
    </Kb.ButtonBar>
  </Kb.Box2>
)

const onAttach = (localPaths: Array<string>) => {
  console.log('JRY onAttach localPaths', {localPaths})
}
const Encrypt = () => {
  return (
    <Kb.Box2 direction="vertical" fullWidth={true} fullHeight={true} style={styles.container}>
      <Kb.DragAndDrop allowFolders={true} fullHeight={true} fullWidth={true} onAttach={onAttach}>
        <Recipients />
        <Kb.Box2 direction="vertical" fullHeight={true}>
          <OperationInput placeholder="Write something or drop a file you want to encrypt" />
          <Kb.Divider />
          <EncryptOptions />
          <Kb.Divider />
          <OperationOutput placeholder="Output" />
          <Kb.Divider />
          <OutputBar />
        </Kb.Box2>
      </Kb.DragAndDrop>
    </Kb.Box2>
  )
}

const styles = Styles.styleSheetCreate(
  () =>
    ({
      buttonBar: {
        height: Styles.globalMargins.large,
        minHeight: Styles.globalMargins.large,
      },
      container: {},
      optionsContainer: {
        ...Styles.padding(Styles.globalMargins.tiny),
        height: Styles.globalMargins.xlarge,
      },
      outputBarContainer: {
        ...Styles.padding(Styles.globalMargins.tiny),
      },
    } as const)
)

Encrypt.navigationOptions = {
  header: undefined,
  title: 'Crypto Toolkit • Encrypt',
}

export default Encrypt
