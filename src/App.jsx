import React, { Suspense, useState, useEffect } from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import NoFoundComponent from "./pages/Error/404";
import GlobalRoutes from "./routers/GlobalRoutes";

import Login from "./pages/Auth/SignIn";

function BasicLayout(props) {
  return (
    <>
      <Outlet />
    </>
  );
}

const App = () => {
  const [accessToken, setAccessToken] = useState("token");

  const navigate = useNavigate();
  useEffect(() => {
    let access_token = "token";
    if (access_token == null || access_token === "") {
      navigate("/login");
    }
  }, []);
  return (
    <Suspense>
      <Routes>
        {accessToken !== null && accessToken !== "" ? (
          <Route path="/" element={<BasicLayout />}>
            {GlobalRoutes.map(
              ({ component: Component, path, exact, childRouters }) => (
                <Route
                  path={`/${path}`}
                  key={path}
                  exact={exact}
                  element={<Component />}
                >
                  {childRouters.map(
                    ({ component: CComponent, cpath, cexact, index }) => (
                      <React.Fragment key={cpath || index}>
                        {index !== undefined && (
                          <Route
                            key={`navigate-${index}`}
                            index
                            element={<Navigate to={cpath} replace />}
                          />
                        )}
                        <Route
                          path={`${cpath}`}
                          key={cpath}
                          exact={cexact}
                          element={<CComponent />}
                        />
                      </React.Fragment>
                    )
                  )}
                </Route>
              )
            )}
            <Route path="*" element={<NoFoundComponent />} />
          </Route>
        ) : (
          <></>
        )}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
};
export default App;
