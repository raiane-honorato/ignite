import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home/Home";
import { Repo } from "./pages/Repo/Repo";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/repo/:repoName" element={<Repo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
