#!/usr/bin/env node

import {CoffeeMachine} from "./classes/CoffeeMachine";
import {Order} from "./classes/Order";

const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
const port = 8000

app.use(bodyParser.json());
app.use(cors())

app.put('/make', (req: any, res: any ) => {
    console.log(req.body);
    const order: Order = new Order(
        req.body.drinkType,
        req.body.money,
        req.body.sugarQuantity || undefined,
        req.body.isExtraHot || undefined
    );

    if(!order.hasRequiredParams()){
        console.log("400, bad request");
        res.status(400).send('drinkType and money are required parameters.');
    };

    const machine: CoffeeMachine = new CoffeeMachine();

    res.send(machine.execute(order));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})