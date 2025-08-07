import { LoadingButton } from "@mui/lab";
import { Box, Container, TextField, Typography, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useState } from "react";

import weatherIcon from "./assets/LogoClima.png"; // Importar el icono de clima

const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}&lang=es&q=`;

// Crear tema oscuro
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
});

export default function App() {
  const [city, setCity] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: 0,
    condition: "",
    conditionText: "",
    icon: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError({ error: false, message: "" });
    setLoading(true);

    try {
      if (!city.trim()) throw { message: "El campo ciudad es obligatorio" };

      const res = await fetch(API_WEATHER + city);
      const data = await res.json();

      if (data.error) {
        throw { message: data.error.message };
      }

      console.log(data);

      setWeather({
        city: data.location.name,
        country: data.location.country,
        temperature: data.current.temp_c,
        condition: data.current.condition.code,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon,
      });
    } catch (error) {
      console.log(error);
      setError({ error: true, message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* Esto ayuda a establecer el fondo oscuro en toda la página */}
      <Container
        maxWidth={false} /* Elimina el límite de ancho */
        sx={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          p: 3,
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            align="center"
            gutterBottom
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2
            }}
          >
            <Box 
              component="img"
              src={weatherIcon}
              alt="Weather Icon"
              sx={{ 
                width: 40,
                height: 40,
                //filter: 'invert(1)' // Opcional para tema oscuro
              }}
            />
            ClimaLink
          </Typography>
          
          <Box
            sx={{ 
              width: '100%',
              display: "grid", 
              gap: 2 
            }}
            component="form"
            autoComplete="off"
            onSubmit={onSubmit}
          >
            <TextField
              id="city"
              label="Ciudad"
              variant="outlined"
              size="small"
              required
              fullWidth
              value={city}
              onChange={(e) => setCity(e.target.value)}
              error={error.error}
              helperText={error.message}
            />

            <LoadingButton
              type="submit"
              variant="contained"
              loading={loading}
              loadingIndicator="Buscando..."
              fullWidth
              size="large"
            >
              Buscar
            </LoadingButton>
          </Box>

          {weather.city && (
            <Box
              sx={{
                width: '100%',
                mt: 2,
                display: "grid",
                gap: 2,
                textAlign: "center",
              }}
            >
              <Typography variant="h4" component="h2">
                {weather.city}, {weather.country}
              </Typography>
              <Box
                component="img"
                alt={weather.conditionText}
                src={weather.icon}
                sx={{ margin: "0 auto" }}
              />
              <Typography variant="h5" component="h3">
                {weather.temperature} °C
              </Typography>
              <Typography variant="h6" component="h4">
                {weather.conditionText}
              </Typography>
            </Box>
          )}

          <Typography
            textAlign="center"
            sx={{ mt: 2, fontSize: "10px" }}
          >
            Powered by:{" "}
            <a
              href="https://www.weatherapi.com/"
              title="Weather API"
              style={{ color: '#90caf9' }}
            >
              WeatherAPI.com
            </a>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}