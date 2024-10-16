import React, { useState } from "react";
import boardService from "../../services/BoardService";

const BoardWritePage = () => {
  const initBoardStrate = {
    bname: "홍길동",
    btitle: "안녕하세요",
    bcontent: "안녕하세요",
  };

  const [board, setBoard] = useState(initBoardStrate);

  const saveBoard = () => {
    let data = {
      bname: board.bname,
      btitle: board.btitle,
      bcontent: board.bcontent,
    };

    boardService
      .write(data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    /* axios 글 저장*/
  };

  return <div>게시판 글쓰기</div>;
};

export default BoardWritePage;