import './App.css';

function Article({ article, addToCart, isSelected }) {
  return (
    <div className={`article ${isSelected ? 'selected' : ''}`}>
      <h2>{article.artic}</h2>
      <p>{article.desctription}</p>
      <p>Price: ${article.prix}</p>
      <button onClick={() => addToCart(article)}>+</button>
    </div>
  );
}

export default Article;