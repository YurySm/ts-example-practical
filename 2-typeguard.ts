type CarBrand = 'bmw' | 'lada'

interface ICarBase {
    year: number
    brand: CarBrand
}

interface BmwBase extends ICarBase {
    climateControl: boolean
    brand: 'bmw'
    model: 'X5' | 'X6'
}

interface BmwX5 extends BmwBase {
    value: string
    model: 'X5'
}

interface BmwX6 extends BmwBase {
    value: number
    model: 'X6'
}

type Bmw = BmwX5 | BmwX6

interface LadaBase extends ICarBase {
    conditioner?: boolean
    brand: 'lada'
    model: 'priora' | 'vesta'
}

interface Vesta extends LadaBase {
    conditioner?: boolean
    model:  'vesta'
}

interface Priora extends LadaBase {
    conditioner?: boolean
    model: 'priora'
}

type Lada = Vesta | Priora

type Car = Lada | Bmw

function isBmwX5(car: Car): car is BmwX5 {
    return car.brand === 'bmw' && car.model === 'X5'
}

function isLadaVesta(car: Car): car is Vesta {
    return car.brand === 'lada' && car.model === 'vesta'
}

function fn(car: Car) {
    if(isBmwX5(car)) {

    }

    if(isLadaVesta(car)) {
        car.model
    }

}