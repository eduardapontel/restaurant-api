# 🍽️ Restaurant API

A RESTful API for restaurant management, built with **Node.js** and **TypeScript**, using **Express** and **Knex.js** for database interaction. This project allows efficient management of products, tables, table sessions, and orders.

<br>

## 📌 Features

- **Product Management**
  - Create, list, update, and delete menu items.
  - Initial product insertion via seed.

- **Table Management**
  - Create, list, update, and delete restaurant tables.
  - Initial table insertion via seed.

- **Table Sessions**
  - Open and close sessions for customers at tables.
  - Availability control.

- **Orders**
  - Create and list orders linked to tables.
  - Automatic date/time registration.

- **Error Handling**
  - Centralized middleware for custom error messages.
 
<br>

## 📂 Project Structure

- `knexfile.ts` – Knex configuration
- `package.json` – Dependencies and scripts
- `tsconfig.json` – TypeScript configuration
- `requests-insomnia.yaml` – Request collection for API testing
- **`src/`**
  - `server.ts` – Application entry point
  - **`controllers/`** – Route controllers
    - `orders-controller.ts`
    - `products-controller.ts`
    - `tables-controller.ts`
    - `tables-sessions-controller.ts`
  - **`database/`**
    - `knex.ts` – Database connection
    - **`migrations/`** – Table creation scripts
    - **`seeds/`** – Initial data
    - **`types/`** – TypeScript repository types
  - **`middlewares/`**
    - `error-handling.ts` – Error handling middleware
  - **`routes/`** – Route definitions
    - `index.ts`
    - `orders-routes.ts`
    - `products-routes.ts`
    - `tables-routes.ts`
    - `tables-sessions-routes.ts`
  - **`utils/`**
    - `AppError.ts` – Custom error class

<br>

## 🛠️ Technologies Used

- **Node.js**
- **TypeScript**
- **Express**
- **Knex.js**
- **SQLite**
- **Zod** for data validation

<br>

## 🚀 Running Locally

1. **Clone the repository**

    ```bash
    git clone https://github.com/eduardapontel/restaurant-api.git
    cd restaurant-api
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Database setup**

    - Adjust `knexfile.ts` as needed.
    - Run migrations:
    
      ```bash
      npx knex migrate:latest
      ```

    - Run seeds:
    
      ```bash
      npx knex seed:run
      ```

4. **Start the server**

    ```bash
    npm run dev
    ```

5. **Test requests**

    - Import `requests-insomnia.yaml` into Insomnia or similar tools.

<br>

## 📡 API Endpoints

**Base URL:** `http://localhost:3333`

### Products
| Method | Endpoint        | Description                 |
|-------:|-----------------|-----------------------------|
| GET    | `/products`     | List products               |
| POST   | `/products`     | Create product              |
| PUT    | `/products/:id` | Update product by ID        |
| DELETE | `/products/:id` | Delete product by ID        |

### Tables
| Method | Endpoint    | Description            |
|-------:|-------------|------------------------|
| GET    | `/tables`   | List tables            |

> Table creation is handled manually in the database or via the `seeds/tables.ts` file.

### Table Sessions
| Method | Endpoint                   | Description                     |
|-------:|----------------------------|---------------------------------|
| GET    | `/tables-sessions`         | List table sessions             |
| POST   | `/tables-sessions`         | Open/create a table session     |
| PATCH  | `/tables-sessions/:id`     | Update/close a table session    |

### Orders
| Method | Endpoint                                       | Description                                    |
|-------:|------------------------------------------------|------------------------------------------------|
| POST   | `/orders`                                      | Create order                                   |
| GET    | `/orders/table-session/:table_session_id`      | List orders by table session                   |
| GET    | `/orders/table-session/:table_session_id/total`| Display total (sum) for the table session      |


<br>

## 🤝 Contributing 

Feel free to contribute to this project by submitting issues or pull requests. Your feedback and suggestions are always welcome!
