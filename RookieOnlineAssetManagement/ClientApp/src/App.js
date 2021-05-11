import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./components/home/Index";

import AssetPage from "./components/assets/Index";
import CreateAssetPage from "./components/assets/CreateAsset";
import EditAssetPage from "./components/assets/EditAsset";

import AssignmentPage from "./components/assignments/Index";
import CreateAssignmentPage from "./components/assignments/CreateAssignment";
import EditAssignmentPage from "./components/assignments/EditAssignment";

import ReportPage from "./components/reports/Index";

import ReturnRequestPage from "./components/return_request/Index";

import ManageUsersPage from "./components/users/Index";
import CreateUserPage from "./components/users/CreateUser";
import EditUserPage from "./components/users/EditUser";

import { useDispatch, useSelector } from "react-redux";
import * as userManage from "./actions/user";
import axios from "axios";
import "./App.css";

axios.interceptors.request.use((config) => {
  return config;
});
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (401 === error.response.status) {
      window.location.href =
        "/Identity/Account/Login?returnUrl=" + window.location.pathname;
    } else {
      return Promise.reject(error);
    }
  }
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userManage.get_user_login());
  }, []);
  const getUserLogin = useSelector((state) => state.user.userLogin);
  let userLogin = getUserLogin;
  return (
    <BrowserRouter>
      {userLogin.type == true ? (
        <Switch>
          <Route exact path="/" component={HomePage}></Route>

          <Route exact path="/asset" component={AssetPage}></Route>
          <Route path="/asset/create" component={CreateAssetPage}></Route>
          <Route path="/asset/edit/:id" component={EditAssetPage}></Route>

          <Route exact path="/assignment" component={AssignmentPage}></Route>
          <Route
            path="/assignment/create"
            component={CreateAssignmentPage}
          ></Route>
          <Route
            path="/assignment/edit/:id"
            component={EditAssignmentPage}
          ></Route>

          <Route exact path="/report" component={ReportPage}></Route>

          <Route exact path="/return" component={ReturnRequestPage}></Route>

          <Route exact path="/user">
            <ManageUsersPage userLogin={userLogin}></ManageUsersPage>
          </Route>
          <Route path="/user/create">
            <CreateUserPage userLogin={userLogin}></CreateUserPage>
          </Route>
          <Route path="/user/edit/:id" component={EditUserPage}></Route>
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
        </Switch>
      )}
    </BrowserRouter>
  );
}
export default App;
