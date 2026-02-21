# AGENTS.md

## Overview
This document provides instructions for agentic coding assistants (like Claude, GitHub Copilot, Cursor, etc.) working in this repository. Adhere to these constraints and conventions carefully to maintain the integrity of this Expo React Native project.

## 1. Build, Lint, and Test Commands

### Running the App
- `npm start` - Starts the Expo development server (interactive).
- `npm run ios` - Starts the app in the iOS simulator.
- `npm run android` - Starts the app in the Android emulator.
- `npm run web` - Starts the web version of the app.
- `npm run reset-project` - Moves the starter code to `app-example/` and creates a blank `app/` directory.

### Linting & Formatting
- `npm run lint` - Runs ESLint across the codebase. Always run this after making changes to verify you haven't introduced syntax errors or linting violations.
- Always fix linting errors before proposing a solution to the user.

### Testing
**Important:** By default, there is **NO test runner configured** in this starter project.
- **Manual Verification:** Use `console.log()` or UI validation via the Expo Go / Simulator where possible.
- **Adding Tests:** If the user explicitly asks you to write and run tests, you MUST first install and configure the necessary dependencies:
  ```bash
  npm install --save-dev jest jest-expo @testing-library/react-native @types/jest
  ```
- **Running a Single Test:** Once the test runner is configured, you can run a specific test file using:
  ```bash
  npx jest path/to/your/file.test.tsx
  ```

## 2. Code Style Guidelines

### 2.1 File & Directory Naming
- **Files:** Use `kebab-case` for all files, including components and hooks (e.g., `hello-wave.tsx`, `use-color-scheme.ts`, `parallax-scroll-view.tsx`).
- **Platform-Specific Files:** Use Expo's platform extensions when logic diverges. Provide a fallback:
  - `foo.ios.ts` (Used only on iOS)
  - `foo.web.ts` (Used only on Web)
  - `foo.ts` (Fallback for Android and unmatched platforms)

### 2.2 Component & Function Naming
- **Components:** Export components as `PascalCase` functions. E.g., `export function HelloWave() { ... }` or `export default function HomeScreen() { ... }`.
- **Hooks & Utilities:** Use `camelCase` for hooks and utility functions (e.g., `useThemeColor`).

### 2.3 Imports & Path Aliases
- **Path Aliases:** ALWAYS use the `@/` prefix to refer to the project root instead of messy relative paths (e.g., `import { HelloWave } from '@/components/hello-wave';`).
- **Import Ordering:** Group imports in the following order, separated by a blank line:
  1. React/React Native built-in imports (e.g., `react`, `react-native`).
  2. Third-party library imports (e.g., `expo-router`, `expo-image`).
  3. Absolute project imports (`@/components/...`, `@/hooks/...`).
  4. Relative imports (if absolutely necessary, though `@/` is strictly preferred).

### 2.4 Formatting and Syntax
- **React Compiler:** The React Compiler is enabled (`reactCompiler: true`). Do NOT proactively use `useMemo` or `useCallback` unless specifically required for a complex edgecase or third-party requirement. The compiler handles optimization.
- **Functional Components:** Prefer standard `export function Component()` over arrow functions `export const Component = () => {}` for top-level component definitions.
- **Styling:** Use `StyleSheet.create({...})` from `react-native`. Keep styles at the bottom of the file.

### 2.5 Types and Routing
- **TypeScript:** Use strict TypeScript. Avoid `any`. Define proper interfaces for component props.
- **Typed Routes:** Expo Router typed routes are enabled (`typedRoutes: true`). Route strings (`href="/modal"`) are type-checked. Ensure paths strictly match the file structure in the `app/` directory.
- **File-based Routing:** Routes live in `app/` and map directly to URL paths. `_layout.tsx` files set up navigation stacks.

### 2.6 Theming and Colors
- **Never Hardcode Colors:** Use the provided theming system.
- Import `useThemeColor` from `@/hooks/use-theme-color` to resolve colors based on the current mode (light/dark).
- Define new colors in `@/constants/theme.ts` rather than inline in components.
- Use drop-in replacements `<ThemedText>` and `<ThemedView>` instead of standard `<Text>` and `<View>` to automatically apply theme colors.

### 2.7 Error Handling
- Wrap asynchronous operations or native module calls in `try/catch` blocks.
- Use standard React error boundaries if catching errors at the UI level.
- Log errors clearly with `console.error` and provide fallback UI states.

## 3. Architecture & Native Code
- **Native Directories:** The `/ios/` and `/android/` directories are intentionally ignored by git and generated on demand. **Do NOT commit them or manually edit them.** Any native configuration should be done via `app.json` or Expo config plugins.
- **New Architecture:** This project runs with `newArchEnabled: true`. Ensure any added third-party libraries are compatible with the React Native New Architecture (Fabric/TurboModules).

