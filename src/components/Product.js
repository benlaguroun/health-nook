import React from 'react';
import './Product.css';

const products = [
  {
    image: require('../images/product-1.jpg'),
    title: 'Organic Protein Powder',
    description: 'Fuel your workouts with our all-natural protein powder.',
    price: '$29.99',
  },
  {
    image: require('../images/product-2.jpg'),
    title: 'Yoga Mat',
    description: 'Practice yoga with our comfortable and durable mat.',
    price: '$19.99',
  },
  {
    image: require('../images/product-3.jpg'),
    title: 'Herbal Detox Tea',
    description: 'Detox your body with our soothing herbal tea blend.',
    price: '$14.99',
  },
];

const Product = () => {
  return (
    <section id="product" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Our Wellness Products</h2>
          <p className="text-muted">Explore our range of products to support your healthy lifestyle.</p>
        </div>
        <div className="row">
          {products.map((product, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card product-card shadow h-100 text-center">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                  <p className="card-text text-primary font-weight-bold">{product.price}</p>
                  <div className="mt-auto">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
