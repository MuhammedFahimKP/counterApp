
export function setCounterColor(value:number) {
    
    if (value <= 10 ){

        return 'green'

    }

    if ( value <= 20) {
        
        return 'yellow'
    }

    return 'red'
}