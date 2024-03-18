import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, tossResult: 0}

  getRandomNumber = () => Math.floor(Math.random() * 2)

  onClickTossCoin = () => {
    const randomNumber = this.getRandomNumber()
    this.setState({tossResult: randomNumber})
    if (randomNumber === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
  }

  render() {
    const {heads, tails, tossResult} = this.state

    const tossImage =
      tossResult === 0
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="container">
        <div className="card">
          <h1>Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={tossImage} className="image" alt="toss result" />
          <button type="button" onClick={this.onClickTossCoin}>
            Toss Coin
          </button>
          <div className="result-card">
            <p className="result">Total: {heads + tails}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
