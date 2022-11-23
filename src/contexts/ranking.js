import React, { createContext, useState, useEffect } from "react";

const RankingContext = createContext({});

const RankingProvider = ({ children }) => {

  const [ranking, setRanking] = useState([{id: 1, jogador: 'Lucas', pontos: 32}]);

  setInterval(() => {
    console.log(ranking);
  }, 5000);

  return (
    <RankingContext.Provider value={{ ranking, setRanking }}>
      {children}
    </RankingContext.Provider>
  );
};

export { RankingContext, RankingProvider };
