import React from "react";
import MatchCard from "../../shared/matchCard/index";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";
let Home = function (props) {
  let [data, setData] = React.useState([]);
  const navigate = useNavigate();
  let getId = function (id) {
    navigate(`/match-detail-Page/${id}`);
  };

  React.useEffect(() => {
    axios
      .get(
        "https://rest.entitysport.com/v2/matches/?status=2&token=ec471071441bb2ac538a0ff901abd249&per_page=10&&paged=1"
      )
      .then((result) => {
        console.log(result.data.response.items);

        setData(result.data.response.items);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="matchItems">
      {data.map((val, index) => {
        return (
          <MatchCard
            onClick={() => getId(val.match_id)}
            key={index}
            title={val.competition.title}
            teamAlogo={val.teama.logo_url}
            short_title={val.short_title}
            teamBlogo={val.teamb.logo_url}
          />
        );
      })}
    </div>
  );
};

export default Home;
