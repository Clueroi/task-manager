import { X, Tag, AlignStartVertical } from "lucide-react";
import { FormEvent } from "react";
import { SpacesProps } from "../index";
import { api } from "../../../lib/axios";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
  setSpaces: React.Dispatch<React.SetStateAction<SpacesProps>>;
}

export function CreateActivityModal({
  closeCreateActivityModal,
  setSpaces,
}: CreateActivityModalProps) {

  async function handleCreateActivity(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const id = Math.random().toString(36).substr(2, 9);
    const title = data.get("title")?.toString();
    const description = data.get("description")?.toString();
    
    if (title && description) {
      
      setSpaces((prev) => ({
        ...prev,
        pendent: [...prev.pendent, { id, title, description }],
      }));
      
    }
    await api.post('/create-task', { title, description })
    closeCreateActivityModal();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg text-amber-600 font-semibold">
              Cadastrar atividade
            </h2>
            <button onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400 cursor-pointer" />
            </button>
          </div>
        </div>

        <form onSubmit={handleCreateActivity} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border  border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-5" />
            <input
              type="text"
              name="title"
              placeholder="Qual a atividade?"
              className="bg-transparent text-zinc-100 text-lg outline-none placeholder-zinc-400 flex-1"
              required
            />
          </div>
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex flex-1 items-center gap-2">
            <AlignStartVertical className="text-zinc-400 size-5" />
            <input
              type="text"
              name="description"
              placeholder="Descreva a atividade"
              className="bg-transparent text-zinc-100 text-lg outline-none placeholder-zinc-400 flex-1 "
              required
            />
          </div>
          <button
            className="cursor-pointer p-2 rounded-xl bg-amber-400"
            type="submit"
          >
            Salvar atividade
          </button>
        </form>
      </div>
    </div>
  )
}