# 🌤️ ClimaLink

Aplicación web que permite consultar el clima actual de cualquier ciudad del mundo. Desarrollada con **React**, **Material UI (MUI)** y utilizando la API de [WeatherAPI.com](https://www.weatherapi.com/).

## 🚀 Características

- Búsqueda de clima por nombre de ciudad
- Consulta en tiempo real del clima actual
- Información mostrada:
  - Ciudad y país
  - Temperatura en grados Celsius
  - Estado del clima (nublado, soleado, lluvioso, etc.)
  - Icono representativo del clima
- Interfaz responsive y moderna usando MUI

## 🧑‍💻 Tecnologías Utilizadas

- ⚛️ React
- 🎨 Material UI (MUI)
- 🌐 Fetch API
- 📦 Vite (entorno de desarrollo)
- ☁️ WeatherAPI (API de datos climáticos)

## 🔧 Instalación y Uso

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/weather-app.git
cd weather-app
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto y agrega tu clave de API:

```
VITE_API_KEY=tu_clave_de_weatherapi
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

5. Abre tu navegador en `http://localhost:5173` (o el puerto indicado).

## 🔑 Obtener API Key

Regístrate gratis en [WeatherAPI.com](https://www.weatherapi.com/) para obtener tu clave de API y colócala en el archivo `.env` como se muestra arriba.

## 📁 Estructura del Proyecto

```
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── .env
├── package.json
├── README.md
```

## 🙌 Créditos

- [WeatherAPI.com](https://www.weatherapi.com/) por la API del clima
- [Material UI](https://mui.com/) por los componentes de interfaz

## 📄 Licencia

Este proyecto se publica bajo la licencia MIT.