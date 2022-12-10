import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type CardProps = {
    formName: string
    onClick: () => void
}

export const FromCard: React.FC<CardProps> = ({ formName, onClick }) => {
    return (
        <Card sx={{ maxWidth: 245, height:245 }} onClick={onClick}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="100"
                image="/assets/form.png"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {formName}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}