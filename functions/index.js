

const functions = require("firebase-functions");

const express =require('express');
const cors=require('cors');

const stripe=require('stripe')(
    'sk_test_51MMYGvEG0azaGJE8qY5nYIMZRVwN2oJZkvWVu4IrkGmGlTBK4dFnSIsdwiPyAerVGPvnV0ZeqlJwgI9J8VN9HnHK00pdg9wzqG'

);
const app=express();
app.use(cors({origin:true}));
app.use(express.json());

app.get('/',(request,response)=>response.status(200).send('hello world'));
app.post("/payments/create",async(request,response)=>{
    const total=request.query.total;
    console.log('Payment Request Recieved for this amount >>>',total );
    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency:'usd'
    })
        response.status(201).send({
            clientSecret: paymentIntent.client_secret,
        })
    })


exports.app=functions.https.onRequest(app)