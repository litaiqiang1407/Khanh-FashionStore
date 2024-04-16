import { Header } from "../Components";

function UserLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default UserLayout;
