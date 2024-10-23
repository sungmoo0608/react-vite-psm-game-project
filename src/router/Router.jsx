import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import LottoPage from "../components/pages/LottoPage";
import RspPage from "../components/pages/RspPage";
import BoardListPage from "../components/pages/BoardListPage";
import BoardWritePage from "../components/pages/BoardWritePage";
import BoardUpdatePage from "../components/pages/BoardUpdatePage";
import LegoListPage from "../components/pages/LegoListPage";
import LegoList2Page from "../components/pages/LegoList2Page";
import EmpListPage from "../components/pages/EmpListPage";

const routes = [
  {
    path: "/",
    element: <App />,
    loader: () => "가위바위보",
    children: [
      {
        path: "/",
        loader: () => "가위바위보",
        element: <RspPage />,
      },
    ],
  },
  {
    path: "/lotto",
    element: <App />,
    loader: () => "로또",
    children: [
      {
        path: "/lotto",
        loader: () => "로또",
        element: <LottoPage />,
      },
    ],
  },
  {
    path: "/boards",
    element: <App />,
    loader: () => "게시판",
    children: [
      {
        path: "/boards",
        loader: () => "게시판",
        element: <BoardListPage />,
      },
      {
        path: "/boards/write",
        loader: () => "글쓰기",
        element: <BoardWritePage />,
      },
      {
        path: "/boards/:bid",
        loader: () => "글 업데이트",
        element: <BoardUpdatePage />,
      },
    ],
  },
  {
    path: "/lego",
    element: <App />,
    loader: () => "Lego연습",
    children: [
      {
        path: "/lego",
        loader: () => "Lego연습",
        element: <LegoListPage />,
      },
    ],
  },
  {
    path: "/lego2",
    element: <App />,
    loader: () => "LegoPage연습",
    children: [
      {
        path: "/lego2",
        loader: () => "LegoPage연습",
        element: <LegoList2Page />,
      },
    ],
  },
  {
    path: "/empList",
    element: <App />,
    loader: () => "emp리스트연습",
    children: [
      {
        path: "/empList",
        loader: () => "emp리스트연습",
        element: <EmpListPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router, routes };
