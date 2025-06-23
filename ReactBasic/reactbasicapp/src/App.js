// import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

const allBrands = [
  {id: "1", brandName: "puma"},
  {id: "2", brandName: "adidas"},
  {id: "3", brandName: "bata"},
  {id: "4", brandName: "fila"},
  {id: "5", brandName: "reebok"}
];


function App() {
  const [brands, setBrands] = useState(allBrands);

  const [selectedBrand, setSelectedBrand] = useState([]);

  const onSearchChange = (e)=> {
    const value = e.target.value;
    const filteredBrands = value?.length > 0 ? brands.filter(brand => brand.brandName.includes(value.toLowerCase())) : allBrands;
    setBrands(filteredBrands);
    console.log(filteredBrands);
    
  }; 

  const onAddClick = (id)=> {
    const selectedItems = allBrands.find(item => item.id === id);
    setSelectedBrand([...selectedBrand,selectedItems]);
  }

  const onClickRemove = (id)=> {
    const filteredItems = selectedBrand.filter(brand => brand.id !== id);
    setSelectedBrand(filteredItems);
  }
    

  return (
    <>
      <input onChange={onSearchChange} placeholder="Search a brand" />
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>{brand.brandName}</li>
        ))}
      </ul>

      <div>
        <h3>Add Brands to Cart</h3>
        {allBrands.map((brand) => (
          <div>
            {brand.brandName}
            <span>
              <button onClick={() => onAddClick(brand.id)}>Add to Cart</button>
            </span>
          </div>
        ))}
      </div>

      <div>
        <h2>Your Cart</h2>
        <div>
          {selectedBrand && selectedBrand.map((brand) => <p>{brand.brandName}-<button onClick={()=> onClickRemove(brand.id)}>Remove</button></p>)}
        </div>
      </div>
    </>
  );
}

export default App;
