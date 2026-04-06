# 🧪 Prueba Técnica - Grupo VIHER

Bienvenido/a 👋
El objetivo de esta prueba es evaluar tu forma de trabajar con código y Git.

---

## 🎯 Objetivo

Debes:

* Trabajar sobre este repositorio
* Resolver los requerimientos indicados
* Enviar tu solución mediante un Pull Request

---

## 🚀 Instrucciones

### 1. Haz un Fork del repositorio

Da clic en el botón **Fork** (arriba a la derecha) y crea una copia en tu cuenta personal.

---

### 2. Clona tu fork

```bash
git clone https://github.com/Lexmago/prueba-practica-pr.git
cd prueba-practicantes
```

---

### 3. Crea una nueva rama

```bash
git checkout -b solucion-tu-nombre
```

---

### 4. Realiza la prueba

Implementa tu solución siguiendo los requerimientos indicados mas adelante en este documento.

---

### 5. Guarda tus cambios

```bash
git add .
git commit -m "Resolviendo prueba técnica"
```

---

### 6. Sube tu solución

```bash
git push origin solucion-tu-nombre
```

---

### 7. Crea un Pull Request

1. Ve a tu repositorio en GitHub
2. Da clic en **"Compare & pull request"**
3. Asegúrate de que el Pull Request apunte al repositorio original (Importante!):

```
prueba-practica-pr → main
```

4. Agrega una breve descripción de lo que hiciste
5. Envía el Pull Request

---

## 📌 Reglas

* ❌ No hagas push directo a `main` (Decisivo para tu evaluación)
* ✅ Usa una rama con tu nombre
* ✅ Escribe commits claros
* ✅ Explica tu solución en el Pull Request

---

## 🧠 Evaluación

Se evaluará:

* Calidad del código
* Organización
* Uso de Git (commits, ramas, PR)
* Claridad en la explicación
* Que el requerimiento se haya realizado con exito

---

## 💬 Notas

- Si tienes dudas con las instrucciones, puedes mandar mensaje a Stefan.

- Puedes utilizar libremente herramientas de inteligencia artificial como Chatgpt, Gemini, Copilot, etc. Sin embargo
tambien se evaluará la creatividad y la parte humana en tu trabajo.

¡Éxito! 🚀


## 📋 Requerimiento:

Se te proporciona una vista inicial desarrollada con EJS y Tailwind CSS (CDN).

Actualmente:

* La vista funciona correctamente en **escritorio (desktop)**
* Presenta múltiples problemas de diseño en **dispositivos móviles**

---

### 🎯 Objetivo

Tu tarea es **adaptar la vista para que sea completamente responsive**, asegurando una correcta visualización en dispositivos móviles sin afectar el diseño actual en escritorio.

---

### 🧩 Lo que debes hacer

* Corregir el layout para dispositivos móviles 📱
* Aplicar clases responsive de Tailwind.
* Evitar desbordamientos horizontales (scroll lateral)
* Mejorar alineación y distribución de elementos
* Ajustar tamaños de texto, espaciados y proporciones

---

### ⚠️ Restricciones

* ❌ No modificar la estructura HTML (etiquetas)
* ❌ No eliminar secciones existentes
* ❌ No usar CSS externo (solo Tailwind CDN)
* ❌ No romper el diseño en desktop

---

### ✅ Buenas prácticas esperadas

* Uso correcto de breakpoints
* Código limpio y ordenado
* Clases Tailwind bien organizadas
* Responsividad progresiva (mobile-first)

---

### 📦 Entregable

* Subir tu solución a tu fork
* Crear una rama con tu nombre:
  `solucion-tu-nombre`
* Enviar un Pull Request hacia el repositorio original

---

### 💬 En tu Pull Request incluye:

* Breve explicación de los cambios realizados
* Decisiones tomadas (si aplica)
* Capturas de pantalla de tu resultado en movil

---

### ⭐ Extras (opcional)

* Mejoras visuales adicionales sin romper el diseño original
* Mejor experiencia de usuario en mobile
* Ajustes finos de spacing y tipografía

---


# ⚙️ Ejecución del servidor local

Sigue estos pasos para correr el proyecto en tu entorno local:


### 1 Instalar dependencias

```bash
npm install
```

---

### 2 Ejecutar el servidor en modo desarrollo

```bash
npm run prev
```

---

### 3 Abrir en el navegador

```bash
http://localhost:3000
```

---

### 🔄 Modo preview

El proyecto utiliza **nodemon**, por lo que:

* Cada cambio que guardes se reflejará automáticamente
* No es necesario reiniciar el servidor manualmente

---

### 📱 Recomendación

Para probar el responsive:

1. Abre las herramientas de desarrollador (F12)
2. Activa el modo dispositivo 📱
3. Prueba diferentes resoluciones (iPhone, Android, etc.)

---
