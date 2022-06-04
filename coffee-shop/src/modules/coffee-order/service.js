import { HttpClient } from "../httpClient";

class CoffeeService extends HttpClient{
    constructor(){
        super("https://api.npoint.io/")
    }
    getCoffee(){
        return this.get("dcd92df0e654cd806371")
        
    }
    getCoffeeById(id,coffee){
        return coffee.find((element) => element.id === id)
    }
}

export const coffeeService = new CoffeeService()