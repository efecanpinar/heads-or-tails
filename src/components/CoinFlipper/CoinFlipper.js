import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tail",
      flipping: false,
      total: { totalCount: 0, totalTail: 0, totalHead: 0 },
    };
  }

  handleClick = () => {
    this.state.total.totalCount++;
    var oneOrZero = Math.random();
    if (oneOrZero < 0.5) {
      oneOrZero = 0;
      this.setState({ side: "head" });
      this.state.total.totalHead++;
    } else {
      oneOrZero = 1;
      this.setState({ side: "tail" });
      this.state.total.totalTail++;
    }
    this.setState({ flipping: true });
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Heads or Tails?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>Flip!</button>
        {this.state.total.totalCount > 0 && (
          <p>
            Total number of flips:
            <strong> {this.state.total.totalCount} </strong>
            <br />
            Number of heads:
            <strong> {this.state.total.totalHead} </strong>
            <br />
            Number of tails:
            <strong> {this.state.total.totalTail} </strong>
          </p>
        )}
      </div>
    );
  }
}

export default CoinFlipper;
