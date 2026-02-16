import { createContext, useState, useContext} from "react";

// context yapısının kurulumu
export const SidebarContext = createContext();

// sağlayıcı component i tanımlama (hoc)
export const SidebarProvider = ({ children }) => {
 // navbar kapalı mı state i
 const [isCollapsed, setIsCollapsed] = useState(true);

 // navbar aç/kapa yapan fonksiyon
 const toggleSidebar = () => {
  setIsCollapsed(!isCollapsed);
 };
// component lara sağlanacak verileri tanımla
 return (<SidebarContext.Provider
  value={{ isCollapsed, toggleSidebar }}
  >
   {children}
   </SidebarContext.Provider>
 );
};

// custom hook: kendi hook umuzu yazma

export const useSidebar = () => {
// context yapısına abone ol
const context = useContext(SidebarContext);

// veriler gelmediyse hata fırlat
if (!context) {
 throw new Error("App should be covered by Provider");
}

// verileri return et
return context;
};

