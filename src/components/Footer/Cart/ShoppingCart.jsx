import React, { useEffect, useState } from "react";
import './ShoppingCart.css';

/*React Icons*/
import { MdShoppingCart, MdClose } from 'react-icons/md';
import { IoIosRocket } from 'react-icons/io';
import { AiOutlineClear } from 'react-icons/ai';

/*Components*/
import { ItemCart } from "./ItemCart";

export const ShoppingCart = ({cartList, setCartList}) => {

    /*Armazena o valor total dos produtos adicionados ao carrinho*/
    const [totalPriceCart, setTotalPriceCart] = useState(0);

    /*Calcula o valor total do carrinho e apresenta no formato de moeda sem o símbolo*/
    useEffect(() => {
        let total = 0;
        cartList.forEach(item => {
            total += item.price * item.quantity;
        });
        setTotalPriceCart(total.toFixed(2));
    }, [cartList]);

    /*Apaga todos os produtos do carrinho*/
    const ClearShoppingCart = () => {
        /*Confirmação de limpeza do carrinho*/
        let confirmClear = window.confirm('Deseja limpar o carrinho?');
        
        confirmClear && setCartList([]);
    }

    /*Fecha a janela do carrinho*/
    const CloseShoppingCart = () => {
        document.getElementById('ShoppingCart-trigger').checked = false}

    /*Faz o botão do carrinho aparecer quando comprar pelo menos 1 produto*/
    useEffect(() => {
        let shoppingCartButton = document.getElementById('btn-finish-buy');

        if (cartList.length === 0) {
            shoppingCartButton.style.width = '0px';
            shoppingCartButton.style.padding = '0px';
            shoppingCartButton.style.opacity = '0';
        } else {
            shoppingCartButton.style.width = 'fit-content';
            shoppingCartButton.style.padding = '10px';
            shoppingCartButton.style.opacity = '1';
        }


    }, [cartList]);

    return (
        <div className='App-ShoppingCart'>
            {/*Trigger que controla o botão do carrinho de compras*/}
            <input type="checkbox" id='ShoppingCart-trigger'/>

            <div className="Navbar-ShoppingCart">
                <div className="cart-price-total">
                    <h2>R$: TOTAL</h2>
                    <h1>{totalPriceCart}</h1>
                </div> 

                {/*Botão de finalizar compra*/}
                <button className="btn-finish-buy" id="btn-finish-buy" onClick={ClearShoppingCart}>
                    <div className="cart-icon-count">
                        <MdShoppingCart size={30} className='cart-icon'/>
                        <span>{cartList.length}</span>
                    </div>
                </button>               
            </div>

            {/*Janela do carrinho*/}
            <div className='Modal-ShoppingCart'>
                <div className="Modal-ShoppingCart-header">

                    {/*Botão LIMPAR CARRINHO só aparece quando o carrinho tiver pelo menos um produto*/}
                    {cartList.length > 0 &&
                        <button className="Modal-ShoppingCart-clear" onClick={() => ClearShoppingCart()}>
                            LIMPAR
                            <AiOutlineClear className='clear-icon'/>
                        </button>
                    }

                    {/*Botão FECHAR CARRINHO*/}
                    <button className="Modal-ShoppingCart-close" onClick={() => CloseShoppingCart()}>
                        <MdClose className='close-icon'/>
                    </button>
                </div>

                {/*Mensagem de carrinho vazio*/}
                {cartList.length === 0 &&
                    <h2>Carrinho vazio</h2>
                }


                {cartList.map((product) => (
                    <ItemCart
                        key={product.key}
                        product={product}

                        cartList={cartList}
                        setCartList={setCartList}
                    />
                ))}
            </div>
        </div>
    )
}