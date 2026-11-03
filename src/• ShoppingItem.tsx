import React from 'react';

// Описываем интерфейс для объекта покупки
interface Item {
  id: number;
  name: string;
  price: number;
}

// Описываем типы для props
interface ShoppingItemProps {
  item: Item;
  onDelete: (id: number) => void;
}

class ShoppingItem extends React.Component<ShoppingItemProps> {
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
