import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  api  from "../../utils/api";
import CategoryLoader from "../../components/loader/category-loader";
import Error from "../../components/error";
import Card from "../../components/card";
import Shorts from "../../components/shorts";

const Category = () => {

   const { category }= useParams();
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [data, setData] = useState([]);

// Sayfa yüklenince ve category her değiştiğinde api den kategoriye ait videoları al
useEffect(() => {
  setLoading(true);

  // api den al
  api
  .get(`/search?query=${category}&lang=en&geo=NL`)
  .then((res)=> setData(res.data.data))
  .catch((err)=> setError(err.message))
  .finally(() => setLoading(false));
}, [category]);


// api den gelen datayı filtrele
const shortsListings = data?.filter((item)=> item.type =="shorts_listing");
const videos = data?.filter((item) => item.type === "video" || item.type === "shorts");



if (loading) return <CategoryLoader />;
if (error) return <Error message={error} />;


  return (
    <div className="page">
     <div className="space-y-8">
      {shortsListings?.[0] && <Shorts data={shortsListings[0].data} />}

      <div className="grid gap-4 lg:gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {videos.map((video, key) => (
          <Card key={key} video={video} />
        ))}
      </div>

      {shortsListings?.[1] && <Shorts data={shortsListings[1].data}/>}
     </div>
    </div>
  )
}

export default Category;