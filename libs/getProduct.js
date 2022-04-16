async function getProduct(uid) {
    const res = await fetch(`https://storefront-e9f7d-default-rtdb.firebaseio.com/products/${uid}.json`);
    const data = await res.json();
    return data;
}
  
export { getProduct };