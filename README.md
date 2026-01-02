# 🎨 InmobiliApp Frontend

Modern User Interface built with React for the Real Estate platform.

## ⚡ Technologies

* **Framework:** React 18
* **Build Tool:** Vite (Ultra-fast build)
* **Styling:** CSS Modules + BEM Methodology (Block Element Modifier).
* **Routing:** React Router Dom v6.
* **HTTP Client:** Fetch API (implemented with the Adapter Pattern).

## 📂 Project Structure

* `/components`: Reusable UI components (Cards, Forms, Buttons).
* `/pages`: Main views (Home, Properties, Details).
* `/services`: API communication layer (handles data adaptation).
* `/hooks`: Custom hooks (e.g., `useDocumentTitle`).

## 🚀 Local Development

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run in development mode:**
    ```bash
    npm run dev
    ```
    The app will run at `http://localhost:5173` (Vite default).

## 🐳 Docker (Production)

The project includes an optimized multi-stage `Dockerfile`:
1.  **Build Stage:** Uses Node.js to compile the code.
2.  **Production Stage:** Uses **Nginx** (Alpine) to serve static files efficiently.

## 🔌 Backend Connection

The frontend expects the **API Gateway** to be running at `http://localhost:8080`.
If you change the Gateway port, update the constants in `src/services/*.js`.
