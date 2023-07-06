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

1. Decision to use Next.js was taken because it allows us to render most of the components at server side which makes this page SEO friendly.
   Main and Nav were rendered on client side, because of using React hooks.
2. The page is created to show in the search engine results for Limo in NYC, NY. (The link to the website page when somebody searches for limo in NYC, NY)
3. Components, Utils, Styles and API foldes were added for better structure.
4. MongoDB was used to create and GET collections of the data that were used in this app.
5. When you open the page you can see the big Header saying that you will find vehicle in NYC here as well as Shofeurs slogan.
6. Next I decided to put explanation of how easy it is to use Shofeur, so user is more attracted with less steps to do.
7. Bellow the explanation is form to change location and dates.
8. Main part is rendered cards of vehicles that are sorted by categories. The category that is above the rest is the one that user typed in the search.
   9.On the rendered cards users can see basic information about the vehicle(title, rating, how many reviews, price, capacity, and hashtag for the category).
9. If users want to see more from specific category, they can click more results to see the results only in specific category.
10. When you scroll down, you can find the block which propose to find the vehicle for your specific event.
11. Card for fleet owners, with the button to join the Shofeur app.
12. Subscription form.
13. Footer with all the necessary information and navigattion on the app.
14. Styles were designed to look good and fit on the desktop devices as well as mobile devices using Tailwind CSS.
15. Card components were created for each category and each part of the web app.
16. Main component renders Vehicles and Events. Each card component is rendered on the server side, for better search results.
