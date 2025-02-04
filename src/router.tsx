import { Route, Routes } from "react-router-dom"
import { Home } from "./page/home"
import { History } from "./page/history"
import { DefaultLayout } from "./layout/defaultLayout/defaultLayout"


export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route path="/history" element={<History />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}