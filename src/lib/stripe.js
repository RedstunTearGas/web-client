let client = null;

const appendScript = () =>
  new Promise((resolve) => {
    const stripeJs = document.createElement('script');
    stripeJs.src = 'https://checkout.stripe.com/checkout.js';
    stripeJs.async = true;
    stripeJs.onload = resolve;
    if (document.body) {
      document.body.appendChild(stripeJs);
    }
  });

const getClient = async () => {
  if (!client) {
    await appendScript();
    client = window.StripeCheckout.configure({
      key: process.env.STRIPE_KEY,
      name: 'Redstun',
      currency: 'eur',
      locale: 'fr',
    });
  }

  return client;
};

export default getClient;
