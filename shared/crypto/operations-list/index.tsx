import * as React from 'react'
import * as Kb from '../../common-adapters'
import * as Styles from '../../styles'
import * as Constants from '../../constants/crypto'
import * as Types from '../../constants/types/crypto'
import {memoize} from '../../util/memoize'
import OperationRow from './operation-row/container'

type Props = {
  children?: React.ReactNode
  routeSelected: Types.CryptoSubTab
}

type Row = {
  isSelected: boolean
  title: string
  tab: Types.CryptoSubTab
}

const rows: Array<Row> = [
  {
    isSelected: false,
    tab: Constants.encryptTab,
    title: Constants.TabTitles[Constants.encryptTab],
  },
  {
    isSelected: false,
    tab: Constants.decryptTab,
    title: Constants.TabTitles[Constants.decryptTab],
  },
  {
    isSelected: false,
    tab: Constants.signTab,
    title: Constants.TabTitles[Constants.signTab],
  },
  {
    isSelected: false,
    tab: Constants.verifyTab,
    title: Constants.TabTitles[Constants.verifyTab],
  },
]

class OperationsList extends React.PureComponent<Props> {
  static navigationOptions = ownProps => ({
    header: undefined,
    title: `Crypto Toolkit • ${Constants.TabTitles[ownProps.routeSelected] ||
      Constants.TabTitles[Constants.encryptTab]}`,
  })
  private getRows = memoize((routeSelected: string) =>
    rows.map(r => ({
      ...r,
      isSelected: routeSelected === r.tab,
    }))
  )

  private renderItem = (_: number, row: Row) => {
    return <OperationRow key={row.tab} isSelected={row.isSelected} title={row.title} tab={row.tab} />
  }

  render() {
    return (
      <Kb.Box2 direction="horizontal" fullHeight={true} fullWidth={true}>
        <Kb.Box2 direction="vertical" fullHeight={true} style={styles.operationsListContainer}>
          <Kb.BoxGrow>
            <Kb.List
              items={this.getRows(this.props.routeSelected)}
              renderItem={this.renderItem}
              keyProperty="key"
              style={styles.list}
            />
          </Kb.BoxGrow>
        </Kb.Box2>
        {this.props.children}
      </Kb.Box2>
    )
  }
}

const styles = Styles.styleSheetCreate(() => ({
  list: {
    ...Styles.globalStyles.fullHeight,
    borderRightColor: Styles.globalColors.black_10,
    borderRightStyle: 'solid',
    borderRightWidth: 1,
  },
  operationsListContainer: {
    backgroundColor: Styles.globalColors.blueGrey,
    borderStyle: 'solid',
    flexGrow: 0,
    flexShrink: 0,
    width: 180,
  },
}))

export default OperationsList
