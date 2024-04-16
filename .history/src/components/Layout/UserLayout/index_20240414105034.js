import { Footer, Header } from "../Components";

function UserLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default UserLayout;
