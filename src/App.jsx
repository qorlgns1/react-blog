import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";
import Banner from "./components/layouts/banner/Banner";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [loadData, setLoadData] = useState({});
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    async function loadData() {
      const res = await fetch("/data.json");
      const result = await res.json();
      return result;
    }

    loadData().then((data) => {
      setLoadData(data);
      setIsLoding(true);
    });
  }, []);

  const handleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <BrowserRouter>
      {isLoding && (
        <>
          <Header isLogin={isLogin} handleLogin={handleLogin} />
          <Banner bannerInfo={loadData.blog} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login">
              <div>Login Page</div>
            </Route>
            <Route path="/register">
              <div>Register Page</div>
            </Route>
            <Route>
              <div>페이지를 찾을 수 없습니다.</div>
            </Route>
          </Switch>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
