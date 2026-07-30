## Task: Create HTTP Client with Authorization Interceptor

**Filename:** `workflow/tasks/01-shared-api-base.task.md`

---

### Overview

#### Solution Summary
Create a base HTTP client using native `fetch`, which will be used throughout the application to communicate with the DummyJSON API. The client must automatically inject the authentication token from storage (`localStorage` / `sessionStorage`) into the `Authorization: Bearer <token>` header for every request, if the token exists. This eliminates manual header management in each API call.

**References to artifacts:**
- Source file: `src/shared/api/base.ts`
- Storage utilities: `src/shared/lib/storage.ts` (created in this task)
- API contract: `workflow/spec/contracts/auth.contract.md` (used only to understand token format)

#### Success Metrics
- `base.ts` exports a function `request` that accepts URL and options and returns `Promise<Response>`.
- When a token exists in storage, all requests include the `Authorization` header.
- When no token exists, the header is not added.
- Code is written in TypeScript with correct typings for arguments and return.
- In browser console, calling `request('/products')` shows the request going out with the correct header (verified via DevTools → Network tab).

#### Component Overview
- `storage.ts` — provides `getToken()` (returns string or `null`) and `setToken(token: string, remember: boolean)` (writes to `localStorage` or `sessionStorage`). These are used to check token before each request.
- `base.ts` — wrapper around `fetch`. Takes `url` and `options`. Adds `Authorization` header via interceptor before sending. Handles base URL prepending (`https://dummyjson.com` if not a full URL).

---

### Requirements

#### R1: Function to retrieve token from storage
**Description:** Create utility `getToken()` that checks both `localStorage` and `sessionStorage` for the key `'auth_token'` and returns the value if found. Priority: check `localStorage` first, then `sessionStorage` (or vice versa – we need a consistent order; we'll check `sessionStorage` first because it's less persistent, but during login we explicitly specify where to save. For simplicity, we check both and return the first found).

**Details:** Storage keys are unified. In this task we do not implement the save logic (that comes later), but the function must be ready for use.

#### R2: Fetch wrapper with automatic token injection
**Description:** Create an exported function `request(url: string, options?: RequestInit): Promise<Response>`. It must:
- Normalize URL: if it starts with `/`, prepend base URL `https://dummyjson.com`.
- Retrieve token via `getToken()`.
- If token exists, add header `Authorization: Bearer ${token}` to `options.headers` (create a new headers object if `headers` not provided).
- Call `fetch` with the constructed parameters and return the result.

**Details:** The function must be type-safe: use TypeScript's `RequestInit`. Return `Promise<Response>`.

#### R3: Network error handling (basic)
**Description:** Provide basic error handling: if `fetch` throws (e.g., network down), re-throw with additional context. For now, just re-throw; higher-level callers will handle errors later.

---

### Acceptance Criteria

- **AC1:** File `src/shared/api/base.ts` exists.
- **AC2:** File `src/shared/lib/storage.ts` exists, exporting `getToken()`.
- **AC3:** Calling `request('/products')` sends a request to `https://dummyjson.com/products` with header `Authorization: Bearer <token>` if a string exists in `localStorage` or `sessionStorage` under key `'auth_token'`.
- **AC4:** Calling `request('/products')` sends request without `Authorization` header if token not found.
- **AC5:** If a full URL is passed (e.g., `request('https://other.com/api')`), base URL is not prepended.
- **AC6:** Typing: `options` parameter matches `RequestInit`; return type is `Promise<Response>`.
- **AC7:** In browser DevTools Network tab, the request shows the correct header.

---

### Implementation Steps

**Step 1: Create storage utility**
- **Files:** `src/shared/lib/storage.ts`
- **Action:** Create
- **Details:**
  - Export `getToken(): string | null`:
    - Check `localStorage.getItem('auth_token')`; if exists, return.
    - Else check `sessionStorage.getItem('auth_token')`; if exists, return.
    - Else return `null`.
  - Export `setToken(token: string, remember: boolean): void`:
    - If `remember === true`, write to `localStorage`; otherwise to `sessionStorage`. (Stub for now, but must exist for future.)
  - Export `clearToken(): void` (remove from both storages).

**Step 2: Create base HTTP client**
- **Files:** `src/shared/api/base.ts`
- **Action:** Create
- **Details:**
  - Import `getToken` from `../lib/storage`.
  - Define constant `BASE_URL = 'https://dummyjson.com'`.
  - Define `request(url: string, options?: RequestInit): Promise<Response>`:
    - Determine full URL: if `url` starts with `http://` or `https://`, use as-is; else concatenate `BASE_URL + url`.
    - Get token: `const token = getToken();`
    - Create headers object: if `options.headers` exists, copy it (via `new Headers(options.headers)`), else create empty `Headers`.
    - If token exists, set `headers.set('Authorization', `Bearer ${token}`)`. Important: if header was already set by user, we override it (decision: auth always from storage).
    - Call `fetch(fullUrl, { ...options, headers })` and return result.

**Step 3: Export from index (optional)**
- **Files:** `src/shared/api/index.ts`
- **Action:** Create (if a single export point is desired)
- **Details:** Export `request` from `base.ts` so imports look like `import { request } from '@/shared/api'`.

---

### Testing Strategy

#### Unit Tests (recommended but not mandatory for first iteration)
- Write tests for `getToken()` with `localStorage` mock (e.g., using `jest-localstorage-mock`).
- Write test for `request()` that verifies header is added when token exists and not added when absent. Mock `fetch` and check passed arguments.

#### Manual Testing (mandatory)
1. Open browser console on the application page (currently empty).
2. In console: `localStorage.setItem('auth_token', 'test-token')`.
3. Execute in console: `import('./src/shared/api/base').then(m => m.request('/products'))`.
4. Open Network tab, find request to `products`, verify `Authorization: Bearer test-token` header exists.
5. Remove token: `localStorage.removeItem('auth_token')`.
6. Repeat request — confirm `Authorization` header is absent.

---

### Notes

#### References
- DummyJSON docs: https://dummyjson.com/docs
- MDN `fetch`: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- MDN `Headers`: https://developer.mozilla.org/en-US/docs/Web/API/Headers

#### Additional Context
- Token will be obtained after login (handled in a later task). For now, we manually set a test token for verification.
- In future, `base.ts` can be extended to handle 401 errors for automatic logout – but out of scope for this task.
- `setToken` and `clearToken` are created for future use; they are not called in this task, only declared.