# 🛍️ E-commerce React - Proyecto Final

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-9.22.0-orange)](https://firebase.google.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.14.2-lightgrey)](https://reactrouter.com/)

Aplicación de e-commerce desarrollada con React como proyecto final del curso de CoderHouse. Incluye catálogo de productos, carrito de compras, checkout y sistema de órdenes.

## 📌 Características Principales

- 🚀 **Catálogo completo** con filtrado por categorías
- 🛒 **Carrito de compras** interactivo con Context API
- 🔥 **Backend en Firebase** (Firestore Database)
- 💳 **Sistema de checkout** con generación de órdenes
- 📱 **Totalmente responsive** para todos los dispositivos
- ✨ **UI moderna** con animaciones y efectos

## 🖥️ Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| React | Framework principal |
| React Router | Navegación entre páginas |
| Firebase | Base de datos y backend |
| React Icons | Iconos de la interfaz |
| SweetAlert2 | Alertas y notificaciones |
| CSS Modules | Estilos componentes |

## 🚀 Cómo Ejecutar el Proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/robertgriman1702/ProyectoFinal-Griman.git

2. Instala las dependencias: npm install

3. Inicia la aplicación: npm run dev

------------------------------------------------------------------------------------

ARQUITECTURA: 

src/
├── assets/            # Imágenes y recursos estáticos
├── components/        # Componentes reutilizables
│   ├── Cart/          # Componentes del carrito
│   ├── Item/          # Componentes de productos
│   └── UI/            # Componentes de interfaz
├── context/           # Contextos globales
├── firebase/          # Configuración de Firebase
├── pages/             # Vistas principales
│   ├── CartPage/      # Página del carrito
│   ├── Checkout/      # Página de checkout
│   └── ProductList/   # Listado de productos
├── services/          # Servicios y APIs
├── styles/            # Estilos globales
├── App.js             # Componente principal
└── index.js           # Punto de entrada

📄 Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
