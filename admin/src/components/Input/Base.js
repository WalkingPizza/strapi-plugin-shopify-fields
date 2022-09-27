import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@strapi/design-system/Button';
import styled from 'styled-components';
import getTrad from '../../utils/getTrad';
import { FormattedMessage } from 'react-intl';
import { Stack } from '@strapi/design-system/Stack';
import { Typography } from '@strapi/design-system/Typography';
import ProductPicker from '../ProductPicker';
import { request } from '@strapi/helper-plugin';
import pluginId from '../../pluginId';
import { useInfiniteQuery } from 'react-query';
import { Loader } from '@strapi/design-system/Loader';
import { get, uniqBy } from 'lodash';
import ProductGrid from '../ProductGrid';
import { Box } from '@strapi/design-system/Box';
import ShopifyFieldsContext from '../../contexts/ShopifyFields';

const Content = styled(Stack)`
  min-height: 13.875rem;
`;

const Callout = styled(Stack)`
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid
    ${({ theme, variant }) =>
      variant === 'error' ? theme.colors.danger200 : theme.colors.warning200};
  background-color: ${({ theme, variant }) =>
    variant === 'error' ? theme.colors.danger100 : theme.colors.warning100};
`;

const Input = ({ name, multiple, attribute, onChange, value, error }) => {
  const [pickerOpen, setPickerOpen] = useState(false);

  const fetchProducts = async (pageParam) => {
    if (pageParam) return await request(`/${pluginId}/products`, { params: pageParam });
    else
      return await request(`/${pluginId}/products`, {
        params: {
          ...attribute.options,
          limit: 12,
          fields: Array.from(new Set([...attribute.options.fields, 'id', 'title', 'image'])),
        },
      });
  };

  const {
    data,
    isLoading,
    isRefetching,
    isError,
    isSuccess,
    hasNextPage,
    dataUpdatedAt,
    refetch,
    fetchNextPage,
  } = useInfiniteQuery(
    [pluginId, 'products', JSON.stringify(attribute.options)],
    ({ pageParam }) => fetchProducts(pageParam),
    {
      getNextPageParam: (lastPage) => get(lastPage, 'meta.pagination.nextPage'),
      initialData: { pages: [{ data: value }] },
    }
  );

  const loading = isLoading || isRefetching;
  const formattedValue = value ? JSON.parse(value) : null;
  const previewAmount = 3;

  const products = uniqBy(
    data.pages
      .map((page) => page.data)
      .flat()
      .filter(Boolean),
    (product) => product.id
  );

  const sortProducts = useCallback(
    (products) =>
      products.reduce((sp, product, index) => {
        if (Array.isArray(formattedValue))
          return formattedValue?.find((p) => p.id === product.id) && index >= previewAmount
            ? [product, ...sp]
            : [...sp, product];
        else
          return product.id === formattedValue?.id && index >= previewAmount
            ? [product, ...sp]
            : [...sp, product];
      }, []),
    [formattedValue]
  );

  const togglePicker = () => setPickerOpen((prev) => !prev);

  const isSelected = (product) => {
    if (multiple) return formattedValue?.some((p) => p.id === product.id);
    else return formattedValue?.id === product.id;
  };

  const handleChange = (product) => {
    if (multiple)
      value = JSON.stringify(
        !formattedValue || !formattedValue.find((p) => p.id === product.id)
          ? [...(formattedValue || []), _.pick(product, attribute.options.fields, 'id')]
          : formattedValue.filter((p) => p.id !== product.id),
        null,
        2
      );
    else
      value =
        !formattedValue || formattedValue.id !== product.id
          ? JSON.stringify(_.pick(product, attribute.options.fields, 'id'), null, 2)
          : null;

    onChange({
      target: {
        name,
        value: value === '[]' ? null : value,
        type: 'json',
      },
    });
  };

  return (
    <ShopifyFieldsContext.Provider
      value={{
        handleChange,
        togglePicker,
        refetch,
        fetchNextPage,
        isSelected,
        sortProducts,
        hasNextPage,
        value,
        dataUpdatedAt,
        loading,
        isError,
        isSuccess,
        products,
        formattedValue,
        previewAmount,
      }}
    >
      <Stack>
        <Stack horizontal justifyContent="space-between">
          <Typography variant="pi" fontWeight="bold">
            {name}
          </Typography>
          <Button variant="secondary" small disabled={loading} onClick={refetch}>
            <FormattedMessage id={getTrad('components.Input.refresh')} defaultMessage="Refresh" />
          </Button>
        </Stack>
        <Content paddingTop={1} alignItems="stretch" justifyContent="center">
          {loading && (
            <Stack grow="1" justifyContent="center" alignItems="center">
              <Loader small>
                <FormattedMessage
                  id={getTrad('components.Input.loading')}
                  defaultMessage="Loading"
                />
              </Loader>
            </Stack>
          )}
          {!loading && isError && (
            <Callout variant="error" justifyContent="center" alignItems="center" gap={4}>
              <Typography variant="omega" textColor="danger600">
                <FormattedMessage
                  id={getTrad('components.Input.fetchError')}
                  defaultMessage="Could not fetch products from Shopify"
                />
              </Typography>
              <Button variant="danger-light" onClick={refetch}>
                <FormattedMessage
                  id={getTrad('components.Input.refresh')}
                  defaultMessage="Refresh"
                />
              </Button>
            </Callout>
          )}
          {!loading &&
            isSuccess &&
            (products.length > 0 ? (
              <ProductGrid
                products={products}
                selectedProducts={value}
                onChange={handleChange}
                onViewMore={() => setPickerOpen(true)}
                canViewMore={hasNextPage}
              />
            ) : (
              <Callout grow={1} variant="empty" justifyContent="center" alignItems="center" gap={4}>
                <Typography variant="omega" textColor="warning600">
                  <FormattedMessage
                    id={getTrad('components.Input.empty')}
                    defaultMessage="No products found"
                  />
                </Typography>
              </Callout>
            ))}
        </Content>
        <Box paddingTop={2}>
          <Typography variant="pi" textColor="danger600">
            {error}
          </Typography>
        </Box>
      </Stack>
      {pickerOpen && <ProductPicker multiple={multiple} />}
    </ShopifyFieldsContext.Provider>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ),
};

export default Input;
