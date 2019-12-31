import * as React from 'react'
import * as Kb from '../../common-adapters'
import * as Styles from '../../styles'

type Props = {
  output?: string
  placeholder?: string
}

const Output = (props: Props) => {
  return (
    <Kb.Box2 direction="vertical" fullHeight={true} fullWidth={true} style={styles.container}>
      <Kb.Text type="Body" style={props.output ? styles.output : styles.placeholder}>
        {props.output ?? props.placeholder}
      </Kb.Text>
    </Kb.Box2>
  )
}

const styles = Styles.styleSheetCreate(
  () =>
    ({
      container: Styles.platformStyles({
        isElectron: {
          ...Styles.globalStyles.flexGrow,
          ...Styles.padding(Styles.globalMargins.tiny),
          overflowY: 'auto',
        },
      }),

      output: {},
      placeholder: {
        color: Styles.globalColors.black_50,
      },
    } as const)
)

export default Output
