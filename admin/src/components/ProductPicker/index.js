import {
  ModalLayout,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from '@strapi/design-system/ModalLayout';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Typography } from '@strapi/design-system/Typography';
import getTrad from '../../utils/getTrad';
import { Grid, GridItem } from '@strapi/design-system/Grid';
import { Stack } from '@strapi/design-system/Stack';
import { Loader } from '@strapi/design-system/Loader';
import { Button } from '@strapi/design-system/Button';
import ProductCard from '../ProductCard';

const ProductPicker = ({
  onClose,
  onSelect,
  onRefresh,
  onFetchMore,
  hasMore,
  selectedValues,
  products,
  multiple,
  updatedAt,
  isLoading,
  onFinish,
}) => {
  return (
    <ModalLayout onClose={onClose} labelledBy="title">
      <ModalHeader>
        <Typography variant="omega" fontWeight="bold" id="title">
          <FormattedMessage
            id={
              multiple
                ? getTrad('components.ProductPicker.pick-products')
                : getTrad('components.ProductPicker.pick-product')
            }
            defaultMessage={multiple ? 'Pick your Shopify products' : 'Pick your Shopify product'}
          />
        </Typography>
      </ModalHeader>
      <ModalBody style={{ minHeight: '60vh' }}>
        {isLoading ? (
          <Stack
            alignItems="center"
            justifyContent="center"
            style={{ height: 'calc(60vh - 64px)' }}
          >
            <Loader />
          </Stack>
        ) : (
          <>
            <Grid gap={2}>
              {products.map((product) => (
                <GridItem key={product.id} col={3}>
                  <ProductCard
                    selected={
                      multiple
                        ? !!selectedValues?.find((p) => p.id === product.id)
                        : selectedValues?.id === product.id
                    }
                    onChange={() => onSelect(product)}
                    title={product.title}
                    image={product.image?.src}
                    productId={product.id}
                  />
                </GridItem>
              ))}
            </Grid>
            {hasMore && (
              <Stack marginTop={6} horizontal justifyContent="center">
                <Button variant="tertiary" onClick={onFetchMore}>
                  <FormattedMessage
                    id={getTrad('onents.ProductPicker.load-more')}
                    defaultMessage="Load more"
                  />
                </Button>
              </Stack>
            )}
          </>
        )}
      </ModalBody>
      <ModalFooter
        startActions={
          <Typography variant="pi">
            <FormattedMessage
              id={getTrad('onents.ProductPicker.last-updated')}
              defaultMessage="Last updated at {updatedAt, time, short} on {updatedAt, date, long}"
              values={{ updatedAt: new Date(updatedAt) }}
            />
          </Typography>
        }
        endActions={
          <Stack horizontal spacing={2}>
            <Button variant="secondary" onClick={onRefresh} disabled={isLoading || !onRefresh}>
              <FormattedMessage
                id={getTrad('onents.ProductPicker.refresh')}
                defaultMessage="Refresh products"
              />
            </Button>
            <Button onClick={onFinish}>
              <FormattedMessage
                id={getTrad('onents.ProductPicker.finish')}
                defaultMessage="Finish"
              />
            </Button>
          </Stack>
        }
      />
    </ModalLayout>
  );
};

ProductPicker.propTypes = {
  updatedAt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
  selectedValues: PropTypes.array.isRequired,
  onFetchMore: PropTypes.func,
  hasMore: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ),
  multiple: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onFinish: PropTypes.func.isRequired,
};

export default ProductPicker;
