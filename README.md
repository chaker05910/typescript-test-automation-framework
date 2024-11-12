# UI Playground Automation 

### Automated Testing for the UI Playground using Playwright, TypeScript, and TSLint

## Description

This project is designed for automating tests on the **UI Playground**. It uses **Playwright** for UI interactions, **TypeScript** for strict typing, and **TSLint** for code quality assurance.

## Project Structure

- **`src/`**: The main source code folder.
  - **`pages/`**: Contains Page Objects for different sections of the pages.
  - **`tests/`**: Contains the test files.
  - **`utils/`**: Contains utility classes and functions.
  - **`config/`**: Configuration files.
- **`.env`**: Stores environment variables such as `BASE_URL`.
- **`playwright.config.ts`**: The Playwright configuration file.
- **`tsconfig.json`**: TypeScript configuration.
- **`tslint.json`**: TSLint configuration.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/chaker05910/typescript-test-automation-framework.git
   ```

2. Navigate to the project folder:

   ```bash
   cd typescript-test-automation-framework
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Configuration

### Local Environment Variables

Create a `.env.local` file to store additional local environment variables as needed. For example:

```plaintext
BASE_URL=<URL>
```

### Playwright

The Playwright configuration is in `playwright.config.ts`. Key settings include:

- `testDir`: Directory containing test files (usually `src/tests`).
- `fullyParallel`: Enables parallel test execution.
- `retries`: Number of retries for failed tests (set to 2 retries in CI).
- `launchOptions`: Browser settings, such as starting in maximized mode.

### TypeScript

The TypeScript configuration is defined in `tsconfig.json`. It enables strict typing and proper paths for TypeScript compilation.

### TSLint

The TSLint configuration in `tslint.json` defines rules to maintain high code quality, including sorting properties, disallowing `console.log` calls, and more.

## Commands

- **Run all tests**:

  ```bash
  npx playwright test
  ```

  This command will run all tests in the `src/tests` directory.

- **Run tests in a specific browser** (e.g., Microsoft Edge):

  ```bash
  npx playwright test --project=msedge
  ```

- **Run tests in headed mode**:

  ```bash
  npx playwright test --ui
  ```

- **Run a specific test**:

  ```bash
  npx playwright test src/tests/create-revision-case.spec.ts
  ```

- **Format the code with Prettier**:

  ```bash
  npm run format
  ```

- **Lint the code with TSLint**:

  ```bash
  npm run lint
  ```

- **Auto-fix linting issues**:

  ```bash
  npm run lint-fix
  ```

- **Run tests with an HTML report**:

  ```bash
  npx playwright test --reporter=html
  ```

  After tests complete, an HTML report will be generated for viewing in a browser.

## Test Writing Guidelines

1. **Use the Page Object Model**: Structure page actions through Page Objects to keep tests clean and readable.
2. **Assertions and Waits**: Use `waitForResponse` and other methods to ensure the page and elements are loaded.
3. **Environment Variables**: Use environment variables for flexible configuration.

## Troubleshooting

### TSLint Errors

If TSLint flags code quality issues:

- Run `npm run lint -- --fix` to automatically fix them.
- Adjust rules in `tslint.json` if needed to match your code style.

### Playwright Issues

If tests are unstable:

- Increase timeouts for `waitForResponse` and `waitForSelector`.
- Run tests without parallelism by setting `--workers=1`.

## Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TSLint Documentation](https://palantir.github.io/tslint/)

## Contributing

1. Create a new branch for your feature (`git checkout -b feature/YourFeature`).
2. Commit your changes (`git commit -m 'Add some feature'`).
3. Push the branch (`git push origin feature/YourFeature`).
4. Open a Pull Request.
