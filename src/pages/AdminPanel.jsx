

import React, { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [prices, setPrices] = useState({
    WebCourse: '',
    Grafic: '',
    ScratchSection: '',
  });
  
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/prices')
      .then(response => response.json())
      .then(data => {
        setPrices(data); 
      });
  }, []);

  const updatePrice = (key, value) => {
    setPrices(prevPrices => ({ ...prevPrices, [key]: value }));
  };

  const savePrices = () => {
    fetch('http://localhost:3001/prices', {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(prices),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Сохраненные данные:', data); 
        alert('Цены успешно сохранены!'); 
      })
      .catch(error => {
        console.error('Ошибка при сохранении данных:', error);
        alert('Произошла ошибка при сохранении цен.');
      });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === 'Альтус') {
      setIsAuthenticated(true);
    } else {
      alert('Неверный пароль!');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ padding: '100px', display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <h1>Вход в панель администратора</h1>
        <form onSubmit={handlePasswordSubmit}>
          <label>
            Введите пароль:
            <input className='input'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className='btn' type="submit">Войти</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ padding: '100px',  display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", textAlign: "center" }}>
      <h1>Панель администратора</h1>
      <div>
        <label>
          Курс веб программирования:
          <input className='input'
            type="text"
            value={prices.WebCourse || ''}
            onChange={(e) => updatePrice("WebCourse", e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Курс графического дизайна:
          <input className='input'
            type="text"
            value={prices.Grafic || ''}
            onChange={(e) => updatePrice("Grafic", e.target.value)}
          />
        </label>
      </div>
      <div>
  <label>
    Курс NodeJs:
    <input className='input'
      type="text"
      value={prices.NodeJs || ''}
      onChange={(e) => updatePrice("NodeJs", e.target.value)}
    />
  </label>
</div>
      <div>
        <label>
           Курс Scratch:
          <input className='input'
            type="text"
            value={prices.ScratchSection || ''}
            onChange={(e) => updatePrice("ScratchSection", e.target.value)}
          />
        </label>
      </div>
      <div>
        <button className='btn' onClick={savePrices}>Сохранить изменения</button>
      </div>
    </div>
  );
};

export default AdminPanel;
