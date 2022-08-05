import React from "react";
import './ProductCardContainer.css';

import { ProductCard } from "./ProductCard";

export const ProductCardContainer = ({ productsList, selectedBrand, addProductToCart, cartList, setCartList, minimo, maximo, query }) => {
    /*  Esse component realiza as seguintes ações:
        Recebe os dados do produto (props) e o método de adicionar ao carrinho ();
        Renderiza o card com os dados do produto;
        Renderiza o botão de COMPRAR (ADICIONAR AO CARRINHO);

    OBS:
        Este component é filho direto de App.
        O botão de COMPRAR (ADICIONAR AO CARRINHO) é um trigger que chama o método de adicionar o produto ao carrinho.           
        O método de adicionar ao carrinho é chamado pelo onClick do botão de COMPRAR (ADICIONAR AO CARRINHO).
        
    DADOS DO PRODUTO:
        - key: identificador do produto;
        - name: nome do produto;
        - price: preço do produto;
        - img: imagem do produto;
        - description: descrição do produto (usada no alt da imagem);
*/

    return (
        <div className='card-container'>
            {productsList
                .filter(product => {
                    return product.name.toLowerCase().includes(query.toLowerCase())
                })
                .filter(product => {
                    return minimo === "" || product.price >= minimo
                })
                .filter(product => {
                    return maximo === "" || product.price <= maximo
                })
                .sort((currentProduct, nextProduct) => {
                    console.log(selectedBrand)
                    switch (selectedBrand) {
                        case "MENOR":
                            return currentProduct.price - nextProduct.price
                        case "MAIOR":
                            return nextProduct.price - currentProduct.price
                        case "CRESCENTE":
                            return nextProduct.name.localeCompare(currentProduct.name)
                        case "DECRESCENTE":
                            return -1 * nextProduct.name.localeCompare(currentProduct.name)
                        default:
                            return currentProduct.name - nextProduct.name
                    }
                })
                .map(product => {
                    return <ProductCard
                        key={product.id}
                        product={product}
                        addProductToCart={addProductToCart}
                        cartList={cartList}
                        setCartList={setCartList}
                    />
                })}
        </div>
    )
}