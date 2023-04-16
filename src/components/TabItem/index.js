import './index.css'

const TabItem = props => {
  const {tabDetails, updatingTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTab = () => {
    updatingTab(tabId)
  }

  const name = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${name}`} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
