- **Epic 1: API Infrastructure and Shared UI Components**  
  *As a developer, I want to have a universal HTTP client for interacting with DummyJSON, centralized error handling, and reusable components (toasts, loading indicators) so that all subsequent features work consistently with minimal code duplication.*  
  This is the foundation without which authentication and product management cannot be conveniently implemented. We recommend starting with this epic.

- **Epic 2: Authentication and Session Management**  
  *As a user, I want to log in with my username and password, with the option to remember me (so that the session persists after closing the browser or resets when the tab is closed). I also want the product page to be protected and redirect unauthenticated users to the login screen.*  
  This epic provides access to the main functionality and depends on Epic 1 (requires the API client to call `/auth/login`).

- **Epic 3: Product Management (Viewing, Sorting, Search, Local Addition)**  
  *As a user, I want to see a product table, sort by price and rating, search by name via the API, and locally add new products (without sending them to the server). Ratings below 3.5 should be highlighted in red.*  
  This epic implements the core business logic and depends on Epics 1 and 2 (requires the API client and an authenticated session to access the data).