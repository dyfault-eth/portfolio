import { IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";

export const ToggleColorMode = ({variant}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton variant={variant}
    onClick={() => toggleColorMode()}>
      {colorMode === "dark" ? (
        <SunIcon color="orange.200" />
      ) : (
        <MoonIcon color="blue.700" />
      )}
    </IconButton>
  );
};