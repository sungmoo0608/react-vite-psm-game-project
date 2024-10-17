import React, { useEffect, useState } from "react";
import boardService from "../../services/BoardService";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const BoardUpdatePage = () => {
  const initBoardState = {
    bname: "",
    btitle: "",
    bcontent: "",
  };

  // path: "/boards/:bid/:name",

  // path: "/boards/:bid",
  // loader: () => "글 업데이트",
  // element: <BoardUpdatePage />,

  const { bid } = useParams();

  const [board, setBoard] = useState(initBoardState);

  //처음 랜더링 하고, 한번만 타라
  useEffect(() => {
    boardService
      .get(bid)
      .then((response) => {
        console.log(response);
        setBoard(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleInputChange = () => {
    const { name, value } = event.target;
    setBoard({ ...board, [name]: value });
  };

  const updateBoard = () => {
    boardService
      .update(board)
      .then((respose) => {
        console.log(respose);
        navigate(`/boards`);
      })
      .catch((error) => {
        console.log(error);
      });

    /* axios 글 저장 */
  };

  const navigate = useNavigate();

  const cancleClick = () => {
    navigate(`/boards`);
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center mt-3">업데이트도 할 수 있어요</h3>
              <div className="card-body">
                <div className="form-group">
                  <label> Type </label>
                  <select placeholder="type" className="form-control">
                    <option value="1">자유게시판</option>
                    {/* <option value="2">질문과 답변</option> */}
                  </select>
                </div>
                <div className="form-group mt-3">
                  <label> Name </label>
                  <input
                    type="text"
                    placeholder="이름을 넣으시오"
                    name="bname"
                    className="form-control"
                    value={board.bname}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <label> Title </label>
                  <input
                    placeholder="제목을 넣으시오."
                    name="btitle"
                    className="form-control"
                    value={board.btitle}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mt-3 mb-3">
                  <label> Content </label>

                  <textarea
                    placeholder="내용을 적으시오"
                    name="bcontent"
                    className="form-control"
                    value={board.bcontent}
                    onChange={handleInputChange}
                    rows="10"
                  />
                </div>
                <button className="btn btn-success" onClick={updateBoard}>
                  업데이트
                </button>
                <button
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                  onClick={cancleClick}
                  // onClick={()=>{navigate(`/boards`);}}
                >
                  취소
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardUpdatePage;
