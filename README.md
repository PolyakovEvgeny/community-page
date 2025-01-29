# Community Page (Frontend Only)

This application is a frontend community page where users can create posts, comment on them, and add nested comments. All the data is generated from mock data, and the project doesn't require a backend connection.

## Project Structure

- **React with TypeScript** — used for creating components and typing data.
- **SCSS** — for styling and ensuring modularity.
- **Vite** — used as the build tool for fast development.

## Installation

1. Clone the repository:
   ```bash
   git clone https://gitlab.com/Evgeny_ts/community-page.git
2. Navigate to the project directory:

    ```bash
    cd community-page
3. Install dependencies:

    ```bash
    npm install

## Running the Project
1. To run the project in development mode, use the following command:

    ```bash
    npm run dev
   
The project will be available at http://localhost:5173.

## Project File Structure
`src/components` — React components (e.g., `Post`, `Comment`, and others).

`src/hooks` — Custom hooks for managing state.

`src/styles` — SCSS styles for modularity.

`src/data` — Mock data for posts and comments.

`src/utils` — Utility functions and helpers.

`src/app/App.tsx` — The main application component.


## Libraries Used
**React** — a library for building user interfaces.

**TypeScript** — for strict typing.

**SCSS** — for styling.

**bootstrap-icons** - for icons

**moment** - for date format


## Linting and Code Style
ESLint is used to enforce code style with rules for React and TypeScript.

1. To run the linter:

   ```bash
   npm run lint

## Build
1. To build the project for production use:

   ```bash
   npm run build
   
## Deployment
1. To preview the production build, use the following command:

   ```bash
   npm run preview
   
## Important Notes
- All data is generated from mock data.
- The project does not use a backend.
- The code is written following best practices in React, TypeScript, and SCSS.

## License
This project is licensed under the MIT License.
