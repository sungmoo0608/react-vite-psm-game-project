import React, { useState } from "react";
import RspCard from "./../rsp/RspCard";

import rock from "../../assets/rsp/rock.jpg";
import paper from "../../assets/rsp/paper.jpg";
import scissor from "../../assets/rsp/scissor.jpg";

const RspPage = () => {
  const [players, setPlayers] = useState([
    {
      id: 1,
      username: "당신",
      arrRsp: ["가위", "바위", "보"],
      img: "https://taegon.kim/wp-content/uploads/2018/05/image-5.png",
    },
    {
      id: 2,
      username: "심판",
      arrRsp: [],
      img: "https://taegon.kim/wp-content/uploads/2018/05/image-5.png",
    },
    {
      id: 3,
      username: "컴퓨터",
      arrRsp: ["랜덤생성"],
      img: "https://taegon.kim/wp-content/uploads/2018/05/image-5.png",
    },
  ]);

  const handleClick = (e) => {
    console.log(e.target.innerText);

    const rspArr = ["가위", "바위", "보"];
    const imgArr = [scissor, rock, paper]; //이미지 처리

    //가위바위보 버튼을 누르면 숫자(0,1,2)로 변환
    let user_rsp = rspArr.indexOf(e.target.innerText);
    //컴퓨터 랜덤 생성(0,1,2)
    let com_rsp = Math.floor(Math.random() * 2);

    //결과
    let result = getResult(e.target.innerText, rspArr[com_rsp]);

    //화면 갱신을 위한 설정
    let copyPlayers = [...players];

    copyPlayers[1].arrRsp = [result];
    copyPlayers[2].arrRsp = [rspArr[com_rsp]];

    //이미지 셋팅
    copyPlayers[0].img = imgArr[user_rsp];
    copyPlayers[2].img = imgArr[com_rsp];

    setPlayers(copyPlayers);
  };

  function getResult(you, computer) {
    let result = "비겼습니다";

    if (you == computer) return "비겼습니다";

    if (you == "가위") {
      if (computer == "바위") result = "당신이 졌습니다";

      if (computer == "보") result = "당신이 이겼습니다";
    }

    if (you == "바위") {
      if (computer == "보") result = "당신이 졌습니다";

      if (computer == "가위") result = "당신이 이겼습니다";
    }

    if (you == "보") {
      if (computer == "가위") result = "당신이 졌습니다";

      if (computer == "바위") result = "당신이 이겼습니다";
    }

    return result;
  }

  return (
    <main>
      <div className="container mt-5">
        <div className="row">
          <RspCard player={players[0]} onClick={handleClick}></RspCard>
          <RspCard player={players[1]} onClick={handleClick}></RspCard>
          <RspCard player={players[2]} onClick={handleClick}></RspCard>
        </div>
      </div>
    </main>
  );
};

export default RspPage;
