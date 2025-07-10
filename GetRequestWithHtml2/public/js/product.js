function onSubmitHandler(e){
    e.preventDefault();
    const product = e.target.product.value;
    console.log(product);
    const productData = {
        productName: product
    };
    axios.post('http://localhost:3000/products', productData)
    .then((response) => {
        console.log('Product submitted successfully:', response.data);
    })
    .catch((error) => {
        console.error('Error submitting product:', error);
    });

}