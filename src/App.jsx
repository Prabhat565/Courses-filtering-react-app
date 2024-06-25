import { useEffect, useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import Spinner from "./components/Spinner";

function App() {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiUrl);
        const output = await response.json();
        console.log(output.data);
        setCourse(output.data);
      } catch (error) {
        toast.error("Failed to fetch data");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#22223b]">
      <div>
        <Navbar />
      </div>
      <div className="bg-[#22223b] h-full">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-9/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center  min-h-[50vh]">
          {loading ? (
            <Spinner />
          ) : (
            <Cards course={course} category={category} />
          )}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
