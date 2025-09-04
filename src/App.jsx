import React from 'react'
import './App.css'
import FilterableProductTable from './filterable-product-table/FilterableProductTable'
import PRODUCTS from './product';

export default function App() {
  return (
    <>
    <FilterableProductTable products={PRODUCTS} /> 
    </>
    );
}