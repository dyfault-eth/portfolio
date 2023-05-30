import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button, useColorModeValue } from '@chakra-ui/react';

export const NavButton = ({ variant, to, children }) => {

  const location = useLocation();
  const activePath = location.pathname;

  const color = useColorModeValue("orange.300", "orange.500")

  return (
    <Button as={NavLink} to={to} variant={variant} color={activePath === to ? color : ""}>
      {children}
    </Button>
  );
};