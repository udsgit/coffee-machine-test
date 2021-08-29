import {Drink} from "./Drink";
import {Order} from "./Order";
import {Message} from "./Message";
import {replaceLast} from "../helpers/index";


export class CoffeeMachine {
    sugarQuantitySlots: Array<number>;
    drinks: Array<Drink>;

    constructor() {
        this.drinks = [
            new Drink("TEA", 40),
            new Drink("COFFEE", 50),
            new Drink("CHOCOLATE", 60)
        ];
        this.sugarQuantitySlots = [0,1,2];
    }

    private isValidOrder(drink: Drink, order: Order): boolean {
        return drink.name === order.drinkType &&
            drink.price <= order.money &&
            this.sugarQuantitySlots.includes(order.sugarQuantity)
    }


    private generateMessage(order: Order): Message {
        let message = new Message("An error has occurred", true);
        let drink: Drink = this.drinks.find(drink => drink.name === order.drinkType);

        if(drink){
            if(this.isValidOrder(drink, order)){
                message = new Message(
                    `You have ordered a ${order.drinkType.toLowerCase()}`,
                    false,
                    drink.price
                );
                if(order.isExtraHot){
                    message.text += ` extra hot`;
                }
                if(order.sugarQuantity > 0){
                    message.text += ` with ${order.sugarQuantity} sugars (stick included)`;
                }

            }else if(drink.price > order.money){
                message.text = `The ${order.drinkType.toLowerCase()} costs ${drink.price}`;
            }else if(!this.sugarQuantitySlots.includes(order.sugarQuantity)) {
                const first = this.sugarQuantitySlots[0];
                const last = this.sugarQuantitySlots.length - 1;
                message.text = `The number of sugars should be between ${first} and ${last}`;
            }
        }else{
            const drinkList = replaceLast(Array.from(this.drinks.values()).map(e => e.name.toLowerCase()).join(', '), ",", " or");
            message.text = `The drink type should be ${drinkList}`;
        }

        message.text += ".";
        return message;
    }

    public execute(order: Order): Message {
        return this.generateMessage(order);
    }

}