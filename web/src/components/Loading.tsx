import { LinearProgress } from "@mui/material"
import { Box } from "@mui/system"

export const Loading = () => {
    return (
    <Box>
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
    </Box>
    )
}