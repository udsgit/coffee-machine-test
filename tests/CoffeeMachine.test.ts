import {expect} from 'chai';
import {CoffeeMachine} from "../src/classes/CoffeeMachine";
import { Message } from '../src/classes/Message';
import { Order } from '../src/classes/Order';

describe("Coffee Machine full flow", () => {
    let coffeeMachine: CoffeeMachine = new CoffeeMachine();

    beforeEach(() => {
        coffeeMachine = new CoffeeMachine();
    })

    describe("Ordering a beverage with incorrect data", () => {
        it('Ordering a drink only with a misspelled name', function (){
            const order = new Order("cofi")
            const {text, isError} = new Message("The drink type should be tea, coffee or chocolate.", true);
            expect(text).to.equal(coffeeMachine.execute(order).text);
            expect(isError).to.equal(coffeeMachine.execute(order).isError);
        });
        it('Ordering a drink without the money', function (){
            const order = new Order("COFFEE")
            const {text, isError} = new Message("The coffee costs 50.", true);
            expect(text).to.equal(coffeeMachine.execute(order).text);
            expect(isError).to.equal(coffeeMachine.execute(order).isError);
        });
    })

    describe("Ordering a coffee with all possible options", () => {
        it('with little money', function (){
            const order = new Order("coffee", 10)
            const {text, isError} = new Message("The coffee costs 50.", true);
            expect(text).to.equal(coffeeMachine.execute(order).text);
            expect(isError).to.equal(coffeeMachine.execute(order).isError);
        });
        it('with a lot of money', function (){
            const order = new Order("coffee", 200)
            const {text, isError} = new Message("You have ordered a coffee.", false);
            expect(text).to.equal(coffeeMachine.execute(order).text);
            expect(isError).to.equal(coffeeMachine.execute(order).isError);
        });
        it('With the right price and 0 sugar', function (){
            const order = new Order("coffee", 50, 0)
            const {text, isError} = new Message("You have ordered a coffee.", false);
            expect(text).to.equal(coffeeMachine.execute(order).text);
            expect(isError).to.equal(coffeeMachine.execute(order).isError);
        });
        it('With the right price and 2 sugar', function (){
            const order = new Order("coffee", 50, 2)
            const {text, isError} = new Message("You have ordered a coffee with 2 sugars (stick included).", false);
            expect(text).to.equal(coffeeMachine.execute(order).text);
            expect(isError).to.equal(coffeeMachine.execute(order).isError);
        });
        it('With the right price and 10 sugar', function (){
            const order = new Order("coffee", 50, 10)
            const {text, isError} = new Message("The number of sugars should be between 0 and 2.", true);
            expect(text).to.equal(coffeeMachine.execute(order).text);
            expect(isError).to.equal(coffeeMachine.execute(order).isError);
        });
        it('With the right price and very hot', function (){
            const order = new Order("coffee", 50, 0, true)
            const {text, isError} = new Message("You have ordered a coffee extra hot.", false);
            expect(text).to.equal(coffeeMachine.execute(order).text);
            expect(isError).to.equal(coffeeMachine.execute(order).isError);
        });
    })

    describe("Ordering a tea with some different options.", () => {
        it('in capital letters and a lot of money', function () {
            const order = new Order("TEA", 300)
            const {text, isError} = new Message("You have ordered a tea.", false);
            expect(text).to.equal(coffeeMachine.execute(order).text);
            expect(isError).to.equal(coffeeMachine.execute(order).isError);
        });
        it('With uppercase and lowercase letters and spaces at the beginning and at the end.', function () {
            const order = new Order("  tEa  ", 300)
            const {text, isError} = new Message("You have ordered a tea.", false);
            expect(text).to.equal(coffeeMachine.execute(order).text);
            expect(isError).to.equal(coffeeMachine.execute(order).isError);
        });
    });

    describe("Ordering a chocolate with some different options.", () => {
        it('Very hot and with 2 sugars', function () {
            const order = new Order("Chocolate", 100, 2,true)
            const {text, isError} = new Message("You have ordered a chocolate extra hot with 2 sugars (stick included).", false);
            expect(text).to.equal(coffeeMachine.execute(order).text);
            expect(isError).to.equal(coffeeMachine.execute(order).isError);
        });
        it('very hot with tons of sugar', function () {
            const order = new Order("Chocolate", 80, 100000)
            const {text, isError} = new Message("The number of sugars should be between 0 and 2.", true);
            expect(text).to.equal(coffeeMachine.execute(order).text);
            expect(isError).to.equal(coffeeMachine.execute(order).isError);
        });
    });

});
