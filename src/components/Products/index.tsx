import { useCart } from "../../Providers/cart";
import { ProductsContainer } from "./style";


interface ProductsProps {
    title: string;
    price: number;
    image: string;
    products: any;
    toogleCart: boolean;
}

export default function Products({title, price, image, products, toogleCart }: ProductsProps) {
    const { addProduct, deleteProduct} = useCart();

    return (
        <ProductsContainer toogleCart={toogleCart}>
            <img alt={title} src={image}/>
            <p>{title}</p>
            <p>{price}</p>
            {toogleCart ? (
                <button onClick={() => deleteProduct(products)}>REMOVER DO CARRINHO</button>
            ) : (
                <button onClick={() => addProduct(products)}>ADICIONAR AO CARRINHO</button>
            )}
        </ProductsContainer>
    )
};
