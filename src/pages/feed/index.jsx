import { useEffect, useState } from "react";
import SkeletonLoader from "../../components/loader/skeleton-loader";
import  api from "../../utils/api.js";
import Error from "../../components/error";
import Shorts from "../../components/shorts";


const Feed = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  // todo: useState >>> true
  const [loading, setLoading] = useState(true);

  // sayfa yüklenince
  useEffect(()=>{
    setLoading(true);

    api
    .get("/home")
    .then((res)=> setData(res.data.data))
    .catch((err) => setError(err.message))
    .finally(()=> setLoading(false));
},[]);
// console.log(data);
// veriyi kategorize et 

const shortLists = data.filter((item) => item.type === "shorts_listing");
const videos = data.filter((item) => item.type === "video");

// console.log(videos);
// console.log(shortsLists);

// console.log(shortLists);
if (loading) return <SkeletonLoader />

if (error) return <Error message={error} />
  
console.log(data);
return (
    <div className="page">
    <div className="space-y-8">
    <Shorts data={shortLists[0].data}/>

      <h2>videos</h2>

    <Shorts data={shortLists[1].data}/>
    </div>
  </div>
  );

};

export default Feed;
