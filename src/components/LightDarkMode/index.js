// Write your code here
import './index.css'
import {Component} from 'react'

class lightDarkMode extends Component {
  state = {isDark: true}

  modeChange = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    let buttonText
    let cardColor
    let textColor
    const {isDark} = this.state

    if (isDark) {
      buttonText = 'Light Mode'
      cardColor = 'dark'
      textColor = 'textWhite'
    } else {
      buttonText = 'Dark Mode'
      cardColor = 'light'
      textColor = 'textBlack'
    }

    return (
      <div className="bg">
        <div className={`card ${cardColor}`}>
          <h1 className={`heading ${textColor}`}>Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.modeChange}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default lightDarkMode
