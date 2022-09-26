import React from 'react';
import PropTypes from 'prop-types';
import { Select, Option } from '@strapi/design-system/Select';
import { Box } from '@strapi/design-system/Box';
import { useIntl } from 'react-intl';
import getTrad from '../../utils/getTrad';

const Multiselect = ({ intlLabel, name, options, error, hint, onChange, value }) => {
  const { formatMessage } = useIntl();

  if (!Array.isArray(value)) value = [];

  const displayedValue = formatMessage(
    {
      id: getTrad('custom-fields.content-type-builder.multiselect.placeholder'),
      defaultMessage: '{number, plural, =0 {# fields} one {# field} other {# fields}} selected',
    },
    { number: value.length }
  );

  return (
    <Box>
      <Select
        multi
        label={formatMessage(intlLabel)}
        customizeContent={() => displayedValue}
        name={name}
        onChange={(values) => {
          onChange({
            target: { name, value: values },
          });
        }}
        value={value}
        error={error}
        hint={formatMessage(hint)}
      >
        {options.map((option) => (
          <Option key={option.key} value={option.value}>
            {formatMessage(option.metadatas.intlLabel)}
          </Option>
        ))}
      </Select>
    </Box>
  );
};

Multiselect.propTypes = {
  intlLabel: PropTypes.shape({
    id: PropTypes.string.isRequired,
    defaultMessage: PropTypes.string.isRequired,
    values: PropTypes.object,
  }).isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.any,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      metadatas: PropTypes.shape({
        intlLabel: PropTypes.shape({
          id: PropTypes.string.isRequired,
          defaultMessage: PropTypes.string.isRequired,
        }).isRequired,
        disabled: PropTypes.bool,
        hidden: PropTypes.bool,
      }).isRequired,
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired,
  default: PropTypes.array,
};

export default Multiselect;
