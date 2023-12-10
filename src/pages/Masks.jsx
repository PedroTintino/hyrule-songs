import { Container, Grid } from '@mui/material'
import axios from 'axios'
import Navbar from '../components/Navbar/Index'
import MaskCard from '../components/Cards/MaskCard'
import { useEffect, useState } from 'react'
import styles from './Masks.module.css'
function Masks(){
    const [masks, setMasks] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async() => {
        try{
        var response = await axios.get('src/assets/db/masks.json');
        setMasks(response.data)
        }
        catch (e){
            console.log(e)
        }
        console.log(response.data)
    };

    return(
        <div>
        <Navbar />
        <Container maxWidth="md"  >
        
        <Grid container display={'flex'} justifyContent={'right'} marginLeft={'30em'}textAlign={'center'} padding={'4em'} overflow={'auto'}>
                {masks.map((mask, index) => 
                    <Grid item xs={12} sm={5} md={4} lg={4} key={index}>
                      <MaskCard
                        name={mask.Item}
                        image={mask.Image}
                        location={mask.Location}
                      />
                    </Grid> 
                )} 
        </Grid>
        </Container>
        <div className={styles.tittle}>
        <h1>You have met with a terrible fate, haven't you?</h1>
        </div>
        <img className={styles.happySalesman} src='/img/happy-mask-salesman.png'></img>
    </div>

    )
}

export default Masks