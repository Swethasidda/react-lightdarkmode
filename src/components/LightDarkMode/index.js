// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    small: 'small-container',
    heading: 'heading',
    buttonText: 'Light Mode',
  }

  onLightMode = () => {
    const {small, heading, buttonText} = this.state
    if (
      small === 'small-container' &&
      heading === 'heading' &&
      buttonText === 'Light Mode'
    ) {
      this.setState(() => ({
        small: 'small-container1',
        heading: 'heading1',
        buttonText: 'Dark Mode',
      }))
      console.log('1')
    } else {
      this.setState(() => ({
        small: 'small-container',
        heading: 'heading',
        buttonText: 'Light Mode',
      }))
      console.log('2')
    }
  }

  render() {
    const {small, heading, buttonText} = this.state
    return (
      <div className="big-container">
        <div className={small}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onLightMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
