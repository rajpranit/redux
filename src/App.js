import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import Auth from "./components/Auth";
import Header from "./components/Header";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!isAuthenticated ? <Auth /> : <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
