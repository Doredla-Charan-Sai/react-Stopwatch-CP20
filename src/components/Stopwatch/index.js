// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {seconds: 0}

  componentWillUnmount() {
    this.clearIntervalItem()
  }

  onStart = () => {
    this.timerId = setInterval(() => {
      this.setState(prevState => ({seconds: prevState.seconds + 1}))
    }, 1000)
  }

  onPause = () => {
    this.clearIntervalItem()
  }

  onReset = () => {
    this.clearIntervalItem()
    this.setState({seconds: 0})
  }

  clearIntervalItem = () => clearInterval(this.timerId)

  render() {
    const {seconds} = this.state
    return (
      <div className="bg-cont">
        <div className="content-cont">
          <h1 className="main-head">Stopwatch</h1>
          <div className="cont">
            <div className="icon-cont">
              <img
                className="icon"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="para">Timer</p>
            </div>
            <h1>
              {Math.floor(seconds / 60) < 10
                ? `0${Math.floor(seconds / 60)}`
                : Math.floor(seconds / 60)}
              :
              {Math.floor(seconds % 60) < 10
                ? `0${Math.floor(seconds % 60)}`
                : Math.floor(seconds % 60)}
            </h1>
            <div className="btns-cont">
              <button
                className="btn start"
                type="button"
                onClick={this.onStart}
              >
                Start
              </button>
              <button className="btn stop" type="button" onClick={this.onPause}>
                Stop
              </button>
              <button className="btn end" type="button" onClick={this.onReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
