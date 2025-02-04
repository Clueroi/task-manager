import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";


export function DefaultLayout() {
  return (
    <div className="max-w-6xl h-[calc(100vh-10rem)] my-20 mx-auto p-10 rounded-2xl bg-zinc-800 flex-col">
      <Header />
      <Outlet/>
    </div>
  )
}