import React, { useEffect } from 'react'
import { useRef } from 'react'

export default function Paypal() {
  const paypal = useRef()
  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: 'CAPTURE',
          purchase_units: [
            {
              description: 'Workout Video',
              amount: {
                currency_code: 'USD',
                value: 10.0,
              },
            },
          ],
        })
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture()
        console.log(order)
      },
      onError: (err) => {
        console.log(err)
      },
    }).render(paypal.current)
  }, [])
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  )
}
