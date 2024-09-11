//for the description when the product is added to cart.

export const addEllipsis = (text) => {
    if(text.length > 50) {
        return text.substring(0, 50) + '...';
    }
}