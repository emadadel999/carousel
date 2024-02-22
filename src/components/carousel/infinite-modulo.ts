export function infiniteModulo(number: number, mod: number) {
    let result = number % mod;
    if (result < 0) {
        result += mod;
    }
    return result;
}


export default infiniteModulo;