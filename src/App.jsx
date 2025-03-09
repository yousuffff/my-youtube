import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import ViewVideoPage from "./components/ViewVideoPage";

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
