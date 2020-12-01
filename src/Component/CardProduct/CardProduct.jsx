import React, { Component } from "react";
import Counter from "../../Container/Pages/Product/Counter/Counter";

export default class CardProduct extends Component {
  render() {
    return (
      <div className="product">
        <div className="images">
          <img
            src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/sayur/Cabai+Hijau+Besar.jpg"
            alt="My product"
          />
        </div>
        <p className="title">Cabai Hijau Besar 100gr</p>
        <p className="price">Rp 4.005 ,-</p>
        <Counter />
      </div>
    );
  }
}
