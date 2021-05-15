import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AdminPage } from "./pages/AdminPage";
import { CatalogPage } from "./pages/CatalogPage";
import { GirlPage } from "./pages/girl-page/GirlPage";
import { LoginPage } from "./pages/LoginPage";
import { TitlePage } from "./pages/title-page/TitlePage";

export const useRoutes = (isAuthenticated: boolean) => {
  return (
    <Switch>
      <Route path="/catalog" exact>
        <CatalogPage />
      </Route>
      <Route path="/main" exact>
        <TitlePage />
      </Route>
      <Route path="/girl/:id">
        <GirlPage />
      </Route>
      <Route path="/login">
        {isAuthenticated ? <AdminPage /> : <LoginPage />}
      </Route>
      <Route path="/admin" exact>
        {isAuthenticated ? <AdminPage /> : <Redirect to="/" />}
      </Route>
      <Redirect to="/main" />
    </Switch>
  );
};
