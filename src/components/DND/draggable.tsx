import { useDraggable } from "@dnd-kit/core"
import { ReactNode } from "react"

interface DraggableProps {
  id: string
  children: ReactNode
}

export function Draggable({ id, children }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id
  })

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined

  return (
    <div className="bg-zinc-500 p-4 rounded-2xl my-2">
      <h1 ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {children}
      </h1>
    </div>
  );
}
