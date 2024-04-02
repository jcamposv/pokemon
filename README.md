
## Getting Started

To get started with the Pokemon App, follow these steps:

### Setting Up Your Development Environment

First, install the dependencies:

```bash
npm install
```

Then, start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Configuring Environment Variables

Before running the app, you need to set up the required environment variables for connecting to the PostgreSQL database. Create a `.env.local` file in the root of your project and add the following lines:

```env
POSTGRES_URL="your_postgres_connection_string_with_ssl_mode"
POSTGRES_PRISMA_URL="your_postgres_connection_string_for_prisma_with_ssl_mode_and_additional_params"
POSTGRES_URL_NO_SSL="your_postgres_connection_string_without_ssl_mode"
POSTGRES_URL_NON_POOLING="your_postgres_connection_string_with_ssl_mode_non_pooling"
POSTGRES_USER="your_postgres_user"
POSTGRES_HOST="your_postgres_host"
POSTGRES_PASSWORD="your_postgres_password"
POSTGRES_DATABASE="your_postgres_database_name"
```

Replace the placeholder values (`your_postgres_...`) with your actual PostgreSQL database connection details. Here are the descriptions for each variable:

- `POSTGRES_URL`: Connection string for PostgreSQL with SSL mode required.
- `POSTGRES_PRISMA_URL`: Connection string for Prisma client with SSL mode, including additional parameters for pgbouncer and connection timeout.
- `POSTGRES_URL_NO_SSL`: Connection string for PostgreSQL without requiring SSL mode.
- `POSTGRES_URL_NON_POOLING`: Connection string for PostgreSQL with SSL mode, designed for non-pooling scenarios.
- `POSTGRES_USER`: Your PostgreSQL database user.
- `POSTGRES_HOST`: The host address of your PostgreSQL database.
- `POSTGRES_PASSWORD`: Your PostgreSQL user password.
- `POSTGRES_DATABASE`: The name of your PostgreSQL database.

**Important**: Never commit your `.env.local` file to version control. It contains sensitive information that should not be shared publicly.

After setting up your environment variables, you should be able to run the application and connect to your PostgreSQL database successfully.
