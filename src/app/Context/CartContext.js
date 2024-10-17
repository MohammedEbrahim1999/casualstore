'use client';
import { createContext, useState, useEffect } from 'react';

export const CountContext = createContext();

export const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Retrieve count and cartItems from localStorage on mount, if exists
        const savedCount = localStorage.getItem('count');
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCount) {
            setCount(Number(savedCount));
        }
        if (savedCartItems) {
            setCartItems(JSON.parse(savedCartItems)); // Parse the JSON string back to an array
        }
    }, []);

    // Function to calculate total item count in the cart
    const calculateTotalCount = (cart) => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const incrementCount = (product) => {
        setCartItems((prevItems) => {
            // Check if product is already in the cart
            const existingItemIndex = prevItems.findIndex((item) => item.productId === product.productId);

            if (existingItemIndex !== -1) {
                // If product is already in the cart, increase the quantity
                const updatedCart = [...prevItems];
                updatedCart[existingItemIndex] = { ...updatedCart[existingItemIndex], quantity: updatedCart[existingItemIndex].quantity + 1 };
                localStorage.setItem('cartItems', JSON.stringify(updatedCart));

                // Update count based on total quantity
                const newCount = calculateTotalCount(updatedCart);
                localStorage.setItem('count', newCount);
                setCount(newCount);

                return updatedCart;
            } else {
                // If product is new, add it to the cart with quantity 1
                const updatedCart = [...prevItems, { ...product, quantity: 1 }];
                localStorage.setItem('cartItems', JSON.stringify(updatedCart));

                // Update count based on total quantity
                const newCount = calculateTotalCount(updatedCart);
                localStorage.setItem('count', newCount);
                setCount(newCount);

                return updatedCart;
            }
        });
    };

    const resetCount = () => {
        setCount(0);
        setCartItems([]); // Reset the cart items
        localStorage.setItem('count', 0);
        localStorage.setItem('cartItems', JSON.stringify([])); // Clear cartItems in localStorage
    };

    // Function to increase product quantity in the cart (from outside)
    const Add = (productId) => {
        setCartItems((prevItems) => {
            const updatedCart = prevItems.map(item => {
                if (item.productId === productId) {
                    return { ...item, quantity: item.quantity + 1 };  // Increase the quantity
                }
                return item;
            });
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));

            // Update count based on total quantity
            const newCount = calculateTotalCount(updatedCart);
            localStorage.setItem('count', newCount);
            setCount(newCount);

            return updatedCart;
        });
    };

    // Function to decrease product quantity in the cart (from outside)
    const Rem = (productId) => {
        setCartItems((prevItems) => {
            const updatedCart = prevItems
                .map(item => {
                    if (item.productId === productId) {
                        // If quantity is 1, remove the item from the cart
                        if (item.quantity === 1) {
                            return null;  // Mark for removal
                        }
                        return { ...item, quantity: item.quantity - 1 };  // Decrease the quantity
                    }
                    return item;
                })
                .filter(item => item !== null);  // Filter out items marked for removal (null)

            localStorage.setItem('cartItems', JSON.stringify(updatedCart));

            // Update count based on total quantity
            const newCount = calculateTotalCount(updatedCart);
            localStorage.setItem('count', newCount);
            setCount(newCount);

            return updatedCart;
        });
    };

    return (
        <CountContext.Provider value={{ count, cartItems, incrementCount, resetCount, Add, Rem }}>
            {children}
        </CountContext.Provider>
    );
};
