import { Link } from 'react-router-dom';

function Home() {
  // Dummy products data
  const featuredProducts = [
    { id: 1, name: 'Product 1', price: '$10.00', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '$20.00', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: '$30.00', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: '$40.00', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#333', color: 'white', padding: '2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>E-Commerce</h2>
        <nav>
          <Link to="/" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Home</Link>
          <Link to="/about" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>About</Link>
          <Link to="/login" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Login</Link>
          <Link to="/register" style={{ color: 'white', margin: '0 1rem', textDecoration: 'none' }}>Register</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#f4f4f4', padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Discover amazing products at great prices!</p>
        <button style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Shop Now</button>
      </section>

      {/* Featured Products */}
      <section style={{ padding: '2rem' }}>
        <h2 style={{ textAlign: 'center' }}>Featured Products</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          {featuredProducts.map(product => (
            <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: '200px', textAlign: 'center' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button style={{ padding: '0.5rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '1rem' }}>
        <p>&copy; 2023 E-Commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
