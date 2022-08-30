import React, { Component } from 'react';
import PropTypes from 'prop-types';
class ShopItemFunc extends Component {
  render() {
    return (
      <div class="main-content">
        <h2>{this.props.item.brand}</h2>
        <h1>{this.props.item.title}</h1>
        <h3>{this.props.item.description}</h3>
        <div class="description">{this.props.item.descriptionFull}</div>
        <div class="highlight-window mobile">
          <div class="highlight-overlay"></div>
        </div>
        <div class="divider"></div>
        <div class="purchase-info">
          <div class="price">{`${this.props.item.currency}${this.props.item.price}`}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
};

ShopItemFunc.propTypes = {
  item: PropTypes.object.shape({
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    descriptionFull:PropTypes.string, 
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
}

export default ShopItemFunc;
