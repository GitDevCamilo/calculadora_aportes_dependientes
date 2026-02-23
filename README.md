# Calculadora de Aportes para Dependientes

Aplicación web construida con **React + Vite** para calcular de forma rápida los aportes mensuales de un trabajador **dependiente** en Colombia a:

- **Salud (4%)**F
- **Pensión (16%)**
- **ARL** (según nivel de riesgo)
- **Caja de compensación (4%)**

Incluye validación de **IBC mínimo** (usa el **Salario Mínimo 2026** como base cuando el IBC ingresado es menor).

<img width="1237" height="749" alt="image" src="https://github.com/user-attachments/assets/f1faf9ff-3442-4fff-8575-7bb49f148fd1" />


---

## Funcionalidades

- Ingreso de **Ingreso Base de Cotización (IBC)**.
- Selección de **Nivel de Riesgo ARL** (1 a 5) con su porcentaje correspondiente.
- Cálculo automático de:
  - Salud: `IBC * 0.04`
  - Pensión: `IBC * 0.16`
  - ARL: `IBC * % según riesgo`
  - Caja: `IBC * 0.04`
  - **Total**: suma de todos los aportes
- Formato de moneda **COP (es-CO)**.
- Si el IBC es menor al mínimo, se muestra un aviso y se calcula con el mínimo.

---

## Tecnologías

- **React**
- **Vite**
- **Tailwind CSS**

---

## Requisitos

- **Node.js** 
- **npm** (incluido con Node)

---

## Instalación y ejecución (local)

1. Clona el repositorio:
   ```bash
   git clone https://github.com/GitDevCamilo/calculadora_aportes_dependientes.git
   ```

2. Entra a la carpeta del proyecto:
   ```bash
   cd calculadora_aportes_dependientes
   ```

3. Instala dependencias:
   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre la URL que te muestra la terminal (normalmente):
   - `http://localhost:5173`

---

## Scripts disponibles

- `npm run dev` — entorno de desarrollo
- `npm run build` — build de producción
- `npm run preview` — previsualización local del build
- `npm run lint` — análisis con ESLint

---

## Estructura del proyecto

- `src/main.jsx` — punto de entrada de React
- `src/App.jsx` — interfaz y lógica principal de cálculo
- `src/index.css` — estilos base

---
