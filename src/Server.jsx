import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./store/slices/restServer/thunks";

export const Server = () => {

    const dispatch = useDispatch();

    const { products, limit, isLoading } = useSelector(state => state.products);


    useEffect(() => {

        dispatch(getProducts(10));


    }, [])


    return (
        <>
            <h1>Products</h1>
            <hr />
            <span>Loading:{isLoading ? 'true' : 'false'}</span>

            <ul >
                {
                    products.map((product) => (

                        <li key={product.uid}>
                            {product.name}
                            <div className="img">
                                <img src={product.img} alt="" />
                            </div>
                        </li>

                    ))
                }
            </ul>

            <button
                disabled={isLoading}
                onClick={() => dispatch(getProducts(limit + 10))}
            >
                Next
            </button>
        </>
    )
}
