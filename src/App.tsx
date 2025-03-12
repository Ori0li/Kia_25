import { Route, Routes } from "react-router";
import Inspection from "./Pages/Inspection";
import Kia from "./Pages/Kia";
import Detail from "./Pages/Detail";

function App() {
  return (
    <Routes>
      {/* 정적 라우팅 */}
      <Route path={"/"} element={<Inspection />} />
      <Route path={"/kia"} element={<Kia />} />
      {/* 동적 라우팅 */}
      <Route path={"/detail/:id"} element={<Detail />} />
    </Routes>
  );
}

export default App;
