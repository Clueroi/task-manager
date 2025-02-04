import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { Draggable } from "../../components/DND/draggable";
import { Droppable } from "../../components/DND/droppable";
import { CreateActivityModal } from "./modal/create-activity-modal";

export interface ActivityProps {
  id: string;
  title: string;
  description: string;
}

export interface SpacesProps {
  pendent: ActivityProps[];
  doing: ActivityProps[];
  done: ActivityProps[];
}

export function Home() {
  const [spaces, setSpaces] = useState<SpacesProps>({
    pendent: [
      {
        id: "1",
        title: "Concluir o desafio",
        description: "Concluir o desafio de front-end proposto pela Cubos Academy.",
      },
    ],
    doing: [],
    done: [],
  });

  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  function handleDragEnd(e: any) {
    const { active, over } = e;

    if (!over) return;

    const sourceZone = Object.keys(spaces).find((zone) =>
      spaces[zone as keyof SpacesProps].some((item) => item.id === active.id)
    );

    const destinationZone = over.id;

    if (!sourceZone || !destinationZone || sourceZone === destinationZone) return;

    setSpaces((prev) => {
      const draggedItem = prev[sourceZone as keyof SpacesProps].find(
        (item) => item.id === active.id
      );

      if (!draggedItem) return prev;

      return {
        ...prev,
        [sourceZone]: prev[sourceZone as keyof SpacesProps].filter(
          (item) => item.id !== active.id
        ),
        [destinationZone]: [...prev[destinationZone as keyof SpacesProps], draggedItem],
      };
    });
  }

  return (
    <div>
      <button
        onClick={openCreateActivityModal}
        className="p-3 bg-green-400 rounded-2xl cursor-pointer mt-5 text-zinc-900"
        type="submit"
      >
        Adicionar nova atividade
      </button>

      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex items-start justify-between mt-10">
          {Object.keys(spaces).map((zone) => (
            <div
              key={zone}
              className="p-5 max-w-80 w-80 items-center justify-center flex-col transition-all duration-300 bg-amber-300"
            >
              <h1 className="capitalize">{zone}</h1>
              <Droppable id={zone}>
                {spaces[zone as keyof SpacesProps].map((activity) => (
                  <Draggable key={activity.id} id={activity.id}>
                    <div className="p-3 bg-white rounded shadow-md">
                      <h2 className="font-bold">{activity.title}</h2>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                    </div>
                  </Draggable>
                ))}
              </Droppable>
            </div>
          ))}
        </div>
      </DndContext>

      {isCreateActivityModalOpen && (
        <CreateActivityModal closeCreateActivityModal={closeCreateActivityModal} setSpaces={setSpaces} />
      )}
    </div>
  );
}
