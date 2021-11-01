import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(response => response.json())
            .then(jsonData => {
                setProducts(jsonData.products);
                // setRequiredProducts(jsonData);
            })
    }, [])
    // return multiple necessary things []
    return [products];
}

export default useProducts;