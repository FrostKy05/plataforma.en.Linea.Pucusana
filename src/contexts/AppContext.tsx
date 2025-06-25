
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ViewType = 'dashboard' | 'students' | 'teachers' | 'grades' | 'calendar' | 'reports' | 'settings';

interface AppContextType {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  selectedStudent: any;
  setSelectedStudent: (student: any) => void;
  showNewStudentModal: boolean;
  setShowNewStudentModal: (show: boolean) => void;
  showNewTeacherModal: boolean;
  setShowNewTeacherModal: (show: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showNewStudentModal, setShowNewStudentModal] = useState(false);
  const [showNewTeacherModal, setShowNewTeacherModal] = useState(false);

  return (
    <AppContext.Provider value={{
      currentView,
      setCurrentView,
      selectedStudent,
      setSelectedStudent,
      showNewStudentModal,
      setShowNewStudentModal,
      showNewTeacherModal,
      setShowNewTeacherModal,
    }}>
      {children}
    </AppContext.Provider>
  );
};
