import {AxiosResponse} from "axios";

const axios = require('axios').create({
    baseURL: 'http://localhost:8000',
    timeout: 1000,
    headers: {'Content-Type': 'Application/json'}
});

const saveRequest = (data: Object) => {
    let ordersRaw: string | null = sessionStorage.getItem("orders");
    let orders;

    if(ordersRaw === null){
        orders = [data]
    }else{
        orders = JSON.parse(ordersRaw);
        orders.push(data);
    }
    sessionStorage.setItem("orders", JSON.stringify(orders));
}

export const putRequest = async (path: string, data: any) => {
    return axios
        .put(path, data)
        .then((res: any) => {
            const isError: boolean = res.data.isError;
            data.cost = res.data.cost;
            if(!isError){
                saveRequest(data);
            }
            return ({
                text: res.data.text,
                style: `color: ${res.data.hexColour}`
            })
        })
        .catch((reason: any) => {
            console.log(reason);
        });
}

export const getTotalSpent = () => {
    let ordersRaw: string | null = sessionStorage.getItem("orders");
    let orders;
    if(ordersRaw !== null) {
        orders = JSON.parse(ordersRaw);
        return orders.map((order: { cost: number; }) => order.cost )
            .reduce((a: number, b:number )=> a + b);
    }else{
        return 0
    }

}


