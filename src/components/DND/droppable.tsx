import { useDroppable } from "@dnd-kit/core"
import { ReactNode } from "react"

interface DroppableProps {
  id: string
  children: ReactNode
}

export function Droppable({ id, children }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({ id })

  return (
    <div
      className="flex flex-col w-full h-full"
      ref={setNodeRef}
      style={{
        background: isOver ? " #00264d" : "transparent",
        borderRadius: "10px",
        padding: "10px",
        flexGrow: 1,
        marginTop: '10px',
        minHeight: '70px',
        width: '100%',
        maxWidth: '300px',
        boxSizing: 'border-box'
      }}
    >
      {children}
    </div>
  );
}
