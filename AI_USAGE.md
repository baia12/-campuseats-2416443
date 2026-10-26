# AI usage log

## Week 1

- Tool(s):Chatgpt
- What I asked for:
  1. "how to fix JSX expressions must have one parent element."
- What I kept, changed or rejecteedd, and why:
  1. "put Fragment <>...</>"
- One thing the AI got wrong and how I fixed it

## Week 2

- Tool(s):
- What I asked for:
  1. "give list of vendor and dish in vendor.js i upload the file"
- What I kept, changed or rejected, and why:
  1. "I kept the vendor and change dish "
- One thing the AI got wrong and how I fixed it:

## Week 3

- Tool(s): ChatGPT
- What I asked for:
  1. "Explain how `fetch()` and `useEffect()` work in React and how they are used to load vendor data from `/api/vendors.json`."
  2. "Explain how the different components in the cart page work together."
  3. "Help me fix the blank white screen and the error in the browser console."
  4. "Help me fix the CSS because the cart items are not styled correctly."
  5. "Help me implement the favourite items feature by lifting the favourites state to `App.jsx` and adding a 'Favourites only' toggle."
  6. "Explain how to add food pictures to the menu items using image paths in `vendors.json` and display them in `MenuItemCard.jsx`."
  7. "Help me add vendor pictures to `VendorCard.jsx` using the image property from `vendors.json`."

- What I kept, changed or rejected, and why:
  1. "I used the explanations to understand how `fetch()` retrieves vendor data, how `useEffect()` runs the fetching code, and how loading and error states are handled."
  2. "I used the corrected `CartPage.jsx` and `CartItem.jsx` code to make the cart display items, update quantities, remove items, and calculate the total price."
  3. "I changed the CSS class names in `CartItem.jsx` to match my existing stylesheet, such as `.cart-line`, `.cart-name`, `.qty`, and `.line-total`, so the cart items would display with the intended styling."

  4. "I used the image implementation suggestions to display food pictures on menu cards and vendor pictures on vendor cards. I also adjusted the image CSS to improve sizing and presentation."

- One thing the AI got wrong and how I fixed it:
  1. "The AI initially provided cart item code with CSS class names that did not match my existing stylesheet. I fixed this by changing the JSX class names to match the existing CSS selectors."
  2. "When adding vendor pictures, the suggested JSX used `<image>` instead of the correct `<img>` element for displaying a normal image in React. I corrected the element to `<img>` so the browser could display the vendor picture properly."

## Reference

- https://www.w3schools.com/html/html_lists.asp
