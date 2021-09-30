import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = ({ checkoutToken }) => {
    return (
        <>
            <Typography variant="h6" gutterBottom>Order Summary</Typography>   
            <List disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem>
                        
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default Review
