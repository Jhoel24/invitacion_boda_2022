export const generateOptions = number => {
    if(number === 10){
        return 'Campo libre'
    }
    const array = []
    for(let i = 1; i <= number; i++) {
        const option = {
            value: i, label: `${i}`
        }
        array.push(option)
    }
    return array
}