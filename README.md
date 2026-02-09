# QA Automation – Ahorro Digital

## 1. Descripción del Proyecto
Este repositorio contiene la solución a la prueba técnica de **QA Automation** para la aplicación ficticia **Ahorro Digital**. El objetivo principal es demostrar la capacidad de diseñar, ejecutar y documentar pruebas automatizadas de calidad utilizando buenas prácticas profesionales de aseguramiento de la calidad.

La solución incluye:
- Plan de pruebas completo
- Casos de prueba automatizados
- Backend simulado para ejecución local
- Evidencia automática (reportes, videos y screenshots)
- Reporte de defectos
---

## 2. Tecnologías Utilizadas
- **Node.js** (entorno de ejecución)
- **Express** (servidor backend mock)
- **Playwright** (automatización de pruebas UI)
- **TypeScript** (tests)
---

## 3. Alcance de las Pruebas
Las pruebas cubren los siguientes módulos:

### P0 – Onboarding (Crítico)
- Registro de usuario
- Validación de campos obligatorios
- Manejo de recaptcha válido / inválido
- Login con credenciales incompletas

### P1 – Simulador
- Simulación exitosa con monto válido
- Validación de monto cero
- Validación de monto vacío

### P2 – Productos
- Visualización correcta de productos
- Validación de UI no vacía
- Manejo de errores HTTP (401 / 404)

---

## 4. Estructura del Proyecto
. ├── tests/ │ ├── onboarding.spec.ts │ ├── simulador.spec.ts │ └── productos.spec.ts ├── server.js ├── playwright.config.ts ├── reports/ └── README.md

---
## 5. Instalación y Ejecución


### 5.1 Requisitos Previos
- Node.js v18 o superior
- npm


### 5.2 Instalación
npm install

### 5.3 Ejecución del Servidor
node server.js

### 5.4 Ejecución de Pruebas
npx playwright test

---

## 6 Reporte de Bugs Detallado

### BUG-001 – Mensaje de error no visible al seleccionar recaptcha inválido
**ID:** BUG-001
**Módulo:** Onboarding – Registro
**Prioridad:** Alta
**Severidad:** Crítica

**Descripción:**
Al seleccionar la opción de recaptcha inválido, el sistema no mostraba inmediatamente el mensaje de error correspondiente, lo que podía generar confusión en el usuario.

**Pasos para Reproducir:**
1. Acceder a /registro
2. Completar los campos Nombre, Email y Password
3. Seleccionar “Recaptcha inválido”

**Resultado Esperado:**
- Botón “Registrarse” deshabilitado
- Mensaje “Recaptcha inválido” visible

**Resultado Obtenido:**
- Botón deshabilitado
- Mensaje de error oculto

**Impacto:**
El usuario no recibe retroalimentación inmediata sobre el motivo del bloqueo.

**Solución Aplicada:**
Se ajustó la lógica JavaScript para mostrar el mensaje de error inmediatamente al seleccionar recaptcha inválido.

---

### BUG-002 – Simulador permite ejecución sin monto
**ID:** BUG-002
**Módulo:** Simulador
**Prioridad:** Media
**Severidad:** Alta

**Descripción:**
El simulador permitía ejecutar la acción de cálculo sin ingresar un monto.

**Resultado Esperado:**
Mostrar mensaje de error indicando monto inválido.

**Resultado Obtenido:**
Resultado inconsistente sin validación clara.

**Solución Aplicada:**
Se implementó validación explícita para monto vacío o cero.

---

### BUG-003 – Falta de control de acceso en rutas protegidas
**ID:** BUG-003
**Módulo:** Seguridad / Navegación
**Prioridad:** Baja
**Severidad:** Media

**Descripción:**
No existía validación explícita de acceso no autorizado.

**Solución Aplicada:**
Se añadió endpoint /perfil con respuesta HTTP 401 y prueba automatizada.
