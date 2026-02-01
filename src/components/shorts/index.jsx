import { SiYoutubeshorts } from "react-icons/si";
import { Link } from "react-router-dom";

const Shorts = ({ data }) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 text-xl font-bold m-2">
        <SiYoutubeshorts className="text-red-500" />
        <h1>Shorts</h1>
      </div>

      <div className="flex gap-4 pb-4 overflow-x-auto">
        {data.map((short, key) => (
          <Link to="/" key={key}>
            <div className="w-48 h-80 relative">
              <img src={short.thumbnail[1].url} className="size-full object-cover" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Shorts;
