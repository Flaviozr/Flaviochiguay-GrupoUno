export const fetchProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, image: './Images/ZAPAS1.jpg', title: 'Zapatillas adidas VL Court 3.0', price: '$60.990' },
                { id: 2, image: './Images/ZAPAS5.jpg', title: 'Zapatillas Nike Dunk Low Viotech', price: '$211.990' },
                { id: 3, image: './Images/ZAPAS4.jpeg', title: 'Zapatillas Urbanas Hombre New Balance 9060 Morada', price: '$80.990' },
                { id: 4, image: './Images/nikekek.png', title: 'Zapatillas Urbanas Hombre New Balance Ml574evb Negro', price: '$52,990' },
                { id: 5, image: './Images/ZAPAS2.jpg', title: 'Zapatillas Nike Air Max 90', price: '$130.990' },
                { id: 6, image: './Images/ZAPAS3.jpeg', title: 'Zapatillas Forum Low', price: '$80.990' },
                { id: 7, image: './Images/ZAPAS4.jpeg', title: 'Zapatillas New Balance 550 White Green Men', price: '$80.990' },
                { id: 8, image: './Images/ZAPAS5.jpg', title: 'Zapatillas Nike Full Force Low', price: '$74.990' },
                { id: 9, image: './Images/ZAPAS6.jpeg', title: 'Zapatillas Nike Air Max Dn', price: '$120.990' },
                { id: 10, image: './Images/ZAPAS7.jpeg', title: 'Zapatillas Adidas Handball Spezial Originals', price: '$89.990' },
                { id: 11, image: './Images/ZAPAS8.jpg', title: 'Zapatillas Nike Gamma Force', price: '$90.990' },
                { id: 12, image: './Images/ZAPAS9.jpeg', title: 'Zapatilla New Balance 725 Unisex Negro', price: '$89.990' },
                { id: 13, image: './Images/ZAPAS10.jpeg', title: 'Zapatillas Nike Journey Run', price: '$79.990' },
                { id: 14, image: './Images/ZAPAS11.jpeg', title: 'Adidas Zapatillas Gazelle Chile Originals', price: '$59.990' },
                { id: 15, image: './Images/ZAPAS9.jpeg', title: 'Zapatilla New Balance 725 Unisex Negro', price: '$89.990' },
                { id: 16, image: './Images/ZAPAS10.jpeg', title: 'Zapatillas Nike Journey Run', price: '$79.990' },
                { id: 17, image: './Images/ZAPAS11.jpeg', title: 'Adidas Zapatillas Gazelle Chile Originals', price: '$59.990' },
            ]);
        }, 2000);
    });
};
