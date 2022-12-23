import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Text from "./text";
import "./index.css";

let MatchDetailPage = function () {
  const params = useParams();
  const { id } = params;
  let [data, setData] = React.useState();
  let [print, setPrint] = React.useState();
  console.log(data);
  let pageData = function (val) {
    let result = val.find((item) => item.match_id == id);
    debugger;
    return result;
  };

  React.useEffect(() => {
    axios
      .get(
        "https://rest.entitysport.com/v2/matches/?status=2&token=ec471071441bb2ac538a0ff901abd249&per_page=10&&paged=1"
      )
      .then((result) => {
        let newData = pageData(result.data.response.items);
        setData(newData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="detail-page">
      <div className="title">
        <h1>{data ? data.title : "title"}</h1>
      </div>
      <div className="matchDetail">
        <div className="shortNameBox">
          <img src={data ? data.teama.logo_url : "null"} className="teamLogo" />
          <div className="shortName">
            {data ? data.short_title : "short_title"}
          </div>
          <img src={data ? data.teamb.logo_url : "null"} className="teamLogo" />
        </div>
        <div className="competition_title">
          {data ? data.competition.title : "title"}
        </div>
        <div className="venue">
          <h2>Venue</h2>
          <div>
            <div className="stadiumName">
              <Text
                label={"Stadium "}
                value={data ? data.venue.name : "StadiumName"}
              />
            </div>
            <div className="venueBelowSection">
              <Text
                label={"Country "}
                value={data ? data.venue.country : "country"}
              />
              <Text
                label={"Location "}
                value={data ? data.venue.location : "location"}
              />
            </div>
            <div></div>
          </div>
        </div>
        <div className="matchDetailBox">
          <h2>Match Detail</h2>
          <div>
            <div className="matchDetailBoxContent">
              <Text
                label={"Start Date "}
                value={data ? data.date_start : "Soon"}
              />
            </div>
            <div className="matchDetailBoxContent">
              <Text label={"End Date "} value={data ? data.date_end : "Soon"} />
            </div>
            <div className="matchDetailBoxContent">
              <Text
                label={"Subtitle "}
                value={data ? data.subtitle : "Subtitle"}
              />
            </div>
            <div className="matchDetailBoxContent">
              <Text
                label={"Referee "}
                value={data ? data.referee : "referee"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchDetailPage;
