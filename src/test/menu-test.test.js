import React, { useState } from 'react'
import { screen, render } from '@testing-library/react'
import { CollectionProduct } from '../components/CollectionProduct'
import { productsData } from '../data/productsData';
import '@testing-library/jest-dom';


describe('CollectionProduct', () => {
 
    it('must display a litle', ()=> {
        render(<CollectionProduct
            products={productsData}
          />)
        expect(screen.queryByText(/Add to cart/i)).toBeInTheDocument();
    });
});