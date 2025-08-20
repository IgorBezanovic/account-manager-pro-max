import React, { useState } from 'react';
import {
    Box,
    TextField,
    Typography,
    Button,
    Grid,
    Paper
} from '@mui/material';

const PlateCalculator: React.FC = () => {
    const [bruto, setBruto] = useState<number>(0);
    const [radniDani, setRadniDani] = useState<number>(22);
    const [odsustvo, setOdsustvo] = useState<number>(0);
    const [prevoz, setPrevoz] = useState<number>(0);
    const [topliObrok, setTopliObrok] = useState<number>(0);
    const [neto, setNeto] = useState<number | null>(null);

    const calculate = () => {
        const osnovica = bruto * ((radniDani - odsustvo) / radniDani);

        // Doprinosi (procenjene stope)
        const pio = osnovica * 0.145;
        const zdravstveno = osnovica * 0.0575;
        const nezaposlenost = osnovica * 0.0075;

        const ukupniDoprinosi = pio + zdravstveno + nezaposlenost;

        // Porez (pretpostavimo lični odbitak 19,300 RSD)
        const licniOdbitak = 19300;
        const oporeziviDochodak = Math.max(osnovica - licniOdbitak, 0);
        const porez = oporeziviDochodak * 0.1;

        const netoPlata = osnovica - ukupniDoprinosi - porez + prevoz + topliObrok;

        setNeto(Number(netoPlata.toFixed(2)));
    };

    return (
        <Paper elevation={3} sx={{ padding: 4, maxWidth: 600, margin: 'auto' }}>
            <Typography variant="h5" gutterBottom>
                Obračun plate
            </Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 6 }}>
                    <TextField
                        label="Bruto plata"
                        type="number"
                        fullWidth
                        value={bruto}
                        inputProps={{ min: 0 }}
                        onChange={(e) => setBruto(Number(e.target.value))}
                    />
                </Grid>
                <Grid size={{ xs: 6 }}>
                    <TextField
                        label="Radni dani"
                        type="number"
                        fullWidth
                        value={radniDani}
                        inputProps={{ min: 0 }}
                        onChange={(e) => setRadniDani(Number(e.target.value))}
                    />
                </Grid>
                <Grid size={{ xs: 6 }}>
                    <TextField
                        label="Odsustvo (dani)"
                        type="number"
                        fullWidth
                        value={odsustvo}
                        inputProps={{ min: 0 }}
                        onChange={(e) => setOdsustvo(Number(e.target.value))}
                    />
                </Grid>
                <Grid size={{ xs: 6 }}>
                    <TextField
                        label="Prevoz (RSD)"
                        type="number"
                        fullWidth
                        value={prevoz}
                        inputProps={{ min: 0 }}
                        onChange={(e) => setPrevoz(Number(e.target.value))}
                    />
                </Grid>
                <Grid size={{ xs: 6 }}>
                    <TextField
                        label="Topli obrok (RSD)"
                        type="number"
                        fullWidth
                        value={topliObrok}
                        inputProps={{ min: 0 }}
                        onChange={(e) => setTopliObrok(Number(e.target.value))}
                    />
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <Button variant="contained" fullWidth onClick={calculate}>
                        Izračunaj neto platu
                    </Button>
                </Grid>
                {neto !== null && (
                    <Grid size={{ xs: 12 }}>
                        <Typography variant="h6" color="primary">
                            Neto plata: {neto} RSD
                        </Typography>
                    </Grid>
                )}
            </Grid>
        </Paper >
    );
};

export default PlateCalculator;