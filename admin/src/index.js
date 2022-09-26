import Multiselect from "./components/Multiselect";
import multipleProducts from "./fields/multiple-products";
import singleProduct from "./fields/single-product";

export default {
  register(app) {
    app.plugins["content-type-builder"].apis.forms.components.add({
      id: "multiselect",
      component: Multiselect,
    });

    app.customFields.register(singleProduct);
    app.customFields.register(multipleProducts);
  },
};
