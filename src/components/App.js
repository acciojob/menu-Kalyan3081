import React, { useState } from 'react';
import MenuItems from './menuAPI'; // Assuming this contains your data
import styles from './menuCard.module.css';

const App = () => {
    const [category, setCategory] = useState('all'); // Ensure default category is 'all'

    // Filter the MenuItems based on selected category
    const filteredCategory = category === 'all'
        ? MenuItems
        : MenuItems.filter((item) => item.category === category);

    return (
        <>
            <div className={styles.maincontainer}>
                <h1>Our Menu</h1>
                <ul>
                    <li onClick={() => setCategory('all')}>All</li>
                    <li onClick={() => setCategory('breakfast')}>Breakfast</li>
                    <li onClick={() => setCategory('lunch')}>Lunch</li>
                    <li onClick={() => setCategory('shakes')}>Shakes</li>
                </ul>
            </div>
            <div className={styles.container}>
                {/* Map through filteredCategory instead of MenuItems */}
                {filteredCategory.map((item) => (
                    <div key={item.id} className={styles.menucard}>
                        <div className={styles.img}>
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className={styles.details}>
                            <div className={styles.titlePrice}>
                                <h3 className={styles.title}>{item.title}</h3>
                                <div className={styles.price}>$ {item.price}</div>
                            </div>
                            <div className={styles.desc}>{item.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default App;
