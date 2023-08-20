import React, { useContext } from "react";
import "./shared/styles/fonts.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SCENE_ITEMS, SCENE_ITEMS_PUBLIC } from "./scenes";
import { SceneItem } from "./common/scenes";
import Header from "./kit/components/headers/header";
import Footer from "./kit/components/footer";
import AuthContext from "./context/authContext";

function App() {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(AuthContext);
  console.log(SCENE_ITEMS)
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          {isUserLoggedIn ? SCENE_ITEMS.map((sceneItem: SceneItem) => (
            <Route
              component={sceneItem.sceneComponent}
              path={sceneItem.navigationItem.route}
              exact={sceneItem.navigationItem.exact}
              key={sceneItem.navigationItem.route}
            />
          )):SCENE_ITEMS_PUBLIC.map((sceneItem: SceneItem) => (
            <Route
              component={sceneItem.sceneComponent}
              path={sceneItem.navigationItem.route}
              exact={sceneItem.navigationItem.exact}
              key={sceneItem.navigationItem.route}
            />
          ))}
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
