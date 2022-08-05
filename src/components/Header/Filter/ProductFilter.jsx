import React from "react";
import './ProductFilter.css';

/*React Icons*/
import { ImFilter } from 'react-icons/im';
import { TbArrowsSort } from 'react-icons/tb';

export const ProductFilter = ({ 
        setSelectedBrand, selectedBrand,
        minimo, setMinimo,
        maximo, setMaximo
    }) => {
    // Update seletedBrand state
    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
        console.log(selectedBrand)
    };
    return (
        <div className='ProductFilter'>
            <input type="checkbox" id="ProductFilter-trigger" />
            <ImFilter />

            <div className='ProductFilter-container'>
                <h3>FILTROS</h3>

                <select
                    value={selectedBrand}
                    onChange={handleBrandChange}>
                    <option value="MENOR">Menor Preço</option>
                    <option value="MAIOR">Maior Preço</option>
                    <option value="CRESCENTE">A - Z</option>
                    <option value="DECRESCENTE">Z - A</option>
                </select>

                <TbArrowsSort />

                <input type="number" placeholder='Valor mínimo' value={minimo} onChange={(e) => setMinimo(e.target.value)} />
                <input type="number" placeholder='Valor máximo' value={maximo} onChange={(e) => setMaximo(e.target.value)} />

            </div>
        </div>
    )
}