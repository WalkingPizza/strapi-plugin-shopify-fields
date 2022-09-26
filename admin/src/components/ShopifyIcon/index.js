import React from "react";
import { Flex } from "@strapi/design-system/Flex";
import styled, { useTheme } from "styled-components";

const IconBox = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.primary100};
  border: 1px solid ${({ theme }) => theme.colors.primary200};
`;

const ShopifyIcon = () => {
  const theme = useTheme();

  return (
    <IconBox
      justifyContent="center"
      alignItems="center"
      width={7}
      height={6}
      hasRadius
      aria-hidden
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="1rem"
        height="1rem"
        viewBox="0 0 109.5 124.5"
        xmlSpace="preserve"
        fill={theme.colors.primary600}
      >
        <path
          d="M74.7,14.8c0,0-1.4,0.4-3.7,1.1c-0.4-1.3-1-2.8-1.8-4.4c-2.6-5-6.5-7.7-11.1-7.7c0,0,0,0,0,0
    c-0.3,0-0.6,0-1,0.1c-0.1-0.2-0.3-0.3-0.4-0.5c-2-2.2-4.6-3.2-7.7-3.1c-6,0.2-12,4.5-16.8,12.2c-3.4,5.4-6,12.2-6.7,17.5
    c-6.9,2.1-11.7,3.6-11.8,3.7c-3.5,1.1-3.6,1.2-4,4.5C9.1,40.7,0,111.2,0,111.2l75.6,13.1V14.6C75.2,14.7,74.9,14.7,74.7,14.8z
     M57.2,20.2c-4,1.2-8.4,2.6-12.7,3.9c1.2-4.7,3.6-9.4,6.4-12.5c1.1-1.1,2.6-2.4,4.3-3.2C56.9,12,57.3,16.9,57.2,20.2z M49.1,4.3
    c1.4,0,2.6,0.3,3.6,0.9c-1.6,0.8-3.2,2.1-4.7,3.6c-3.8,4.1-6.7,10.5-7.9,16.6c-3.6,1.1-7.2,2.2-10.5,3.2
    C31.7,19.1,39.8,4.6,49.1,4.3z M37.4,59.3c0.4,6.4,17.3,7.8,18.3,22.9c0.7,11.9-6.3,20-16.4,20.6c-12.2,0.8-18.9-6.4-18.9-6.4
    l2.6-11c0,0,6.7,5.1,12.1,4.7c3.5-0.2,4.8-3.1,4.7-5.1c-0.5-8.4-14.3-7.9-15.2-21.7C23.8,51.8,31.4,40.1,48.2,39
    c6.5-0.4,9.8,1.2,9.8,1.2l-3.8,14.4c0,0-4.3-2-9.4-1.6C37.4,53.5,37.3,58.2,37.4,59.3z M61.2,19c0-3-0.4-7.3-1.8-10.9
    c4.6,0.9,6.8,6,7.8,9.1C65.4,17.7,63.4,18.3,61.2,19z"
        />
        <path
          d="M78.1,123.9l31.4-7.8c0,0-13.5-91.3-13.6-91.9c-0.1-0.6-0.6-1-1.1-1c-0.5,0-9.3-0.2-9.3-0.2s-5.4-5.2-7.4-7.2
    V123.9z"
        />
      </svg>
    </IconBox>
  );
};

export default ShopifyIcon;
