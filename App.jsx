import { useState } from 'react';
import Article from './arctic'
import Cart from './cart';
import './App.css';

function App() {
  const articles = [
    {
      artic: 'banan',
      desctription: 'Fresh yellow bananas',
      prix: 20,
    },
    {
      artic: 'pom de tair',
      desctription: 'Organic potatoes',
      prix: 20,
    },
    {
      artic: 'glasses',
      desctription: 'Stylish reading glasses',
      prix: 20,
    },
  ];

  const [cart, setCart] = useState([]);
  const [selectedArticles, setSelectedArticles] = useState([]);

  const addToCart = (article) => {
    setCart([...cart, article]);
    setSelectedArticles([...selectedArticles, article.artic]);
  };

  return (
    <>
      {articles.map((article, index) => (
        <div key={index}>
          <Article
            article={article}
            addToCart={addToCart}
            isSelected={selectedArticles.includes(article.artic)}
          />
        </div>
      ))}
      <Cart cart={cart} />
    </>
  );
}

export default App;