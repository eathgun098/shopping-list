import React from 'react';

class ShoppingItem extends React.Component {
  render() {
    const { item, onDelete } = this.props;

    return (
      <li style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', borderBottom: '1px solid #ccc' }}>
        <span>{item.name} — {item.price} руб.</span>
        <button onClick={() => onDelete(item.id)} style={{ color: 'red', cursor: 'pointer' }}>
          Удалить
        </button>
      </li>
    );
  }
}

export default ShoppingItem;
