- **Epic 1: API Infrastructure and Shared UI Components**  
  *As a developer, I want to establish a solid foundation for communicating with DummyJSON and reuse common UI elements, so that all features work consistently with minimal duplication.*

  - **Feature 1.1: HTTP Client**  
    - **User Story 1.1.1:** As a developer, I want a universal HTTP client with a base URL for DummyJSON, so that all API calls are centralised and easily configurable.  
    - **User Story 1.1.2:** As a developer, I want the HTTP client to automatically attach the authentication token (if present) to every request, so that I don't have to manually add it each time.  
    - **User Story 1.1.3:** As a developer, I want the HTTP client to support query parameters (for sorting, searching, pagination) so that I can pass complex filters easily.

  - **Feature 1.2: Global Error Handling**  
    - **User Story 1.2.1:** As a user, I want to see a user-friendly notification when an API error occurs (e.g., network failure or server error), so that I understand what went wrong.  
    - **User Story 1.2.2:** As a developer, I want a single interceptor that processes all HTTP errors and transforms them into a standard format, so that error handling is uniform across the app.

  - **Feature 1.3: Reusable UI Components**  
    - **User Story 1.3.1:** As a user, I want to see a loading indicator (progress bar or spinner) whenever data is being fetched, so that I know the app is working.  
    - **User Story 1.3.2:** As a user, I want to receive a toast notification for success (e.g., product added) or error events, so that I get clear feedback on my actions.

---

- **Epic 2: Authentication and Session Management**  
  *As a user, I want to log in securely and have my session remembered according to my preference, so that I can access protected content without re-entering credentials every time.*

  - **Feature 2.1: Login Form**  
    - **User Story 2.1.1:** As a user, I want to enter my username/email and password, with required field validation, so that I cannot submit empty or malformed credentials.  
    - **User Story 2.1.2:** As a user, I want to see clear error messages under the respective fields (or as a notification) when authentication fails, so that I can correct my input.  
    - **User Story 2.1.3:** As a user, I want the "Create" link to be a visual placeholder that does nothing, so that I understand it is not functional yet.

  - **Feature 2.2: Session Persistence**  
    - **User Story 2.2.1:** As a user, I want to check a "Remember me" box to keep my session active even after closing the browser (using localStorage), so that I don't have to log in repeatedly.  
    - **User Story 2.2.2:** As a user, I want the session to expire when I close the browser tab if I do **not** check the box (using sessionStorage), so that my account stays secure on shared devices.

  - **Feature 2.3: Protected Routes and Logout**  
    - **User Story 2.3.1:** As a user, I want to be automatically redirected to the login page if I try to access the product list without being authenticated, so that I know I need to log in first.  
    - **User Story 2.3.2:** As a user, I want a logout option that clears my token and redirects me to the login page, so that I can end my session safely.

---

- **Epic 3: Product Management (Listing, Sorting, Search, Local Addition)**  
  *As a user, I want to view, sort, search, and add products so that I can manage the product catalogue conveniently.*

  - **Feature 3.1: Product Table with Loading**  
    - **User Story 3.1.1:** As a user, I want to see a table of products with columns (Name, Price, Vendor, SKU, Rating, Actions) matching the Figma design, so that I can browse all items.  
    - **User Story 3.1.2:** As a user, I want to see a progress bar while the product list is being loaded, so that I know the data is in transit.  
    - **User Story 3.1.3:** As a user, I want the product list to be automatically fetched from the DummyJSON API on page load, so that I always see up‑to‑date data.

  - **Feature 3.2: Sorting**  
    - **User Story 3.2.1:** As a user, I want to sort the table by price and rating, both ascending and descending, by clicking on column headers, so that I can quickly find the cheapest or highest‑rated products.  
    - **User Story 3.2.2:** As a user, I want the current sorting state (column and direction) to persist across page reloads (e.g., via localStorage), so that I don't lose my preferred view.  
    - **User Story 3.2.3:** As a user, I want to see visual indicators (arrows or highlighting) on the sorted column, so that I know which column is currently sorted and in which order.  
    - **User Story 3.2.4:** As a user, I want the options from the "three‑dots" icon to include "Refresh table" and "Sort ascending/descending", so that I can control the table in one place.

  - **Feature 3.3: Search**  
    - **User Story 3.3.1:** As a user, I want to type a product name in a search field and have the results updated via the DummyJSON search API, so that I can find specific items quickly.  
    - **User Story 3.3.2:** As a user, I want the search to be triggered with a debounce delay (to avoid excessive requests), so that the app remains responsive and does not overload the server.

  - **Feature 3.4: Local Product Addition**  
    - **User Story 3.4.1:** As a user, I want to click an "Add" button that opens a modal/form with fields (Name, Price, Vendor, SKU), so that I can enter details for a new product.  
    - **User Story 3.4.2:** As a user, I want the form to validate required fields and price format, so that I cannot add incomplete or invalid data.  
    - **User Story 3.4.3:** As a user, I want the new product to be added locally to the table (without calling the API), so that I can see it immediately.  
    - **User Story 3.4.4:** As a user, I want a toast notification saying "Product added" after successful local addition, so that I get clear confirmation.

  - **Feature 3.5: UI Enhancements and Visual Feedback**  
    - **User Story 3.5.1:** As a user, I want product ratings below 3.5 to be highlighted in red, so that I can easily spot low‑rated items.  
    - **User Story 3.5.2:** As a user, I want a refresh action (from the "three‑dots" menu) that reloads the current table data, so that I can get the latest information without refreshing the whole page.

