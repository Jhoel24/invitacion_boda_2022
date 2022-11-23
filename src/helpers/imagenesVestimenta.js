
export const imagenesVestimenta = () => {
    const images = [];

    for (let i = 1; i <= 10; i++) {
        const obj = {
            original: `assets/vestimenta/vestimenta_${i}.jpeg`,
            thumbnail: `assets/vestimenta/vestimenta_${i}.jpeg`,
        }
        images.push(obj)
    }

    return images;
}