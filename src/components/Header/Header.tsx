import { Scroll, Table } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl text-amber-500">Task Manager, do with Organization</h1>
        <nav className="flex gap-10 text-zinc-100">
          <NavLink className={({ isActive }) =>
            isActive
              ? 'hover:text-amber-400 text-amber-400'
              : 'hover:text-amber-400'
          } to='/'>
          <Table size={30} />
        </NavLink>
        <NavLink className={({ isActive }) =>
            isActive
              ? 'hover:text-amber-400 text-amber-400'
              : 'hover:text-amber-400'
          } to='/history' title="histórico">
          <Scroll size={30} />
        </NavLink>
      </nav>
    </div >
    </>
  )
}