import axios from "axios";
import React, { useEffect, useState } from "react";

const LegoListPage = () => {
  const url = "https://sample.bmaster.kro.kr/contacts?pageno=3&pagesize=10";
  const [boards, setBoards] = useState([]);

  //처음 랜더링 될 때 한번만 실행 시키고 싶다.
  useEffect(() => {
    console.log("use Effective 실행");
    initBoards();
  }, []);

  const initBoards = () => {
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        setBoards(response.data.contacts);
        console.log(response.data.contacts);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteBoard = (e) => {
    const { name, value } = e.target;
    console.log(name + "::" + value);

    boardService
      .remove(value)
      .then((respose) => {
        console.log(respose);
        initBoards();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container mt-3">
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Lego 불러오기</h1>
        <p className="mb-4">LEGO LEGO Let's go Loading..</p>

        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-dark">
              DataTables Example
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>전화번호</th>
                    <th>주소</th>
                    <th>사진</th>
                    <td>삭제</td>
                  </tr>
                </thead>

                <tbody>
                  {boards &&
                    boards.map((board) => (
                      <tr key={board.no}>
                        <td>{board.no}</td>
                        <td>{board.name}</td>
                        <td>{board.tel}</td>
                        <td>{board.address}</td>
                        <td>
                          <img src={board.photo} />
                        </td>
                        <td className="text-center">
                          <button
                            className="btn btn-danger"
                            value={board.no}
                            onClick={deleteBoard}
                          >
                            삭제
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <!-- /.container-fluid -->);
  );
};

export default LegoListPage;
