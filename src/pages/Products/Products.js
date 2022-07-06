import React from 'react';
import productsData from '../../utils/products.json';

// Components
import ProductCard from '../../components/ProductCard';
import { MainContainer } from './Products.styled';

const Products = () => {
  const {
    data: { products },
  } = productsData;

  return (
    <MainContainer>
      {products.items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </MainContainer>
  );
};

export default Products;
