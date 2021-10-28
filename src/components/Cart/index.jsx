import { useCart } from "../../Providers/cart"
import Products from "../Products"
import { DisplayCartContainer } from "./style"


export default function Cart() {
    const { cart } = useCart()

    return (
        <>
            <h1>Cart</h1>
                <DisplayCartContainer>
                    {cart.map(products => (
                            <Products 
                                title={products.title}
                                image={products.image}
                                price={products.price}
                                products={products}
                                toogleCart={true}
                            />
                    ))}
                </DisplayCartContainer>
        </>
    )
}
