import { Route, Routes } from "react-router";
import Layout from "@/components/layout";
import HomeScreen from "@/pages/HomeScreen";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomeScreen />} />
      </Route>
    </Routes>
  );
}

export default App;