import { navItems } from "../../utils/constants";



const Sidebar = () => {
  
  
  return (
    <>
      <div className="w-20 max-sm:hidden"></div>
      <aside className="w-60 h-[calc(100vh-56px)] overflow-y-auto fixed top-14 z-20 bg-black">
        <div className="py-3">
          {navItems.map((category,key) => (
            <div key={key} className="border-b border-grey p-4 px-3">
            {category.title && <h2 className="font-semibold mb-2">
              {category.title}</h2>}

          </div>))}
        </div>
      </aside>
      ;
    </>
  );
};

export default Sidebar;
