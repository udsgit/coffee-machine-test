export class Order {
    drinkType: string;
    money: number;
    sugarQuantity: number;
    isExtraHot: boolean;

    constructor(drinkType: string = "", money: number = 0, sugarQuantity: number = 0, isExtraHot: boolean = false) {
        this.drinkType = drinkType?.toUpperCase()?.trim();
        this.money = money;
        this.sugarQuantity = sugarQuantity;
        this.isExtraHot = isExtraHot;
    }

    public hasRequiredParams(): boolean{
        return this.drinkType !== undefined && this.money !== undefined;
    }



}