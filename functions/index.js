const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
    'sk_test_51HQZJ3HqRo5BWl9qY99wFKQ0HBFUI4feTwgFRqMryebkmAU6O5ECno6DlWSx9ecT2AHLEs9jxE3P7yUXqXY98tfK00I6nP8FxH'
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-986ed/us-central1/api

