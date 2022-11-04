import React from 'react';
import TourItem from './TourItem.js';
import tourData from '../../assets/tourdata.json';
import { MenuItem, Select } from '@mui/material';
import styles from './Tours.module.css';
import { ShoppingCartRounded } from '@mui/icons-material';
import { useCart } from './useCart.js';
import { useCurrency } from './useCurrency.js';

function Tours() {
    const {currency, setCurrency, getCurrencyConversion} = useCurrency();

    const {
        cartTotal,
        cartCount,
        addToCart,
        deleteFromCart
    } = useCart();

    const handleChange = (event) => {
        setCurrency(event.target.value)
    }

    return (
        <>
            <h2>Tours</h2>
            <div className={styles.tourHeader}>
                <div className={styles.filters}>
                    <Select
                        labelId="currency-label"
                        id="currency"
                        value={currency}
                        label="Currency"
                        onChange={handleChange}
                        className={styles.dropdown}
                    >
                        <MenuItem value={0}>USD</MenuItem>
                        <MenuItem value={1}>EUR</MenuItem>
                    </Select>
                </div>
                <div className={styles.cartContainer}>
                    {cartTotal > 0 ? <span className={styles.cartTotal}>${cartTotal}</span>: null}
                    <ShoppingCartRounded 
                        className={styles.cart}
                        fontSize={'large'}
                    />
                    {cartCount > 0 ? <span className={styles.counter}>{cartCount}</span>: null}
                </div>
            </div>
            <section className={styles.toursContainer}>
                {tourData.map((tour) =>
                    <TourItem 
                        key={tour.id}
                        tour={tour}
                        addToCart={addToCart}
                        deleteFromCart={deleteFromCart}
                    />
                )}
            </section>
        </>
    );
}

export default Tours;
