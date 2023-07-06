I decided to create this app using Next.js

````

## Getting Started

First, install npm packages:

```bash
npm install
# or
yarn install


Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Summary:

1. Decision to use Next.js was taken because it allows us to render most of the components at server side which makes this page SEO friendly.
   Main and Nav were rendered on client side, because of using React hooks.
2. The page is created to show in the search engine results for Limo in NYC, NY. (The link to the website page when somebody searches for limo in NYC, NY)
3. Components, Utils, Styles and API foldes were added for better structure.
4. MongoDB was used to create and GET collections of the data that were used in this app.
5.
6. When you open the page you can see the big Header saying that you will find vehicle in NYC here as well as Shofeurs slogan.
7. Next I decided to put explanation of how easy it is to use Shofeur, so user is more attracted with less steps to do.
8. Bellow the explanation is form to change location and dates.
9. Main part is rendered cards of vehicles that are sorted by categories. The category that is above the rest is the one that user typed in the search.
   .On the rendered cards users can see basic information about the vehicle(title, rating, how many reviews, price, capacity, and hashtag for the category).
10. If users want to see more from specific category, they can click more results to see the results only in specific category.
11. When you scroll down, you can find the block which propose to find the vehicle for your specific event.
12. Card for fleet owners, with the button to join the Shofeur app.
13. Subscription form.
14. Footer with Shofeur logo and all the necessary information and navigattion on the app.
15. Page was designed to look good and fit on the desktop devices as well as mobile devices using Tailwind CSS.
16. NavBar has Shofeurs logo:
    a. Desktop view has "Add Listing" and "Sign In" buttons, as well as "Menu" button with dropdown containig all the necessary information and website navigation.
    b. Mobile view has only Logo and "Menu" dropdown with all links.
