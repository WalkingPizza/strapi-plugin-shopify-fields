import PropTypes from 'prop-types';
import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardCheckbox,
  CardAsset,
  CardContent,
  CardTitle,
  CardSubtitle,
} from '@strapi/design-system/Card';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  cursor: pointer;
`;

const StyledCardContent = styled(CardContent)`
  width: 100%;
`;

const ProductCard = ({ selected, productId, title, image, onChange }) => {
  return (
    <StyledCard onClick={onChange}>
      <CardHeader>
        <CardCheckbox value={selected} />
        <CardAsset src={image} />
      </CardHeader>
      <CardBody>
        <StyledCardContent style={{ width: '100%' }}>
          <CardTitle ellipsis>{title}</CardTitle>
          <CardSubtitle>ID: {productId}</CardSubtitle>
        </StyledCardContent>
      </CardBody>
    </StyledCard>
  );
};

ProductCard.defaultProps = {
  selected: false,
};

ProductCard.propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  productId: PropTypes.number.isRequired,
};

export default ProductCard;
