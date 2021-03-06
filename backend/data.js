import bcrypt from "bcryptjs";

const data = {
    users: [
        {
            name: 'Cliff',
            email: 'cliff@cliff.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'john@john.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {

            name: 'Nike sleve Shirt',
            category: 'Shirt',
            image: '/images/1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 1.5,
            numReviews: 10,
            description: 'High quality product',
        },
        {

            name: 'Nike Slim',
            category: 'Pants',
            image: '/images/2.jpg',
            price: 170,
            countInStock: 20,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 15,
            description: 'High quality product',
        },
        {

            name: 'Gucci Slim Shirt',
            category: 'Shirt',
            image: '/images/3.jpg',
            price: 130,
            countInStock: 0,
            brand: 'Nike',
            rating: 5.0,
            numReviews: 8,
            description: 'High quality product',
        },
        {

            name: 'Gucci Slim',
            category: 'Shirt',
            image: '/images/1.jpg',
            price: 150,
            countInStock: 15,
            brand: 'Puma',
            rating: 1.5,
            numReviews: 10,
            description: 'High quality product',
        },
        {

            name: 'Puma Slim Shirt',
            category: 'Pants',
            image: '/images/2.jpg',
            price: 90,
            countInStock: 12,
            brand: 'Nike',
            rating: 3.5,
            numReviews: 17,
            description: 'High quality product',
        },
        {

            name: 'Puma Slim',
            category: 'Shirt',
            image: '/images/3.jpg',
            price: 100,
            countInStock: 5,
            brand: 'Nike',
            rating: 2.5,
            numReviews: 10,
            description: 'High quality product',
        },

    ]
};

export default data;