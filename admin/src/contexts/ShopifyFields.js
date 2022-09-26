import { createContext, useContext } from 'react';

const ShopifyFieldsContext = createContext();

export const useShopifyFields = () => useContext(ShopifyFieldsContext);
export default ShopifyFieldsContext;
