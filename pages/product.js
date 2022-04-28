import Carousel from 'react-material-ui-carousel'

import {
    Grid,
    Box,
    Typography,
    Chip,
    Container,
    Card,
    CardHeader,
    Avatar,
    CardMedia
} from '@mui/material'

import TemplateDefault from '../src/templates/default/Default'

import styles from '../styles/product.module.css'

const Product = () => {
    return (
        <TemplateDefault>
            <Container maxWidth='lg'>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Box className={styles.box}>
                            <Carousel
                                autoPlay={true}
                                animation={'slide'}
                                navButtonsAlwaysVisible={true}
                                navButtonsProps={{
                                    style: {
                                        color: 'white'
                                    }
                                }}
                            >
                                <Card className={styles.card}>
                                    <CardMedia
                                        className={styles.cardMedia}
                                        image={'https://source.unsplash.com/random?a=1'}
                                        title={'Title image'}
                                    />
                                </Card>
                                <Card className={styles.card}>
                                    <CardMedia
                                        className={styles.cardMedia}
                                        image={'https://source.unsplash.com/random?a=2'}
                                        title={'Title image'}
                                    />
                                </Card>
                            </Carousel>
                        </Box>
                        <Box className={styles.box}>
                            <Typography component={'span'} variant={'caption'}>
                                Publicado 22 abril 2022
                            </Typography>
                            <Typography component={'h4'} variant={'h4'} className={styles.productName}>
                                Produto X
                            </Typography>
                            <Typography component={'h4'} variant={'h4'} className={styles.price}>
                                R$ 90,00
                            </Typography>
                            <Chip label={'Categoria'} />
                        </Box>
                        <Box className={styles.box}>
                            <Typography component={'h6'} variant={'h6'}>
                                Descrição
                            </Typography>
                            <Typography component={'p'} variant={'body2'}>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={styles.box} elevation={0}>
                            <CardHeader
                                avatar={<Avatar>A</Avatar>}
                                title={'Alison Leme'}
                                subheader={'alisonletos@gmail.com'}
                            />
                            <CardMedia
                                image={'https://source.unsplash.com/random'}
                                title={'Alison Leme'}
                            />
                        </Card>

                        <Box className={styles.box}>
                            <Typography component={'h6'} variant={'h6'}>
                                Localização
                            </Typography>
                            <Typography component={'p'} variant={'body2'}>
                                Rua Nelson Correia Leite - Sorocaba/SP
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </TemplateDefault>
    )
}

export default Product