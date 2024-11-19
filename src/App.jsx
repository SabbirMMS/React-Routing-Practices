import { RouterProvider } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import router from "./routes/Router"

function App() {
  

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={true}
        pauseOnHover={true}
        theme="colored"
      />
       <RouterProvider router={router} />
    </>
  )
}

export default App
