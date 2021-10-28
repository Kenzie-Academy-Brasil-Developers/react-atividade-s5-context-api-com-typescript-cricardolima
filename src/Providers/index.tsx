import { ReactNode } from "react";
import { CartProvider } from "./cart/index";
import { ProductListProvider } from "./products/index"

interface ProvidersProps {
    children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
    return (
        <ProductListProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </ProductListProvider>
    )
}