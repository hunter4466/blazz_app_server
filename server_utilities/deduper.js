const deduperfunc = (array) => {
  const newObject = {
    business_id: array[0][0].business_id,
    business_name: array[0][0].business_name,
    business_phone: array[0][0].business_phone,
    business_address: array[0][0].business_address,
    business_description: array[0][0].business_description,
    business_backgroundImg: array[0][0].business_backgroundImg,
    business_logoImg: array[0][0].business_logoImg,
    business_usersId: array[0][0].business_usersId,
    business_activeState: array[0][0].business_activeState,
    business_categories: [],
  };
  const [
    category,
    productsHasCategory,
    products,
    modifiersHasProducts,
    modifiers,
    subModifiersHasModifiers,
    subModifiers,
  ] = [[], [], [], [], [], [], []];
  array[0].forEach((e) => {
    const categoriesToPush = {
      category_id: e.category_id,
      category_name: e.category_name,
      category_image: e.category_image,
      category_businessId: e.category_businessId,
    };
    const productsHasCategoryToPush = {
      productsHasCategory_productsId: e.productsHasCategory_productsId,
      productsHasCategory_categoryId: e.productsHasCategory_categoryId,
    };
    const productsToPush = {
      products_id: e.products_id,
      products_name: e.products_name,
      products_image: e.products_image,
      products_description: e.products_description,
      products_price: e.products_price,
      products_businessId: e.products_businessId,
    };
    const modifiersHasProductsToPush = {
      modifiersHasProducts_modifiersId: e.modifiersHasProducts_modifiersId,
      modifiersHasProducts_productsId: e.modifiersHasProducts_productsId,
      modifiersHasProducts_price: e.modifiersHasProducts_price,
    };
    const modifiersToPush = {
      modifier_id: e.modifier_id,
      modifier_name: e.modifier_name,
      modifier_description: e.modifier_description,
      modifier_image: e.modifier_image,
      modifier_businessId: e.modifier_businessId,
      subModifiersArray: [],
    };
    const subModifiersHasModifiersToPush = {
      subModifiersHasModifiers_subModifiersId: e.subModifiersHasModifiers_subModifiersId,
      subModifiersHasModifiers_modifiersId: e.subModifiersHasModifiers_modifiersId,
      subModifiersHasModifiers_price: e.subModifiersHasModifiers_price,
    };
    const subModifiersToPush = {
      subModifiers_id: e.subModifiers_id,
      subModifiers_name: e.subModifiers_name,
      subModifiers_description: e.subModifiers_description,
      subModifiers_image: e.subModifiers_image,
      subModifier_businessId: e.subModifier_businessId,
    };
    category.push(categoriesToPush);
    productsHasCategory.push(productsHasCategoryToPush);
    products.push(productsToPush);
    modifiersHasProducts.push(modifiersHasProductsToPush);
    modifiers.push(modifiersToPush);
    subModifiersHasModifiers.push(subModifiersHasModifiersToPush);
    subModifiers.push(subModifiersToPush);
  });

  modifiers.forEach((e) => {
    subModifiersHasModifiers.forEach((a) => {
      if (e.subModifiersHasModifiers_modifiersId === a.subModifiersHasModifiers_modifiersId) {
        subModifiers.forEach((i) => {
          if (e.subModifiersHasModifiers_subModifiersId === i.subModifiers_id) {
            e.subModifiersArray.push(i);
          }
        });
      }
    });
  });
  console.log(modifiers);

  array[0].forEach((e) => {
    const objToPush = {
      category_id: e.category_id,
      category_name: e.category_name,
      category_image: e.category_image,
      category_businessId: e.category_businessId,
      category_content: [],
    };
    const prevBuilt = [];
    newObject.business_categories.forEach((a) => {
      prevBuilt.push(JSON.stringify(a));
    });
    if (!prevBuilt.includes(JSON.stringify(objToPush))) {
      newObject.business_categories.push(objToPush);
    }
  });
};

module.exports = deduperfunc;
