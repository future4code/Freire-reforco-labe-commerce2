import React from "react";
import './ProductCard.css';

export const ProductCard = ({ product, cartList, setCartList }) => {
    /*  Esse component realiza as seguintes ações:
            Recebe os dados do produto (product) e o método de adicionar ao carrinho ();
            Renderiza o card com os dados do produto;
            Renderiza o botão de COMPRAR (ADICIONAR AO CARRINHO);

        OBS:
            Este component é filho direto de App.
            O botão de COMPRAR (ADICIONAR AO CARRINHO) é um trigger que chama o método de adicionar o produto ao carrinho.           
            O método de adicionar ao carrinho é chamado pelo onClick do botão de COMPRAR (ADICIONAR AO CARRINHO).
            
        DADOS DO PRODUTO:
            - key: keyentificador do produto;
            - name: nome do produto;
            - price: preço do produto;
            - img: imagem do produto;
            - description: descrição do produto (usada no alt da imagem);
    */

    /*Adiciona o produto ao carrinho*/
    const addProductToCart = (product) => {
        /*Cria um novo objeto com os dados do produto*/
        const newProduct = {
            key: product.key,
            name: product.name,
            price: product.price,
            img: product.img,
            description: product.description,
            quantity: 1
        };

        /*Verifica se o produto já existe no carrinho*/
        const productExists = cartList.find(item => item.key === product.key);

        /*Se o produto já existir, incrementa a quantidade*/
        if (productExists) {
            const newCartList = cartList.map(item => {
                if (item.key === product.key) {
                    item.quantity += 1;
                }

                return item;
            });

            setCartList(newCartList);
            
            /*Se o produto não existir, adiciona o produto ao carrinho*/
        } else {
            setCartList([...cartList, newProduct]);
        }
    }

    /*Apresenta o preço do produto como monetário*/
    const priceProductMask = () => {
        return product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={product.img} alt={product.description}/>
            </div>

            <div className="card-text">
                <h3>{product.name}</h3>
                <h1>{priceProductMask()}</h1>
            </div>

            <button onClick={() => addProductToCart(product)}>
                COMPRAR
            </button>
        </div>

    )
}