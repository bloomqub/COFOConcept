// ButtonApp.js
import useEffects from "react"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const amount = "2"
const currency = "USD"
const style = {"layout":"vertical"}

useEffect(()=> {
    dispatchEvent({
        type:"resetOptions",
        value: {
            ...options,
            currency: currency,
        },
    })
}, [currency, showSpinner]);

export default function App() {
    return (
        <PayPalScriptProvider options={{ "client-id": "ASc1Og7rOWpkTj76OLDbMxz80VSdpKm76aVbdXNPcmJM4hiJFN1LkhPG5bIUOFHN7euO5Cim0mIsSGEg" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "1.99",
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    });
                }}
            />
        </PayPalScriptProvider>
    );
}