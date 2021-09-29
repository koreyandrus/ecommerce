import React, { useState, useEffect } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularPgrogress, Divider, Button } from '@material-ui/core';

import { commerce } from '../../../lib/commerce';

import useStyles from './styles';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Shipping address', 'Payment details'];


const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();

    useEffect(() => {
        const generateToken = async () => {
            try {
                const toke = await commerce.checkout.generateToken();
            } catch (error) {
                
            }
        }
    }, []);

    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    )

    const Form = () => 
        activeStep === 0 
        ? <AddressForm />
        : <PaymentForm />
    
    return (
        <>
            <div className={classes.toolbar}>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4" align="center">
                            <Stepper activeStep={activeStep} className={classes.stepper}>
                                {steps.map((step) => (
                                    <Step key={step}>
                                        <StepLabel>{step}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            {activeStep === steps.length ? <Confirmation /> : <Form />}
                        </Typography>
                    </Paper>
                </main>
            </div>   
        </>
    )
}

export default Checkout
