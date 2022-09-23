// material-ui
import { Box } from '@mui/material';

function Footer({ component }) {
    return (
        <Box component={component}>
            <p>Author: Hege Refsnes</p>
            <p>
                <a href="mailto:hege@example.com">hege@example.com</a>
            </p>
        </Box>
    );
}

export default Footer;
