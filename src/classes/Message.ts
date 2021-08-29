export class Message {
    text: string;
    hexColour: string;
    isError: boolean;
    cost: number;

    constructor(text: string = "", isError: boolean = false, cost: number = 0) {
        this.text = text;
        this.hexColour = isError ? "#bf6547" : "#6c9945";
        this.isError = isError;
        this.cost = cost;
    }
}