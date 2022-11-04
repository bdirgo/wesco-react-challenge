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
                    {cartTotal > 0 ? <span className={styles.cartTotal}>{getCurrencyConversion(cartTotal)}</span>: null}
                    <ShoppingCartRounded 
                        className={styles.cart}
                        fontSize={'large'}
                    />
                    {cartCount > 0 ? <span className={styles.counter}>{cartCount}</span>: null}
                </div>
            </div>
            <section className={styles.toursContainer}>
                <div className='row'>
                {tourData.map((tour) =>
                    <div className='col-lg-4'>
                        <TourItem 
                            key={tour.id}
                            tour={tour}
                            price={getCurrencyConversion(tour.price)}
                            addToCart={addToCart}
                            deleteFromCart={deleteFromCart}
                        />
                    </div>
                )}
                </div>
            </section>
        </>
    );
}

export default Tours;
