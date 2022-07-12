import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store';

// Components
import TextField from '@mui/material/TextField';
import ProductCard from '../../components/ProductCard';
import { MainContainer, SearchContainer } from './Products.styled';
import Loading from '../../components/common/Loading';

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, favorites } = useSelector(
    (state) => state.products
  );
  const [filteredProducts, setFilteredProducts] = useState([]);
  const favoriteProductsIds = useMemo(() => {
    return favorites.map((favorite) => favorite.id);
  }, [favorites]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProducts(products.items);
  }, [products]);

  if (loading) {
    return <Loading />;
  }

  /**
   * Filters the products base on the typed
   * value. The filter proccess is debounced
   * to avoid this computation with every key
   * stroke
   * @param {*} event
   */
  let filterTimeout;
  const onSearch = (event) => {
    clearTimeout(filterTimeout);
    const { value } = event.target;
    filterTimeout = setTimeout(() => {
      const filteredProducts = products.items.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filteredProducts);
    }, 500);
  };

  const isFavorite = (idx) =>
    favoriteProductsIds.includes(products.items[idx].id);

  return (
    <div>
      <SearchContainer>
        <TextField
          fullWidth
          label='Search product...'
          type='search'
          variant='outlined'
          onChange={onSearch}
        />
      </SearchContainer>
      <MainContainer>
        {filteredProducts?.map((product, idx) => (
          <ProductCard
            isFavorite={isFavorite(idx)}
            key={product.id}
            product={product}
          />
        ))}
      </MainContainer>
    </div>
  );
};

export default Products;
