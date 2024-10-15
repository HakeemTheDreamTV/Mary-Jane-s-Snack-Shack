// stripe payment
let stripeGateway = stripe(process.env.stripe_key);

let DOMAIN = process.env.DOMAIN;

app.post('/stipe-checkout', async (req, res) => {
    
    const session = await stripeGateway.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        success_url: `${DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}&order=${encodeURI(JSON.stringify(req.body))}`,
        cancel_url: `${DOMAIN}/checkout?payment_fail=true`,
        line_items: req.body.items.map(item => {
            return {
               price_data: {
                   currency: "usd",
                   product_data: {
                       name: item.name,
                       description: item.shortDes,
                       images: [item.image]
                   },
                   unit_amount: item.price * 100
               },
               quantity: item.item 
            }
        })
    })

    res.json(session.url)
})

app.get('/success', async (req, res) => {
    let { order, session_id } = req.query;
    order = decodeURI(order);
    
    try{
        const session = await stripeGateway.checkout.sessions.retrieve(session_id);
        // const customer = await stripeGateway.customers.retrieve(session.customer);

        const customer = session.customer_details.email;

        let date = new Date();

        let orders_collection = collection(db, "orders");
        let docName = `${customer.email}-order-${date.getTime()}`;

        setDoc(doc(orders_collection, docName), JSON.parse(order))
        .then(data => {
            res.redirect('/checkout?payment=done')
        })

    } catch(err){
        console.log(err)
        res.json(err);
        // res.redirect("/404");
    }
})