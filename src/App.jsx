import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/Search"
import PlayingVideo from "./components/PlayingVideo"
import { useAuth } from "./context/AuthProvider";
import { Routes,Route } from "react-router-dom";
import Loading from "./loader/Loader";

function App() {
  const { loading, data } = useAuth();

  console.log(loading);
  console.log(data);

  return (
    <>
    {loading && <Loading/>}
      <Navbar />
      {/* <Sidebar/> */}

      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/search/:searchQuery" element={<Search/>}/>
        <Route path="/video/:id" element={<PlayingVideo/>}/>
      </Routes>
    </>
  );
}

export default App;
