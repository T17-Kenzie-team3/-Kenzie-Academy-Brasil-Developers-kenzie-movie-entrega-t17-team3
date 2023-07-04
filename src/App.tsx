import { ToastContainer } from "react-toastify"
import { RoutesMain } from "./routes/RoutesMain"
import { GlobalStyle } from "./styles/globalStyle"

export const App = () => {

  return (
    <div className="App">
      <GlobalStyle />
      <RoutesMain />
      <GlobalStyle />
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

