import { useProductList } from "../../Providers/products"
import Products from "../Products";
import { DisplayProductsContainer } from "./style";


export default function DisplayProducts() {
    const { products } = useProductList();

    return (
        <>
            <h1>Products</h1>
                <DisplayProductsContainer>
                    
                    {products.map(products => (
                            <Products 
                                title={products.title}
                                image={products.image}
                                price={products.price}
                                toogleCart={false}
                                products={products}
                            />
                    ))}
                </DisplayProductsContainer>
        </>
    )
}
