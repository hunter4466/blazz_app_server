const consolidatefunc = (array) => {
  const newObj = { activeBusiness: true, categories: [] };

  array[0].forEach((e) => {
    const toTrans = {
      id: e.id,
      name: e.name,
      image: e.image,
      business_id: e.business_id,
      products: [],
      active: e.active,
    };
    newObj.categories.push(toTrans);
  });

  newObj.categories.forEach((a) => {
    array[1].forEach((b) => {
      if (a.id === b.category_id) {
        array[2].forEach((c) => {
          if (b.products_id === c.id) {
            const toTrans2 = {
              id: c.id,
              name: c.name,
              image: c.image,
              description: c.description,
              price: c.price,
              business_id: c.business_id,
              modifiers: [],
              active: c.active,
            };
            a.products.push(toTrans2);
          }
        });
      }
    });
  });

  newObj.categories.forEach((a) => {
    a.products.forEach((b) => {
      array[3].forEach((c) => {
        if (b.id === c.products_id) {
          array[4].forEach((d) => {
            if (c.modifiers_id === d.id) {
              const toTrans3 = {
                id: d.id,
                name: d.name,
                description: d.description,
                image: d.image,
                business_id: d.business_id,
                max: c.max,
                min: c.min,
                factor: c.factor,
                price: c.price,
                subModifiers: [],
                active: d.active,
              };
              b.modifiers.push(toTrans3);
            }
          });
        }
      });
    });
  });
  newObj.categories.forEach((p) => {
    p.products.forEach((q) => {
      q.modifiers.forEach((r) => {
        array[5].forEach((s) => {
          if (r.id === s.modifiers_id) {
            array[6].forEach((t) => {
              if (s.sub_modifiers_id === t.id) {
                const toTrans4 = {
                  id: t.id,
                  name: t.name,
                  description: t.description,
                  image: t.image,
                  business_id: t.business_id,
                  price: s.price,
                  active: t.active,
                };
                r.subModifiers.push(toTrans4);
              }
            });
          }
        });
      });
    });
  });
  return newObj;
};

module.exports = consolidatefunc;
