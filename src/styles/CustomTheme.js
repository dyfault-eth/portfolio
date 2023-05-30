import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import { ButtonStyles as Button } from "./components/ButtonStyles";

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const styles = {
    global: props => ({
        body: {
            bg: mode('rgb(255, 255, 255)', '#1a202c')(props),
        }
    }),
}

export const CustomTheme = extendTheme({
    config,
    styles,
    components: {
        Button,
    }
})