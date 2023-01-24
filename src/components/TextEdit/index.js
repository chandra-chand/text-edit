import {Component} from 'react'

import './index.css'

class TextEdit extends Component {
  state = {text: '', isClicked: false}

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {text, isClicked} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="head">Editable Text Input</h1>
          {isClicked === true ? (
            <div>
              <p className="para">{text}</p>
              <button
                type="button"
                className="button"
                onClick={this.onClickButton}
              >
                Edit
              </button>
            </div>
          ) : (
            <div>
              <input
                type="text"
                className="input"
                value={text}
                onChange={this.onChangeText}
              />
              <button
                className="button"
                type="button"
                onClick={this.onClickButton}
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default TextEdit
