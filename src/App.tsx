import { BrowserRouter } from "react-router-dom"
import { Router } from "./router"
import { ActivityContextProvider } from "./context/activityContext"

function App() {

  return (
    <>
      <BrowserRouter>
        <ActivityContextProvider>
          <Router />
        </ActivityContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
