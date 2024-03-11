const OptionItem = props => {
  const {OptionDetails} = props
  const {displayText} = OptionDetails
  return <option>{displayText}</option>
}

export default OptionItem
