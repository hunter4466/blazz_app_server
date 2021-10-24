import React, { useState } from 'react';
import Multiple from './my_products/multiple';
import Tree from './my_products/tree';
import Unique from './my_products/unique';

const Myproducts = () => {
  const [productState, changeproductState] = useState({
    unique: true,
    multiple: false,
    tree: false,
  });
  const handleChange = (btn) => {
    const newObj = {
      unique: productState.unique,
      multiple: productState.multiple,
      tree: productState.tree,
    };
    Object.keys(newObj).forEach((e) => {
      if (e === btn) {
        newObj[e] = true;
      } else {
        newObj[e] = false;
      }
    });
    changeproductState(newObj);
  };
  const trees = { sayhi: 'hello', saybye: 'bye' };
  return (
    <div className="my_products_main_container">
      <div className="category_area_a">
        <div className="category_picker_b">
          <select className="category_input">
            <option selected value="category">Categoría</option>
            <option value="pizza">Pizza</option>
            <option value="pasta">Pasta</option>
            <option value="sides">Sides</option>
          </select>
          <select className="active?">
            <option value="true">Activado</option>
            <option value="false">Desactivado</option>
          </select>
        </div>
        <div className="product_area_b">
          <div className="product_image_c">
            <div>
              Image
            </div>
          </div>
          <div className="product_content_area_c">
            <input type="text" className="name_input" placeholder="Nombre" />
            <textarea type="text" className="name_input" placeholder="Descripción" />
            <div>
              <button type="button" onClick={() => { handleChange('unique'); }}>Único</button>
              <button type="button" onClick={() => { handleChange('multiple'); }}>Múltiple</button>
              <button type="button" onClick={() => { handleChange('tree'); }}>Armable</button>
            </div>
            {
            productState.unique ? <Unique /> : ''
          }
            {
            productState.multiple ? <Multiple namespace={trees} /> : ''
          }
            {
            productState.tree ? <Tree /> : ''
          }
          </div>
          <div className="product_config_area_c">
            <select className="active?">
              <option value="true">Activado</option>
              <option value="false">Desactivado</option>
            </select>
            <button type="button" className="clear_product_btn">Borrar</button>
          </div>
        </div>
      </div>
      <button type="button" className="save_products_btn">Guardar</button>
    </div>
  );
};
export default Myproducts;
