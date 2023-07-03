import "@styles/globals.css";

import Nav from "@components/Nav";


export const metadata = {
  title: "Shofeur",
  description: "Chauffeured reservations made simple",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
          <div className="">
            <div className="" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
      </body>
    </html>
  );
};

export default RootLayout;