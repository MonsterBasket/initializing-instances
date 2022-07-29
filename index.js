class Breakfast{
    constructor(food, drink){
        this.food = food;
        this.drink = drink;
    }
}
class Lunch{
    constructor(salad, soup, drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}
class Dinner{
    constructor(salad, soup, entree){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = "cheesecake";
    }
}
let test = {a:1, b:2, c:3, d:4};
const bfast = new Breakfast('eggs', 'juice');
const newlunch = new Lunch('side salad', 'broccoli cheddar soup', 'iced tea')
const newdinner = new Dinner('balsamic salad', 'consome', 'filet mignon')