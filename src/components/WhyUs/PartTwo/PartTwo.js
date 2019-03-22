import React, { Component } from 'react'
import './PartTwo.css';

export default class PartTwo extends Component {
  render() {
    return (
      <div className="PartTwo">
        <div>
          <h4>Let's find the right targets</h4>
          <p>
            We find people who best match your product. We develop sample
            prospect sheets for you to give you a better idea of ​​the
            target market.
          </p>
        </div>

        <div>
          <h4>Let's find what works best</h4>
          <p>
            We identify the characteristics of your product that people
            prefer, and also what they like less, in purpose to give you a
            complete and quick overview of your product on the market.
          </p>
        </div>

        <div>
          <h4>Let's find the needs</h4>
          <p>
            By discovering the reality of a use case that is common to a
            large part of users. And by looking at the moments of
            consumption, we find out why people use your product?
          </p>
          <p>
            Reasons not always obvious to you and that will help you greatly
            in your development and will save you valuable time.
          </p>
        </div>
      </div>
    );
  }
}
