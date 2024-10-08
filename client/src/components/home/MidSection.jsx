//this is for the three banners after deal of the day section 
import {  Grid, styled } from '@mui/material';
import {ImageURL} from "../../constant/data.js"; 

//grid is used for the sake of responsiveness
const Wrapper = styled(Grid)`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
`;

const Image = styled('img')(({ theme }) => ({ 
    display: 'flex',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%',
    //md is medium screen
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 120
    }
}));

const MidSection = () => {
    //covid banner image url
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Wrapper lg={12} sm={12} md={12} xs={12} container>
                {
                    ImageURL.map(image => (
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <img src={image} alt="" style={{ width: '100%' }} />
                        </Grid>
                    ))
                }
            </Wrapper>
            <Image src={url} />
        </>
    )
}

export default MidSection;