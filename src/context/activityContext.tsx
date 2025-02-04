import { createContext, ReactNode, useState } from "react";

interface ActivityContextType {
  activities: string
  setActivities: React.Dispatch<React.SetStateAction<string>>
}

interface ActivityProviderProps {
  children: ReactNode
}

export const ActivitiesContext = createContext({} as ActivityContextType)


export function ActivityContextProvider({ children }: ActivityProviderProps) {

  const [activities, setActivities] = useState('')


  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        setActivities,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  )
}