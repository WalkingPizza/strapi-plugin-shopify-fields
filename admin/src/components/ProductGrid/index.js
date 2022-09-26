import React from 'react';
import ProductCard from '../ProductCard';
import { Grid, GridItem } from '@strapi/design-system/Grid';
import { Button } from '@strapi/design-system/Button';
import { Typography } from '@strapi/design-system/Typography';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import getTrad from '../../utils/getTrad';
import { useShopifyFields } from '../../contexts/ShopifyFields';

const ViewMoreGridItem = styled(GridItem)`
  height: 100%;
`;

const ViewMoreButton = styled(Button)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    height: 100%;
  }

  span {
    display: block;
  }

  ${Typography} {
    font-weight: 400;
  }
`;

const ProductGrid = () => {
  const {
    products,
    sortProducts,
    isSelected,
    togglePicker,
    hasNextPage,
    handleChange,
    previewAmount,
    formattedValue,
  } = useShopifyFields();

  const sortedProducts = sortProducts(products);

  return (
    <Grid gap={2}>
      {sortedProducts.slice(0, 3).map((product) => (
        <GridItem key={product.id} col={3}>
          <ProductCard
            onChange={() => handleChange(product)}
            selected={isSelected(product)}
            title={product.title}
            image={product.image?.src}
            productId={product.id}
          />
        </GridItem>
      ))}
      {(products.length > 3 || hasNextPage) && (
        <ViewMoreGridItem col={3}>
          <ViewMoreButton variant="tertiary" onClick={togglePicker}>
            <span>
              <FormattedMessage
                id={getTrad('components.ProductGrid.view-more')}
                defaultMessage="View more"
              />
            </span>
            <Typography variant="pi" textColor="neutral300">
              {formattedValue?.length > previewAmount && (
                <Typography variant="pi" textColor="neutral300">
                  <FormattedMessage
                    id="components.ProductGrid.moreSelected"
                    defaultMessage="{amount} more selected"
                    values={{ amount: formattedValue.length - previewAmount }}
                  />
                </Typography>
              )}
            </Typography>
          </ViewMoreButton>
        </ViewMoreGridItem>
      )}
    </Grid>
  );
};

export default ProductGrid;
