import React, { useState } from 'react';
import { Grid, GridItem } from '@strapi/design-system/Grid';
import ProductCard from '../ProductCard';
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
import { get } from 'lodash';

const ViewMoreGridItem = styled(GridItem)`
  height: 100%;
`;

const ViewMoreButton = styled(Button)`
  width: 100%;
  height: 100%;
  justify-content: center;

  div {
    height: 100%;
  }
`;

const Content = styled(Stack)`
  min-height: 13.875rem;
`;

const Error = styled(Stack)`
  border: 1px solid ${({ theme }) => theme.colors.danger200};
  background-color: ${({ theme }) => theme.colors.danger100};
  border-radius: 4px;
  padding: 1rem;
`;

const MultipleProductInput = ({ name, attribute, onChange, value }) => {
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
  } = useInfiniteQuery(`${pluginId}/products`, ({ pageParam }) => fetchProducts(pageParam), {
    getNextPageParam: (lastPage) => get(lastPage, 'meta.pagination.nextPage'),
    initialData: { pages: [] },
  });

  const formattedValue = value ? JSON.parse(value) : undefined;
  const products = data.pages.map((page) => page.data).flat();
  const loading = isLoading || isRefetching;

  const handleChange = (product) =>
    onChange({
      target: {
        name,
        value: formattedValue?.find((p) => p.id === product.id)
          ? formattedValue.filter((p) => p.id !== product.id)
          : JSON.stringify([...formattedValue, product]),
      },
    });

  return (
    <>
      <Stack>
        <Stack horizontal justifyContent="space-between">
          <Typography variant="pi" fontWeight="bold">
            {name}
          </Typography>
          <Button variant="secondary" small disabled={loading} onClick={refetch}>
            <FormattedMessage
              id={getTrad('components.MultipleProductInput.refresh')}
              defaultMessage="Refresh"
            />
          </Button>
        </Stack>
        <Content paddingTop={1} alignItems="stretch" justifyContent="center">
          {loading && (
            <Stack grow="1" justifyContent="center" alignItems="center">
              <Loader small>
                <FormattedMessage
                  id={getTrad('components.MultipleProductInput.loading')}
                  defaultMessage="Loading"
                />
              </Loader>
            </Stack>
          )}
          {!loading && isError && (
            <Error grow={1} justifyContent="center" alignItems="center" gap={4}>
              <Typography variant="omega" textColor="danger600">
                <FormattedMessage
                  id={getTrad('components.MultipleProductInput.fetchError')}
                  defaultMessage="Could not fetch products from Shopify"
                />
              </Typography>
              <Button variant="danger-light" onClick={refetch}>
                <FormattedMessage
                  id={getTrad('components.MultipleProductInput.refresh')}
                  defaultMessage="Refresh"
                />
              </Button>
            </Error>
          )}
          {!loading && isSuccess && (
            <Grid gap={2}>
              {products.slice(0, 3).map((product) => (
                <GridItem key={product.id} col={3}>
                  <ProductCard
                    onChange={() => handleChange(product)}
                    selected={!!formattedValue?.find((p) => p.id === product.id)}
                    title={product.title}
                    image={product.image?.src}
                    productId={product.id}
                  />
                </GridItem>
              ))}
              {(products.length > 3 || hasNextPage) && (
                <ViewMoreGridItem col={3}>
                  <ViewMoreButton variant="tertiary" onClick={() => setPickerOpen(true)}>
                    <FormattedMessage
                      id={getTrad('components.MultipleProductInput.view-more')}
                      defaultMessage="View more"
                    />
                  </ViewMoreButton>
                </ViewMoreGridItem>
              )}
            </Grid>
          )}
        </Content>
      </Stack>
      {pickerOpen && (
        <ProductPicker
          products={products}
          multiple={true}
          onClose={() => setPickerOpen(false)}
          onSelect={handleChange}
          onFetchMore={fetchNextPage}
          hasMore={hasNextPage}
          onRefresh={refetch}
          selectedValues={formattedValue}
          isLoading={loading}
          updatedAt={dataUpdatedAt}
          onFinish={() => setPickerOpen(false)}
        />
      )}
    </>
  );
};

MultipleProductInput.propTypes = {
  name: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ),
};

export default MultipleProductInput;
