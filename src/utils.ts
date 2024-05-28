
export function getCounterColor(value:number) {
    
    value = Math.max(1, Math.min(30, value));

    
    let normalizedValue = (value - 1) / 29;

    if (normalizedValue <= 0.5) {
        
        let ratio = normalizedValue / 0.5;
        let r = Math.round(255 * ratio);
        let g = 255;
        let b = 0;
        return `rgb(${r}, ${g}, ${b})`;
    } else {
       
        let ratio = (normalizedValue - 0.5) / 0.5;
        let r = 255;
        let g = Math.round(255 * (1 - ratio));
        let b = 0;
        return `rgb(${r}, ${g}, ${b})`;
    }
}