# El Poder del Ahora - Aplicación de Citas Inspiradoras

Esta es una sencilla aplicación web que muestra citas inspiradoras del libro "El Poder del Ahora" de Eckhart Tolle. Cada vez que el usuario lo desea, puede solicitar una nueva cita de una colección de 50 cartas de inspiración.

## Características

- ⚡️ **Vite**: Desarrollo y compilación de producción ultrarrápidos.
- ⚛️ **React 19**: Para construir la interfaz de usuario.
- 📘 **TypeScript**: Tipado estático para un código más robusto.
- 🎨 **Tailwind CSS**: Framework CSS de utilidades para un diseño rápido.
- 🧩 **Shadcn/ui**: Componentes de UI accesibles y personalizables.

## Cómo Empezar

### Prerrequisitos

- Node.js (v18 o superior)
- npm

### Instalación

1.  Clona este repositorio:
    ```bash
    git clone https://github.com/ForeroDaniel/el-poder-del-ahora.git
    ```
2.  Navega al directorio del proyecto:
    ```bash
    cd el-poder-del-ahora
    ```
3.  Instala las dependencias:
    ```bash
    npm install
    ```

### Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Crea una compilación de producción.
- `npm run lint`: Ejecuta el linter para revisar la calidad del código.
- `npm run preview`: Previsualiza la compilación de producción localmente.

## Estructura del Proyecto

```
el-poder-del-ahora/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── dialog.tsx
│   │   ├── Header.tsx
│   │   ├── InfoDialog.tsx
│   │   ├── NewQuoteButton.tsx
│   │   └── QuoteCard.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── styles/
│   │   └── index.css
│   ├── App.tsx
│   ├── main.tsx
│   ├── quotes.json
│   └── vite-env.d.ts
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Licencia

Este proyecto está bajo la Licencia GNU General Public License v3.0.
