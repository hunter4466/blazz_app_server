import React from 'react';
import { useSelector } from 'react-redux';
/* import Multiple from './my_products/multiple';
import Tree from './my_products/tree';
import Unique from './my_products/unique'; */

const Myproducts = () => {
  const data = useSelector((state) => state.businessReducer);
  const cats = data.categories;
  return (
    data.categories
      ? (
        <div className="my_products_main_container">
          {
      data.categories.map((a) => (
        <div key={a.id} className="category_area_a">
          <div className="category_picker_b">
            <select className="category_input">
              {cats.map((b) => (b.id === a.id
                ? <option selected value={a.name}>{a.name}</option>
                : <option value={b.name}>{b.name}</option>
              ))}
            </select>
            <select className="active?">
              {a.active
                ? <option selected value>Activado</option>
                : <option value>Activado</option>}
              {a.active
                ? <option value={false}>Desactivado</option>
                : <option selected value={false}>Desactivado</option>}
            </select>
          </div>
          {a.products.map((c) => (
            <div key={c.id} className="product_area_b">
              <div className="product_image_c">
                <div>
                  {c.image}
                </div>
              </div>
              <div className="product_content_area_c">
                <input type="text" className="name_input" value={c.name} placeholder="Nombre" />
                <textarea type="text" className="description_input" value={c.description} placeholder="Descripción" />
                <div>
                  <button className={c.modifiers.length > 0 ? 'prod_type_btn_unpressed' : 'prod_type_btn_pressed'} type="button">Único</button>
                  <button className={c.modifiers.length > 0 ? 'prod_type_btn_pressed' : 'prod_type_btn_unpressed'} type="button">Múltiple</button>
                </div>
              </div>
              <div className="product_config_area_c">
                <select className="active?">
                  {a.active
                    ? <option selected value>Activado</option>
                    : <option value>Activado</option>}
                  {a.active
                    ? <option value={false}>Desactivado</option>
                    : <option selected value={false}>Desactivado</option>}
                </select>
                <button type="button" className="clear_product_btn">Borrar</button>
              </div>
            </div>
          ))}
        </div>
      ))
    }
          <button type="button" className="save_products_btn">Guardar cambios</button>
        </div>
      )
      : ''
  /*
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
            productState.multiple ? <Multiple /> : ''
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
    */
  );
};
export default Myproducts;
