import React from "react";

const Header = () => {
  return (
    <div className="text-xl">
      {/* Logo Sol Header  */}
      <div>
        <button>Izgara Icon </button>


      <button>
          <img src="/youtube.png" alt="youtube" width={32} />
          <span>YouTube</span>
      </button>
      </div>

      {/* Orta Header Arama */}

      <div>
        <form>
          <div>
            <input type="text" />
            <button>Ara</button>
          </div>

          <button>Mikrofon</button>
        </form>
      </div>

      {/*Sağ: Icons*/}
      <div>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default Header;
