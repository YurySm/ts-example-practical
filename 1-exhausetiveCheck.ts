//add 'toyota'
type CarBrand = 'bmw' | 'lada' | 'toyota'

interface ICarBase {
    year: number
    brand: CarBrand
}

interface Bmw extends ICarBase {
    climateControl: boolean
    brand: 'bmw'
}

interface Lada extends ICarBase {
    conditioner?: boolean
    brand: 'lada'
}

interface Toyota extends ICarBase {
    cruise?: boolean
    brand: 'toyota'
}

type Car = Bmw | Lada | Toyota

// check not never( new item)
function exhausetiveCheck(param: never) {
    console.log('Обработайье занчение ' + param)
}

function smtpCarAction(car: Car) {
    switch (car.brand){
        case "bmw":
            // bmw
            break;
        case "lada":
            //lada
            break;
        default:
            // car:never
            // при расширении подсветит, что не never
            exhausetiveCheck(car)
    }

}