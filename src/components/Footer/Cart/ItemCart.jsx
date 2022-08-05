import React from "react";
import './ItemCart.css';

import { BsTrash } from "react-icons/bs";
import { TiPlus, TiMinus } from "react-icons/ti";

export const ItemCart = ({product, cartList, setCartList}) => {

    /*Multiplica o valor do produto pela quantidade*/
    const finalProductPrice = (price, quantity) => {
        return price * quantity;
    }

    /*Remove um produto do carrinho*/
    const removeProductToCart = (product) => {
        let confirmRemove = window.confirm('Deseja remover o produto?');

        confirmRemove && setCartList(cartList.filter(item => item.key !== product.key));
    }

    /*Incrementa a quantidade do produto clicando no button*/
    const incrementProductQuantity = (product) => {
        const newCartList = cartList.map(item => {
            if (item.key === product.key) {
                item.quantity += 1;
            }

            return item;
        });

        setCartList(newCartList);
    }

    /*Subtrai a quantidade do produto clicando no button*/
    const decrementProductQuantity = (product) => {
        if (product.quantity > 1) {
            const newCartList = cartList.map(item => {
                if (item.key === product.key) {
                    item.quantity -= 1;
                }

                return item;
            });

            setCartList(newCartList);
        } else {
            removeProductToCart(product);
        }
    }

    /*Função que apresenta o valor como monetário*/
    const formatPriceMask = (price) => {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return (
        <div className='App-modal-itemCart'>
            <div className="modal-itemCart-left">
                <button className="cart-item-trash">
                    <BsTrash 
                        onClick={() => removeProductToCart(product)}
                    />
                </button>

                <img src={product.img} alt={product.description}/>

                <div className="cart-item-infos">
                    <p className="cart-item-name">{product.name}</p>

                    <div className="cart-item-size-amount">
                        <select name="" id="" className="cart-item-size">
                            <option value="">P</option>
                            <option value="">M</option>
                            <option value="">G</option>
                            <option value="">XG</option>
                            <option value="">XXG</option>
                            <option value="">XXXG</option>
                        </select>

                        <div className="cart-item-amount">
                            <button>
                                <TiMinus onClick={() => decrementProductQuantity(product)}/>
                            </button>
                            <p>{product.quantity}</p>
                            <button>
                                <TiPlus onClick={() => incrementProductQuantity(product)}/>
                            </button>
                        </div>
                    </div>
                </div>  
            </div>
                    
            <div className="cart-item-price">
                <h3>{formatPriceMask(product.price)} und</h3>
                <h1>{formatPriceMask(finalProductPrice(product.price, product.quantity))}
                </h1>
            </div>
            
        </div>
    )
}