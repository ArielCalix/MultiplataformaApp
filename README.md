# MultiplataformaApp

Aplicación **multiplataforma** desarrollada por **Ariel Calix**, pensada como base para construir aplicaciones web e híbridas (por ejemplo, usando Apache Cordova) reutilizando la mayor parte del código fuente desde un solo repositorio.

Este proyecto sirve como “esqueleto” para:

- Centralizar la lógica de negocio, servicios y componentes UI.
- Publicar una versión web (carpeta `WebMulti/`).
- Generar un bundle estático (carpeta `www/`) que puede ser empaquetado como app móvil/desktop con Cordova u otra tecnología similar.
- Mantener una configuración de herramientas de desarrollo (linting, dependencias, etc.) en un solo lugar.

---

## 🚀 Tecnologías principales

- **TypeScript** (lenguaje predominante del proyecto).
- **JavaScript**, **HTML** y **CSS** para la parte de presentación y compatibilidad.
- **Node.js + npm** para scripts y gestión de dependencias (`package.json` / `package-lock.json`).
- **Apache Cordova** para empaquetado multiplataforma (`config.xml`).
- **ESLint** como herramienta de linting (`eslint.config.js`).

> Ajusta esta sección si ahí dentro usas un framework específico (por ejemplo, React, Vue, etc.) o librerías concretas.

---

## 📁 Estructura general del repositorio

> La estructura exacta de carpetas internas puede variar; aquí se documenta la intención de cada elemento principal y una estructura sugerida para organizar el código.

```bash
.
├── WebMulti/              # Código fuente principal de la aplicación web
│   ├── src/               # (Sugerido) Código fuente: componentes, páginas, servicios
│   ├── assets/            # (Sugerido) Imágenes, íconos, fuentes
│   ├── styles/            # (Sugerido) Hojas de estilo
│   └── ...                # Otros módulos propios de la app
│
├── www/                   # Salida estática / artefactos listos para servir o empaquetar
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── ...                # Archivos generados o copiados para la app empaquetada
│
├── config.xml             # Configuración de Apache Cordova / metadatos de la app
├── eslint.config.js       # Reglas de estilo y linting de código
├── package.json           # Dependencias, nombre del proyecto y scripts npm
├── package-lock.json      # Mapa exacto de dependencias instaladas
├── .gitignore             # Archivos y carpetas ignorados por Git
└── README.md              # (Este archivo) Documentación principal del repositorio
```

# MultiplataformaApp

Aplicación multiplataforma desarrollada por **Ariel Calix**, diseñada para centralizar el desarrollo web e híbrido (Cordova) dentro de un solo repositorio, reutilizando lógica, componentes y configuraciones.

---

## 🧩 Detalle de cada elemento del proyecto

## 1. Carpeta `WebMulti/`

La carpeta principal del módulo web. Aquí se desarrolla la lógica de la aplicación antes de compilarla hacia `www/`.

### Objetivo
Contener el código fuente vivo de la aplicación.

### Responsabilidades
- Estructura de navegación (rutas/páginas)
- Componentes UI
- Consumo de APIs
- Lógica compartida (helpers, utils, hooks)

### Organización sugerida
```bash
WebMulti/
├── src/
│   ├── main.ts(x)
│   ├── App.tsx
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   └── ...
└── ...
```

---

## 2. Carpeta `www/`

Carpeta generada tras compilar la aplicación web. Es la raíz usada por Cordova para empaquetar apps móviles.

### Contiene:
- HTML procesado
- Bundles JS/CSS
- Imágenes y recursos estáticos

```bash
www/
├── index.html
├── css/
├── js/
├── assets/
└── ...
```

---

## 3. Archivo `config.xml` (Cordova)

Define la configuración para empaquetado móvil:

- ID del paquete
- Nombre visible
- Versión
- Plugins utilizados
- Iconos y splash screens
- Permisos

Actúa como puente entre la aplicación web y la app nativa.

---

## 4. Archivo `eslint.config.js`

Maneja las reglas de estilo y calidad del código:

- Parser
- Reglas recomendadas
- Reglas personalizadas

Beneficia la consistencia del proyecto y evita errores comunes.

---

## 5. Archivo `package.json`

Controla dependencias y scripts.

### Ejemplo de scripts:
```json
"scripts": {
  "dev": "vite dev",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint ."
}
```

Scripts recomendados:
- `npm run dev`
- `npm run build`
- `npm run lint`

---

## 6. Archivo `package-lock.json`

Generado automáticamente por npm.  
Garantiza instalaciones reproducibles.

---

## 7. Archivo `.gitignore`

Evita subir archivos innecesarios como:

- `node_modules/`
- Builds temporales
- Configuraciones locales del IDE
- Archivos del sistema

---

# ⚙️ Instalación y uso

```bash
git clone https://github.com/ArielCalix/MultiplataformaApp.git
cd MultiplataformaApp
npm install
npm run dev
npm run build
```

---

# 📱 Empaquetado con Cordova

```bash
npm run build
cordova platform add android
cordova build android
```

Documentar:
- Versiones del SDK
- Firma de APK/AAB
- Permisos especiales

---

# 🧪 Pruebas

Si se implementan:

```bash
npm test
```

---

# 🗺️ Roadmap

- [ ] Documentar módulos internos
- [ ] Agregar capturas de pantalla
- [ ] Implementar CI/CD
- [ ] Crear librería de componentes
- [ ] Añadir pruebas unitarias

---

# 👤 Autor

**Ariel Calix**

---

# 📄 Licencia

```
MIT License
```
