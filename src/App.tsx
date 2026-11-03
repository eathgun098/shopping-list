import React, { ChangeEvent, FormEvent } from 'react';
import ShoppingItem from './ShoppingItem';

interface Item {
  id: number;
  name: string;
  price: number;
}

interface AppState {
  items: Item[];
  name: string;
  price: string;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      items: [
        { id: 1, name: 'Молоко', price: 100 },
        { id: 2, name: 'Хлеб', price: 50 }
      ],
      name: '',
      price: ''
    };
  }

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as unknown as Pick<AppState, keyof AppState>);
  };

  handleAddItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, price, items } = this.state;

    if (!name || !price) return;

    const newItem: Item = {
      id: Date.now(),
      name: name,
      price: parseFloat(price)
    };

    this.setState({
      items: [...items, newItem],
      name: '',
      price: ''
    });
  };

  handleDeleteItem = (id: number) => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  };

  render() {
    const { items, name, price } = this.state;
    const totalCost = items.reduce((sum, item) => sum + item.price, 0);

    return (
      <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
        <h2>Список покупок (TypeScript)</h2>
        
        <form onSubmit={this.handleAddItem} style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          <input 
            type="text" 
            name="name"
            placeholder="Название товара" 
            value={name}
            onChange={this.handleInputChange}
            required
          />
          <input 
            type="number" 
            name="price"
            placeholder="Цена" 
            value={price}
            onChange={this.handleInputChange}
            required
            min="0"
          />
          <button type="submit">Добавить</button>
        </form>

        {items.length === 0 ? (
          <p>Список покупок пуст</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {items.map(item => (
              <ShoppingItem 
                key={item.id} 
                item={item} 
                onDelete={this.handleDeleteItem} 
              />
            ))}
          </ul>
        )}

        <div style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '18px' }}>
          Общая стоимость: {totalCost} руб.
        </div>
      </div>
    );
  }
}

export default App;
