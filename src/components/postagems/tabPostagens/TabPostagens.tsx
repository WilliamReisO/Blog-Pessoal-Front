import Box from '@mui/material/Box';
import React from 'react';
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import ListaPostagem from '../listaDePostagens/ListaPostagem';
import { TabContext, TabPanel } from '@material-ui/lab';
import './TabPostagens.css'

function TabPostagens() {
    const [value, setValue] = React.useState('1');

    const handleChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    
    };

    return ( 
        <TabContext value={value}>
            <AppBar className='tab-style'>
                <Tabs centered indicatorColor="secondary" onChange={handleChange}>
                    <Tab label="Todas as postagens" value="1" />
                    <Tab label="Sobre-nós" value="2" />
                </Tabs>
            </AppBar>
            <TabPanel value="1"  className='labol-01'>
                <Box >
                    <ListaPostagem />
                </Box>
                <Box >
                    <ListaPostagem />
                </Box>

            </TabPanel>
            <TabPanel value="2">
                <Typography variant="h5" gutterBottom className='titulo-sobre'> Ola meu nome é william </Typography>
                    <Typography variant="body1" gutterBottom className='text-sobre'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis reiciendis quae illo vitae, 
                        excepturi tempora facere ratione? Corrupti, corporis minus voluptate earum aut, dolorum nisi officia 
                        perspiciatis eum, hic velit!
                </Typography>
            </TabPanel>
        </TabContext>
);
}
export default TabPostagens;