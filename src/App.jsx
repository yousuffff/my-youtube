import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import ViewVideoPage from "./components/ViewVideoPage";
import SearchVideoPage from "./components/SearchVideoPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        { path: "", element: <MainContainer /> },
        {
          path: "/watch",
          element: <ViewVideoPage />,
        },
        { path: "/search/:param", element: <SearchVideoPage /> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}>
        <Head />
      </RouterProvider>
    </Provider>
  );
}

export default App;
