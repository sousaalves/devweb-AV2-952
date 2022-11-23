import React, { useContext }from "react";
import { Link } from "react-router-dom";
import "./ranking.css";

import { RankingContext } from "../contexts/ranking";


const Ranking = () => {
  const { ranking } = useContext(RankingContext);
  return (
    <>
      <div class="container">
        <h2 className="rankingTitle"> Ranking</h2>
        <div class="wrapper">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Jogador</th>
                <th>Pontos</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((item) => {
                return (
                  <tr>
                    <td className="rank"> {item.id} </td>
                    <td className="team"> {item.jogador} </td>
                    <td className="points"> {item.pontos} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Link to={"../home"} className="link">
            Ir para Home
          </Link>
      </div>
    </>
  );
};

// const ranking = [
//   {
//     id: 1,
//     jogador: "Lucas",
//     pontos: 2048,
//   },
//   {
//     id: 2,
//     jogador: "Pedro",
//     pontos: 1024,
//   },
//   {
//     id: 3,
//     jogador: "Gabriel",
//     pontos: 512,
//   },
//   {
//     id: 4,
//     jogador: "Enzo",
//     pontos: 256,
//   },
//   {
//     id: 5,
//     jogador: "Vitor",
//     pontos: 128,
//   },
// ];

export default Ranking;
