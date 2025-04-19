import React, { useEffect, useState } from 'react';

const categories = [
  { id: 1, name: 'Pain Relief', imageUrl: 'https://via.placeholder.com/150?text=Pain+Relief' },
  { id: 2, name: 'Vitamins & Supplements', imageUrl: 'https://via.placeholder.com/150?text=Vitamins' },
  { id: 3, name: 'Cold & Flu', imageUrl: 'https://via.placeholder.com/150?text=Cold+%26+Flu' },
  { id: 4, name: 'Diabetes Care', imageUrl: 'https://via.placeholder.com/150?text=Diabetes' },
];

const offers = [
  { id: 1, title: 'Summer Sale - Up to 30% Off', description: 'Get your medicines at discounted prices!', imageUrl: 'https://via.placeholder.com/600x200?text=Summer+Sale' },
  { id: 2, title: 'Buy 1 Get 1 Free', description: 'On select vitamins and supplements.', imageUrl: 'https://via.placeholder.com/600x200?text=BOGO' },
];

function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-blue-700">Quick-Commerce</h1>
          <nav>
            <a href="/" className="text-gray-700 hover:text-blue-600 mx-3 font-semibold">Home</a>
            <a href="/login" className="text-gray-700 hover:text-blue-600 mx-3 font-semibold">Login</a>
          </nav>
        </div>
      </header>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Fast & Reliable Medicine Delivery</h2>
          <p className="text-lg max-w-xl mx-auto mb-8">
            Get your medicines delivered to your doorstep in minutes. Search, order, and track easily.
          </p>
          <input
            type="text"
            placeholder="Search medicines..."
            className="w-full max-w-md px-4 py-3 rounded shadow focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      <section className="container mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Categories</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map(category => (
            <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <img src={category.imageUrl} alt={category.name} className="w-full h-32 object-cover" />
              <div className="p-4 text-center font-semibold text-gray-700">{category.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Offers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offers.map(offer => (
              <div key={offer.id} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img src={offer.imageUrl} alt={offer.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-lg text-gray-900">{offer.title}</h4>
                  <p className="text-gray-600">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Medicines</h3>
        {filteredProducts.length === 0 ? (
          <p className="text-gray-600">No medicines found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <img
                  src={product.imageUrl || 'https://via.placeholder.com/300x200?text=Medicine'}
                  alt={product.name}
                  className="h-48 w-full object-contain p-4 bg-gray-100"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h4 className="text-lg font-semibold text-gray-900">{product.name}</h4>
                  <p className="text-gray-600 flex-grow mt-2">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-blue-700 font-bold text-xl">${product.price.toFixed(2)}</span>
                    {product.discountPrice && (
                      <span className="text-gray-400 line-through text-sm">${product.discountPrice.toFixed(2)}</span>
                    )}
                  </div>
                  <button
                    className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition flex items-center justify-center"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <i className="fas fa-cart-plus mr-2"></i> Add to Cart
                  </button>
                  {product.prescriptionRequired && (
                    <span className="mt-2 inline-block bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded">
                      Prescription Required
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-4">Quick-Commerce</h4>
            <p>Fast and reliable medicine delivery service.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul>
              {categories.map(category => (
                <li key={category.id} className="mb-2 hover:underline cursor-pointer">{category.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <p>Email: support@quickcommerce.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Medicine St, Health City</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
