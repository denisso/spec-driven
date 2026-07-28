## Tech Stack and Architecture

- **Vite + React 18+**
- **TypeScript** (strict typing is mandatory)
- **Zustand**
- **Tailwind CSS**
- Compatibility with the latest version of **Google Chrome**

---

## Design

- Visually match the **Figma layout**.

---

## API

- **Data source**: [DummyJSON Products](https://dummyjson.com/docs/products)
- **Authentication**: [DummyJSON Auth](https://dummyjson.com/docs/auth)

---

## Functional Requirements

### Login Form

- **Field validation** (required fields).
- **Error handling**: Display notifications or error messages below the fields if the API returns an error.
- The "Create" link does not lead anywhere.

#### Login Data Persistence Logic

- If the checkbox is selected: Store the token so the session persists after the browser is closed.
- If not selected: The session should reset when the tab is closed.

---

### Product List Page

#### General Requirements

- Columns must match the **Figma layout**.
- Display a **progress bar** while loading.
- Fetch data from the **API**.

#### Sorting

- Allow sorting by columns (e.g., price, rating).
- Sorting state must persist.

#### Adding a Product

- Clicking the **"Add"** button opens a form with the following fields: **Name, Price, Vendor, SKU** (design is flexible).
- Show a basic **Toast notification** on successful addition.
- No need to implement API saving (local storage is sufficient).

#### UI Logic

- If a product’s rating is **< 3.5**, highlight it in **red**.
- The three-dot icon in a circle is a placeholder for:
    - Refreshing the table;
    - Sorting in ascending/descending order.
- Sorting indicators and design are at your discretion.

#### Product Search

- Implement search via the **API**.