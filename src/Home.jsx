import React, { useState } from 'react';
import {
    Box, Typography, Card, CardContent, CardMedia, Container, Grid, Button,
    CardActions
} from '@mui/material';

const initialCategories = [
    {
        name: 'T-shirts',
        items: [
            { id: 1, photo: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', price: '$29.99' },
            { id: 2, photo: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', price: '$24.99' },
            { id: 3, photo: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', price: '$19.99' },
            { id: 4, photo: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', price: '$22.99' },
        ]
    },
    {
        name: 'Pants',
        items: []
    },
    {
        name: 'Hoodies',
        items: []
    },
    {
        name: 'Rings',
        items: []
    }
];

const Home = () => {
    const [categories, setCategories] = useState(initialCategories);

    const handleRemoveItem = (categoryName, itemId) => {
        
    };

    return (
        <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 4 }}>
            {categories.map((category) => (
                <Box key={category.name} sx={{ marginBottom: 4 }}>
                    <Typography variant="h5" sx={{ marginBottom: 2 }}>
                        {category.name}
                    </Typography>
                    <Box sx={{
                        border: '1px solid #e0e0e0',
                        borderRadius: 1,
                        padding: 2,
                        marginBottom: 2
                    }}>
                        <Grid container spacing={2}>
                            {category.items.map((item) => (
                                <Grid item xs={12} sm={6} md={3} key={item.id}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={item.photo}
                                            alt={`Product ${item.id}`}
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.price}
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{ justifyContent: 'flex-end' }}>
                                            <Button 
                                                size="small" 
                                                color="error"
                                                onClick={() => handleRemoveItem(category.name, item.id)}
                                            >
                                                Remove
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                            {category.items.length === 0 && (
                                <Grid item xs={12}>
                                    <Typography variant="body1" color="text.secondary" sx={{ paddingTop: 4, paddingBottom: 4, textAlign: 'center' }}>
                                        No products available in this category
                                    </Typography>
                                </Grid>
                            )}
                        </Grid>
                    </Box>
                </Box>
            ))}

            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ paddingLeft: 4, paddingRight: 4 }}
                >
                    Add Product
                </Button>
            </Box>
        </Container>
    );
};

export default Home;