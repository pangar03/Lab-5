export const importData = async () => {
    const response = await fetch ('https://raw.githubusercontent.com/pangar03/Lab-5/main/json/data.json');
    const data = await response.json();
    return data;
};

export const getItemByID = async (id) => {
    const products = await importData();
    for (const product of products) {
        if (product.id === parseInt(id)) {
            return product;
        }
    }

    throw new Error('Product not found');
};