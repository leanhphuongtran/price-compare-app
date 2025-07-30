/* Original React app when first created:
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/


// /*
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [store, setStore] = useState('');
  const [price, setPrice] = useState('');
  const [items, setItems] = useState([]);

  // Fetch items from backend
  const fetchItems = async () => {
    const res = await axios.get('https://price-compare-app.onrender.com/api/items');
    setItems(res.data);
  };

  useEffect( () => {
    fetchItems(); // Load items when page loads
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !store || !price) return;

    await axios.post('https://price-compare-app.onrender.com/api/items', {
      name,
      store,
      price: parseFloat(price)
    });

    // Clear form
    setName('');
    setStore('');
    setPrice('');
    fetchItems(); // Refresh the list
  };

  return (
    <div style={{padding: 20}}>
      <h1>🛒 Price Compare App</h1>

      <form onSubmit={handleSubmit}>
        <input placeholder='Item name' value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder='Store' value={store} onChange={(e) => setStore(e.target.value)} />
        <input type='number' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
        <button type='submit'>Add Item</button>
      </form>

      <h2>📋 Saved Items</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item.name} - {item.store} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
// */