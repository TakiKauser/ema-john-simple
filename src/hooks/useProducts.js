import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("./products.json")
            .then(response => response.json())
            .then(jsonData => {
                setProducts(jsonData);
                // setRequiredProducts(jsonData);
            })
    }, [])
    // return multiple necessary things []
    return [products];
}

export default useProducts;