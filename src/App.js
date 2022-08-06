import React, { useState } from "react";
import "./App.css";

/*React Icons*/

/*Components*/
import { AppLogo } from "./components/Header/Logo/AppLogo"; //Logo e título do site
import { SearchInput } from "./components/Header/Search/SearchInput"; //Caixa de pesquisa por nome do produto
import { ProductFilter } from "./components/Header/Filter/ProductFilter"; //Filtro de ordenação dos produtos
import { ProductCardContainer } from "./components/Body/ProductCardContainer"; //Container dos cards dos produtos
import { ShoppingCart } from "./components/Footer/Cart/ShoppingCart"; //Botão de compra

function App() {
  /*Armazena todos os produtos da loja*/
  const [productsList, setProductsList] = useState([
    {
      key: 1,
      name: "Produto 1",
      price: 150,
      img: "https://cf.shopee.com.br/file/9fb957a8376ca8e7fad515293b155f3c",
      description: "Descrição do produto 1",
    },
    {
      key: 2,
      name: "Produto 2",
      price: 250.3,
      img: "https://images-shoptime.b2w.io/produtos/5243778431/imagens/brinquedo-pato-espacial-robo-musical-com-leds-colorido-astronauta/5243778431_1_large.jpg",
      description: "Descrição do produto 2",
    },
    {
      key: 3,
      name: "Produto 3",
      price: 350.5,
      img: "https://cf.shopee.com.br/file/51e495e5fb60ebc3f78ef02231cd4925_tn",
      description: "Descrição do produto 3",
    },
    {
      key: 4,
      name: "Produto 4",
      price: 450.7,
      img: "https://cf.shopee.com.br/file/a1d31d2c8c8ddcc0bc276e3a05fb43e5",
      description: "Descrição do produto 4",
    },
    {
      key: 5,
      name: "Produto 5",
      price: 550.9,
      img: "https://ae01.alicdn.com/kf/U92202ea16ce441648cf1534c6503f06e2/Foguete-de-madeira-woomax-foguete-de-brinquedo-infantil-esta-o-espacial-brinquedos-de-madeira-foguete-de.jpg_Q90.jpg_.webp",
      description: "Descrição do produto 5",
    },
    {
      key: 6,
      name: "Produto 6",
      price: 650.0,
      img: "https://www.dhresource.com/0x0/f2/albu/g8/M00/91/48/rBVaVF18Pm6APiQdAALVO_ymJoE091.jpg",
      description: "Descrição do produto 6",
    },
    {
      key: 7,
      name: "Produto 7",
      price: 800.0,
      img: "https://www.dhresource.com/0x0/f2/albu/g8/M00/91/48/rBVaVF18Pm6APiQdAALVO_ymJoE091.jpg",
      description: "Descrição do produto 7",
    },
    {
      key: 8,
      name: "Produto 8",
      price: 800.0,
      img: "https://www.dhresource.com/0x0/f2/albu/g8/M00/91/48/rBVaVF18Pm6APiQdAALVO_ymJoE091.jpg",
      description: "Descrição do produto 8",
    },
    {
      key: 9,
      name: "Produto 9",
      price: 800.0,
      img: "https://www.dhresource.com/0x0/f2/albu/g8/M00/91/48/rBVaVF18Pm6APiQdAALVO_ymJoE091.jpg",
      description: "Descrição do produto 9",
    },
  ]);

  /*Armazena os produtos que foram adicionados ao carriniho*/
  const [cartList, setCartList] = useState([]);

  /*Armazena o valor total dos produtos adicionados ao carrinho*/
  const [totalPriceCart, setTotalPriceCart] = useState(0);

  const [selectedBrand, setSelectedBrand] = useState("MENOR");

  const [minimo, setMinimo] = useState(0);
  const [maximo, setMaximo] = useState(1000);

  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <AppLogo />

        <SearchInput query={query} setQuery={setQuery} />

        <ProductFilter
          setProductsList={setProductsList}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          minimo={minimo}
          setMinimo={setMinimo}
          maximo={maximo}
          setMaximo={setMaximo}
          query={query}
          setQuery={setQuery}
        />
      </header>

      <div className="App-body">
        <ProductCardContainer
          productsList={productsList}
          selectedBrand={selectedBrand}
          cartList={cartList}
          setCartList={setCartList}
          minimo={minimo}
          maximo={maximo}
          query={query}
        />
      </div>

      <footer className="App-footer">
        <ShoppingCart
          cartList={cartList}
          setCartList={setCartList}
          totalPriceCart={totalPriceCart}
          setTotalPriceCart={setTotalPriceCart}
        />
      </footer>
    </div>
  );
}

export default App;
