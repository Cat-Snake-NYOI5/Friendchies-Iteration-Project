import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchMatches } from "../features/matchSlice";
import MatchCard2 from "../components/matchCard2.jsx";

const MatchPage = () => {
  // const [matchState, setMatchState] = useState();

  // const match = useSelector((state) => state.match.matches);
  //console.log("match state", match);
  const id = useSelector((state) => state.user.user.id);
  // const index = useSelector((state) => state.match.index);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:3000/api/matches/" + id);
      console.log(result);
      dispatch(fetchMatches(result.data));
    }
    fetchData();
  }, []);
  return (
    <div>
      <h2>List of Matches</h2>
      <MatchCard2 />
    </div>
  );
};

export default MatchPage;
