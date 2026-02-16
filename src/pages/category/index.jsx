import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  api  from "../../utils/api";

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
  .get(`/search?query=${category}`)
  .then((res)=> console.log(res.data.data))
  .catch((err)=> console.log(err.message))
  .finally(() => setLoading(false));
}, [category]);

  return (
    <div className="page">
      <h1>{category}</h1>
    </div>
  )
}

export default Category;