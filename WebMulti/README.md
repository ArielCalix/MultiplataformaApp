# 📘 Guía de Proyecto: MultiplataformaApp  
### *Explicación ampliada sobre el módulo WebMulti (React + TS + Redux + Reactstrap)*

Este documento profundiza específicamente en el módulo **WebMulti**, el núcleo funcional del proyecto.  
Está escrito para estudiantes, con lenguaje claro y estructura formativa.

---

# 🧩 ¿Qué es WebMulti?

**WebMulti** es el módulo donde realmente se desarrolla la aplicación web usando:

- **React** — para construir interfaces basadas en componentes  
- **TypeScript** — para tipado estricto y reducción de errores  
- **Redux** — para manejar el estado global entre componentes  
- **Reactstrap** — para crear interfaces visuales con componentes de Bootstrap  

Es aquí donde se programa toda la lógica de la app, las pantallas, los componentes, los hooks, los servicios y la comunicación con APIs.

---

# 🧱 Arquitectura general de WebMulti

```
WebMulti/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/
│   ├── pages/
│   ├── store/
│   ├── services/
│   ├── hooks/
│   ├── utils/
│   └── styles/
└── ...
```

A continuación, veremos cada una de estas partes con propósitos académicos.

---

# 🟦 1. `main.tsx` — Punto de entrada de la aplicación

Este archivo:

- Monta la app en el DOM (con `ReactDOM.createRoot`)  
- Envuelve la aplicación con `<Provider>` de Redux  
- Aplica configuraciones globales  
- Carga estilos generales  

Ejemplo simplificado:

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
      <App />
  </Provider>
);
```

### ¿Por qué es importante?
Porque permite que *cualquier componente* tenga acceso al estado global de Redux sin props innecesarias.

---

# 🟦 2. `App.tsx` — Componente raíz

Aquí se definen:

- La estructura principal de la app  
- Las rutas  
- El layout general (barra superior, menú lateral, footer, etc.)  

Ejemplo conceptual:

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Configuracion from "./pages/Configuracion";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/config" element={<Configuracion />} />
    </Routes>
  </BrowserRouter>
);

export default App;
```

---

# 🟩 3. Carpeta `components/` — Construyendo bloques reutilizables

Aquí viven componentes independientes como:

- Botones  
- Tarjetas  
- Formularios  
- Modales  
- Menús  
- Loaders  

**Buenas prácticas para estudiantes:**

- Mantener componentes pequeños  
- Cada componente debe tener una función clara  
- Evitar repetir código: crear un componente reutilizable  

Ejemplo:

```tsx
import { Button } from "reactstrap";

export const BtnPrimario = ({ texto, onClick }) => (
  <Button color="primary" onClick={onClick}>
    {texto}
  </Button>
);
```

---

# 🟧 4. Carpeta `pages/` — Las pantallas completas de la app

Aquí se crean páginas como:

- `Inicio`  
- `Login`  
- `Dashboard`  
- `Configuracion`  
- `Usuarios`  

Cada página puede usar componentes, servicios, hooks, Redux, etc.

Ejemplo educativo:

```tsx
const Inicio = () => {
  return (
    <div>
      <h1>Bienvenido</h1>
      <p>Esta es la página de inicio</p>
    </div>
  );
};
```

---

# 🟥 5. Carpeta `store/` — Arquitectura Redux

Redux se utiliza para manejar:

- Estado global  
- Preferencias de usuario  
- Sesiones  
- Datos obtenidos desde APIs  

Estructura típica:

```
store/
├── index.ts
├── slices/
│   ├── usuarioSlice.ts
│   └── configuracionSlice.ts
└── hooks.ts
```

### ¿Qué es un slice?

Un "slice" es una pieza del estado global.  
Ejemplo sencillo:

```ts
import { createSlice } from "@reduxjs/toolkit";

const usuarioSlice = createSlice({
  name: "usuario",
  initialState: {
    nombre: "",
    logueado: false,
  },
  reducers: {
    login: (state, action) => {
      state.nombre = action.payload;
      state.logueado = true;
    },
    logout: (state) => {
      state.nombre = "";
      state.logueado = false;
    }
  }
});

export const { login, logout } = usuarioSlice.actions;
export default usuarioSlice.reducer;
```

---

# 🟨 6. Carpeta `services/` — Comunicación con APIs

Esta capa se encarga de:

- Peticiones HTTP  
- Lógica de transformación de datos  
- Conexión con backend  

Ejemplo académico:

```ts
import axios from "axios";

export const obtenerUsuarios = async () => {
  const resp = await axios.get("https://api.example.com/usuarios");
  return resp.data;
};
```

---

# 🟪 7. Carpeta `hooks/` — Lógica reutilizable

Aquí viven hooks personalizados como:

- `useAuth()`  
- `useFetch()`  
- `useForm()`  

Ejemplo:

```ts
import { useState } from "react";

export const useContador = () => {
  const [valor, setValor] = useState(0);

  return {
    valor,
    incrementar: () => setValor(valor + 1),
    reset: () => setValor(0)
  };
};
```

---

# 🟫 8. Carpeta `utils/` — Funciones auxiliares

Ejemplo de utilidades:

- Formatear fechas  
- Validar correos  
- Convertir texto  
- Procesar respuestas API  

Ejemplo:

```ts
export const formatearFecha = (fecha: string) => {
  return new Date(fecha).toLocaleDateString("es-HN");
};
```

---

# 🟦 9. Carpeta `styles/` — Estilos globales o parciales

Puede contener:

- Variables globales  
- Temas  
- Estilos SCSS o CSS  
- Archivos de Bootstrap si se personalizan  

Reactstrap usa Bootstrap, así que aquí puedes sobrescribir estilos.

---

# 🎨 ¿Dónde entra Reactstrap?

Reactstrap permite usar los componentes de Bootstrap dentro de React, por ejemplo:

```tsx
import { Card, CardBody, CardTitle } from "reactstrap";

const TarjetaInfo = () => (
  <Card>
    <CardBody>
      <CardTitle tag="h5">Información</CardTitle>
    </CardBody>
  </Card>
);
```

Beneficios:

- Componentes listos para producción  
- Consistencia visual  
- Compatibilidad con Bootstrap 4/5  

---

# 🔵 ¿Por qué usar React + Redux + TS?

| Tecnología     | Beneficio académico                            |
| -------------- | ---------------------------------------------- |
| **React**      | Componentes, JSX, reactividad moderna          |
| **TypeScript** | Evita errores, tipado estricto, mantenibilidad |
| **Redux**      | Manejo profesional del estado global           |
| **Reactstrap** | Interfaces limpias basadas en Bootstrap        |

En conjunto, ofrecen un entorno de desarrollo completo, moderno y escalable.

---

# 🎓 Resumen para estudiantes

WebMulti demuestra:

- Arquitectura profesional  
- Uso real de Redux  
- Lógica separada por responsabilidades  
- Componentización  
- Buenas prácticas con TypeScript  
- Integración visual con Reactstrap  

Es un excelente proyecto base para aprender desarrollo front-end avanzado.

---

# 👨‍🏫 Autor

Documento creado para fines educativos por **Ariel Calix**.
