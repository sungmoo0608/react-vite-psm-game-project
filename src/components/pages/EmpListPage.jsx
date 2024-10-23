import React, { useEffect, useState } from "react";
import empService from "../../services/EmpService";
import EmpPagingnation from "../board/EmpPagingnation";

const EmpListPage = () => {
  const [emps, setEmps] = useState([]);
  //http://192.168.0.10:8282/emps/list
  const [paging, setPaging] = useState(null);

  useEffect(() => {
    console.log("use Effective 실행");
    initEmps();
  }, []);

  const initEmps = () => {
    empService
      .getPagingList()
      .then((response) => {
        console.log(response);
        setEmps(response.data.emp);
        setPaging(response.data.page);

        console.log(response.data.page);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteEmps = (e) => {
    const { name, value } = e.target;
    console.log(name + "::" + value);

    empService
      .remove(value)
      .then((respose) => {
        console.log(respose);
        initEmps();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onClickPaging = (e) => {
    e.preventDefault(); //기존에 링크 동작을 하지 말아라

    console.log(e.target.pathname);
    console.log(e.target.search);

    empService
      .getPagingList(e.target.pathname, e.target.search)
      .then((response) => {
        setEmps(response.data.emp);
        setPaging(response.data.page);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-3">
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Emp 게시판</h1>
        <p className="mb-4">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the{" "}
          <a target="_blank" href="https://datatables.net">
            official DataTables documentation
          </a>
          .
        </p>

        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
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
                    <th>사원 번호</th>
                    <th>사원 이름</th>
                    <th>직급</th>
                    <th>매니저</th>
                    <th>입사일자</th>
                    <th>연봉</th>
                    <th>보너스</th>
                    <th>부서 번호</th>
                    <th className="text-center">삭제</th>
                  </tr>
                </thead>

                <tbody>
                  {emps &&
                    emps.map((emps) => (
                      <tr key={emps.empno}>
                        <td>{emps.empno}</td>
                        <td>{emps.ename}</td>
                        <td>{emps.job}</td>

                        <td>{emps.mgr}</td>
                        <td>{emps.hiredate}</td>
                        <td>{emps.sal}</td>
                        <td>{emps.comm}</td>
                        <td>{emps.deptno}</td>
                        <td className="text-center">
                          <button
                            className="btn btn-danger"
                            value={emps.empno}
                            onClick={deleteEmps}
                          >
                            삭제
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            {/* 페이징           */}
            {paging != null ? (
              <EmpPagingnation
                paging={paging}
                onClickPaging={onClickPaging}
              ></EmpPagingnation>
            ) : null}
            <hr />
          </div>
        </div>
      </div>
    </div>
    // <!-- /.container-fluid -->);
  );
};

export default EmpListPage;
