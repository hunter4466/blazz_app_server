import React from 'react';

const Myproducts = () => (
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
            <button type="button">Único</button>
            <button type="button">Múltiple</button>
            <button type="button">Armable</button>
          </div>
          <div>
            <input type="text" placeholder="Precio" />
            <input type="text" placeholder="Precio con descuento (Opcional)" />
          </div>
        </div>
        <div className="product_config_area_c">
          <select className="active?">
            <option value="true">Activado</option>
            <option value="false">Desactivado</option>
          </select>
        </div>
      </div>
    </div>
  </div>
);
export default Myproducts;
