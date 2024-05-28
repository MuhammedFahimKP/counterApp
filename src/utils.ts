
export function setCounterColor(value:number) {
    
    if (value <= 10 ){

        return '#54F024'

    }

    if ( value <= 20) {
        
        return '#FFFF00'
    }

    return 'red'
}