# Backend Service
This is a backend service for kepegawaian.

## 🏃 Getting Started

**Clone the repository:**

```bash
git clone https://github.com/yudaapratama/backend-test
```

 **Install dependencies:**

```bash
pnpm install # or npm install
```
## ⚒ Setup

Rename file `.env.example` to `.env` and and fill in your DB Configuration
```
APP_NAME=backend
PORT=3000

DB_HOST=
DB_PORT=
DB_NAME=
DB_USER=
DB_PASSWORD=
```

Run migrate and seeder 
```
pnpm dev:migrate
pnpm dev:seed
```

## 🚀 Development Server
Start the development server

```
pnpm dev
```
