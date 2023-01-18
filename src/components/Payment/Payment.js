import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./Payment.css";
import { db } from "../Firebase/Firebase";
import CurrencyFormat from "react-currency-format";
import { Link, useNavigate } from "react-router-dom";
import axios from "../Axios/axios";
import CheckoutProducts from "../CheckoutProduct/CheckoutProduct";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const getBasketTotal = (basket) =>
    basket.reduce((amount, item) => item.price + amount, 0);

  const stripe = useStripe();
  const elements = useElements();
  const [error, SetError] = useState(null);
  const [disabled, setDisable] = useState(true);

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >>>", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });


        setSucceeded(true);
        SetError(null);
        setProcessing(false);
        navigate("/orders");
      });
  };
  const handleChange = (event) => {
    setDisable(event.empty);
    SetError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          checkout(<Link to="/checkout">{basket?.length} item</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>510 east melbourne ave</p>
            <p> silver spring Maryland </p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProducts
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>payment Method</h3>
          </div>
          <div className="payment__details">
            <form  onSubmit={handleSubmit}> 
              <CardElement onChange={handleChange} />
              <div className="payment__PRICEContatainer">
                <CurrencyFormat
                  renderText={(value) => <h3>order Total:{value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
      )
    </div>
  );
}
export default Payment;
