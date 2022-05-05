import "./index.css";
import "./animations.css";
import Header from "./components/Header";
import Category from "./components/Category";
import SubHeader from "./components/SubHeader";
import HomePage from "./containers/HomePage";
import ViewDetailPage from "./containers/ViewDetailPage";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Header />
      <div className="pt-[64px] flex">
        {/* munu left */}
        <Category />
        <SubHeader />
        <HomePage />
        <Cart />
      </div>
    </>
  );
}

export default App;
