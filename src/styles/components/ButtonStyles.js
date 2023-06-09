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

        projectthemebutton: (props) => ({
            height: '45px',
            width: '200px',
            borderRadius: '6.25px',
            position: 'absolute',
            bottom: '16px',
            _hover: {
                bg: mode("rgba(0, 0, 0, 0.1)", "#212837")(props),
            }
        }),

        themebutton: (props) => ({
            height: '45px',
            width: '100px',
            borderRadius: '6.25px',
            position: 'absolute',
            bottom: '16px',
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

        skipnavbutton: (props) => ({
            border: '1px solid', 
            width: '250px',
            minWidth: '250px',
            height: '30px',
            minHeight: '30px',
            textAlign: 'center', 
            borderRadius: '6.5px', 
            cursor: 'pointer',
            _hover: {
                bg: mode("rgba(0, 0, 0, 0.1)", "#212837")(props),
            }
        }),

        appbutton: (props) => ({
            width: '250px',
            textAlign: 'center',
            borderRadius: '6.5px',
            _hover: {
                bg: mode("rgba(0, 0, 0, 0.1)", "#212837")(props),
            }
        }),

        defaultStyle: {},
    }
}