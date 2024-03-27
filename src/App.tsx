import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import Grid from '@mui/material/Grid';
// import { Grid, TextField, Select, MenuItem, Button, AppBar, Toolbar, Typography } from '@mui/material';

// import SelectableInput from './components/SelectableInput';

import FiltersContainer from './containers/FiltersContainer';


function App() {
  return (
    <div>
        {/* <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              SILINDataX
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid container spacing={3} style={{ padding: 20 }}>
          <Grid item xs={3}>
            <TextField label="Seleccione la entidad" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Digite la identificación" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Digite el nombre" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={3}>
            <Select fullWidth variant="outlined">
              <MenuItem value="">
                <em>Seleccione el destino económico</em>
              </MenuItem>
            </Select>
          </Grid>
          <Grid item xs={3}>
            <TextField label="Seleccione el año" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={3}>
            <TextField label="Digite el medidor" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={3}>
            <Select fullWidth variant="outlined">
              <MenuItem value="">
                <em>Seleccione la empresa</em>
              </MenuItem>
            </Select>
          </Grid>
          <Grid item xs={3}>
            <Select fullWidth variant="outlined">
              <MenuItem value="">
                <em>Seleccione el estrato</em>
              </MenuItem>
            </Select>
          </Grid>
        </Grid>

        <Button variant="contained" color="primary" style={{ margin: 20 }}>
          Cerrar Sesión
        </Button>

        <Grid container spacing={3} style={{ padding: 20 }}>
          <Grid item xs={3}>
            <SelectableInput type='text'  label='Nombre / Razón Social' placeholder='Ingrese al pollito' />
          </Grid>
          <Grid item xs={3}>
            <SelectableInput type='number'  label='Numero de identificación' placeholder='Pollito numerico' />
          </Grid>
          <Grid item xs={3}>
            <SelectableInput type='select'  label='Destino economico' placeholder='Seleccione al pollito' options={[{ label: "Pollito Tactico", value: "pollito-tactico"  }, { label: "Pollito Tactico 2", value: "pollito-tactico-2"  }]}/>
          </Grid>
          <Grid item xs={3}>
            <SelectableInput type='multi-select'  label='Empresa de energia' placeholder='Seleccione a los pollitos' options={[{ label: "Pollito Tactico", value: "pollito-tactico"  }, { label: "Pollito Tactico 2", value: "pollito-tactico-2"  }]} />
          </Grid>
        </Grid> */}

        <FiltersContainer />

      </div>
  );
}

export default App;
