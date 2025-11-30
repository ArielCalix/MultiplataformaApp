# 📘 Guía de Proyecto: MultiplataformaApp  
### *Explicación para Estudiantes*

Este documento tiene como objetivo ayudarte a comprender la estructura, propósito y funcionamiento del proyecto **MultiplataformaApp**.  
Aquí encontrarás una explicación clara y amigable de cada elemento del repositorio, para que puedas estudiarlo, replicarlo o usarlo como base para tus propios proyectos.

---

# 🧩 ¿Qué es MultiplataformaApp?

Es un proyecto diseñado para trabajar tanto como **aplicación web** como **aplicación móvil híbrida** usando **Apache Cordova**.  
Su estructura separa el código fuente y la versión final compilada para garantizar orden, mantenibilidad y escalabilidad.

Ideal como ejemplo académico para comprender:

- Arquitectura web moderna  
- Procesos de build  
- Uso de Cordova para empaquetar apps móviles  
- Organización profesional de un repositorio  

---

# 📁 Estructura del Proyecto (explicada para estudiantes)

A continuación verás las carpetas más importantes y para qué sirven.

---

## 1. 📂 Carpeta `WebMulti/` — *Aquí vive la aplicación real*

Es la sección donde se escribe la aplicación web:

- Aquí escribes componentes  
- Aquí escribes páginas  
- Aquí llamas APIs  
- Aquí va la lógica de tu aplicación  

Piensa en `WebMulti/` como **el lugar donde programas la app**.

### 🧠 ¿Qué suele contener?

```bash
WebMulti/
├── src/
│   ├── main.ts(x)     # Archivo principal donde inicia la app
│   ├── App.tsx        # Componente raíz (estructura general)
│   ├── components/    # Botones, tarjetas, formularios…
│   ├── pages/         # Pantallas completas (Home, Login, Perfil…)
│   ├── services/      # Comunicación con APIs
│   ├── utils/         # Funciones de ayuda
│   └── ...
└── ...
```

### 📘 Ejemplo de módulos dentro de esta carpeta
- `pages/Inicio` → pantalla principal  
- `pages/Configuracion` → ajustes del usuario  
- `services/apiCliente` → módulo que se encarga de consumir APIs  

---

## 2. 📂 Carpeta `www/` — *Aquí está la versión lista para ejecutar*

Esta carpeta se genera automáticamente.  
No se programa aquí directamente: es el **resultado final** de compilar `WebMulti/`.

Cuando generas tu build, esta carpeta contiene:

- `index.html`
- Código JavaScript ya empaquetado
- CSS procesado
- Imágenes optimizadas

```bash
www/
├── index.html
├── css/
├── js/
├── assets/
└── ...
```

### Para qué sirve:
- Cordova la usa como base para crear una app móvil  
- Puedes subir esta carpeta a un hosting estático  
- Es la versión optimizada para producción  

---

## 3. ⚙️ Archivo `config.xml` — *El corazón de Cordova*

Si quieres convertir la app web en una app móvil, **este archivo es clave**.

Aquí se definen:

- 🆔 Identificador del paquete (ej.: com.miapp.demo)  
- 📱 Nombre que verá el usuario en su celular  
- 🔢 Versión de la app  
- 🔌 Plugins instalados  
- 🖼️ Iconos, permisos y pantallas de carga  

Actúa como puente entre **la web** y **Android/iOS**.

---

## 4. 🧼 Archivo `eslint.config.js` — *Reglas de estilo del código*

Este archivo contiene reglas que nos ayudan a escribir código más limpio.

Sirve para:

- Evitar errores comunes  
- Mantener un mismo estilo entre desarrolladores  
- Detectar problemas antes de ejecutar la aplicación  

Ejemplo de lo que controla:

- Uso de comillas  
- Espaciado  
- Variables sin usar  
- Buenas prácticas  

---

## 5. 📦 Archivo `package.json`

Este archivo controla dependencias y comandos del proyecto.

Aquí encontramos:

- Nombre y versión del proyecto  
- Librerías instaladas  
- Scripts para ejecutar el proyecto  

### Ejemplo de scripts comunes:
```json
"scripts": {
  "dev": "vite dev",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint ."
}
```

---

## 6. 📄 Archivo `package-lock.json`

Este archivo no se modifica a mano.  
Sirve para asegurar que todos los que instalen el proyecto obtengan exactamente las mismas versiones de dependencias.

---

## 7. 🚫 Archivo `.gitignore`

Aquí se especifican archivos que **no deben subirse al repositorio**, como:

- `node_modules/`
- carpetas de build
- configuraciones del editor
- archivos del sistema

Esto mantiene el repositorio limpio y profesional.

---

# ⚙️ Cómo ejecutar el proyecto (estudiantes)

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/ArielCalix/MultiplataformaApp.git
cd MultiplataformaApp
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Correr el proyecto en desarrollo
```bash
npm run dev
```

### 4️⃣ Generar la versión de producción
```bash
npm run build
```

Esto generará la carpeta `www/`.

---

# 📱 Cómo generar la app móvil (Cordova)

### 1. Crear la build web
```bash
npm run build
```

### 2. Agregar plataforma
```bash
cordova platform add android
```

### 3. Generar APK o AAB
```bash
cordova build android
```

¡Y listo! Tendrás una versión que se puede instalar en un teléfono Android.

---

# 🧪 Pruebas del proyecto

Si en algún momento se agregan pruebas:

```bash
npm test
```

---

# 🗺️ Roadmap del proyecto (plan de mejoras)

- [ ] Agregar documentación de los módulos internos  
- [ ] Incluir capturas de pantalla de la app  
- [ ] Agregar CI/CD  
- [ ] Crear componentes reutilizables  
- [ ] Añadir pruebas unitarias  

---

# 👨‍🏫 Autor

Proyecto desarrollado por **Ariel Calix**  
Material educativo para estudiantes de desarrollo de software.

---

# 📄 Licencia
```
MIT License
```

Si el proyecto pasa a ser privado, puede cambiarse a **Todos los derechos reservados**.

---

# 🎓 Nota final para estudiantes

Este proyecto es un excelente ejemplo de:
- Organización profesional
- Separación entre código fuente y build
- Uso de herramientas modernas
- Desarrollo multiplataforma

Puedes estudiarlo, replicarlo y modificarlo para tus propios proyectos académicos o personales.

[Proyecto React](https://github.com/ArielCalix/MultiplataformaApp/tree/master/WebMulti)
