import { mode } from "@chakra-ui/theme-tools"

export const ButtonStyles = {
    baseStyle: {},

    sizes: {},

    variants: {
        navbutton: (props) => ({
            height: '64px',
            width: '100px',
            borderRadius: '12.5px',
            fontSize: '16px',
            textAlign: "center",
            marginLeft: '8px',
            marginTop: '6px',
            _hover: {
                bg: mode("rgba(0, 0, 0, 0.1)", "#212837")(props),
            }
        }),

        defaultStyle: {},
    }
}