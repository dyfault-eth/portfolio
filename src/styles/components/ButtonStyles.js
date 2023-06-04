import { mode } from "@chakra-ui/theme-tools"

export const ButtonStyles = {
    baseStyle: {},

    sizes: {},

    variants: {
        navbutton: (props) => ({
            height: '45px',
            width: '100px',
            borderRadius: '6.25px',
            fontSize: '16px',
            textAlign: "center",
            marginLeft: '8px',
            marginTop: '6px',
            _hover: {
                bg: mode("rgba(0, 0, 0, 0.1)", "#212837")(props),
            }
        }),

        projectnavbutton: (props) => ({
            height: '45px',
            width: '200px',
            borderRadius: '6.25px',
            position: 'relative',
            _hover: {
                bg: mode("rgba(0, 0, 0, 0.1)", "#212837")(props),
            }
        }),

        themebutton: (props) => ({
            height: '45px',
            width: '100px',
            borderRadius: '6.25px',
            position: 'absolute',
            _hover: {
                bg: mode("rgba(0, 0, 0, 0.1)", "#212837")(props),
            }
        }),

        urlbutton: (props) => ({
            textDecoration: 'underline',
            fontWeight: 'None',
            marginRight: '',
            _hover: {
                color: mode("#00C9FF", "#262E83")(props),
            }
        }),

        defaultStyle: {},
    }
}