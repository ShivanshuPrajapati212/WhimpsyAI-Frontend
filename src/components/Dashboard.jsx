import React, { useEffect, useState } from "react";
import { useTopic } from "../context/topicContext";
import youtube from "../assets/youtube.png";
import browser from "../assets/browser.png";
import timeLeftBefore24Hours from "../helpers/timeDifference";

const Dashboard = () => {
  const { topic, getTopic } = useTopic();
  const [loading, setLoading] = useState(topic ? false: true)

  useEffect(() => {
    getTopic();
    console.log(topic);
  }, [loading]);

  if(loading){
    return <div>Loading</div>
  }

  const [timeLeft, setTimeLeft] = useState(timeLeftBefore24Hours(topic.date))
  

  const getFavicon = (link) => {
    let mainParts = link.split("//");
    let subParts = mainParts[1].split("/");
    return `${mainParts[0]}//${subParts[0]}/favicon.ico`;
  };


  return (
    <div className="p-4">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-3xl">
        Topic: <span className="text-primary font-bold">{topic.topicName}</span>
        </h1>
        <h2 className="text-xl">
        New Topic in: <span className="text-secondary"> {timeLeft[0]} Hours, {timeLeft[1]} Minutes</span>
        </h2>
      </div>
      {topic.resources.map((e) => (
        <div key={e._id} className="gap-3">
          {e.type == "video" ? (
            <div className="bg-base-200 rounded-md my-2 p-3 flex items-center justify-between">
              <div className="flex items-center justify-start">
              <img src={youtube} className="h-14 mx-3" />
              <div>
                <h2 className="text-xl text-white my-2">
                  {e.additionalInfo.title}
                </h2>
                <h2 className="text-md">{e.additionalInfo.desc}</h2>
              </div>
              </div>
                <a className="btn btn-secondary mx-3" href={`https://youtube.com/watch?v=${e.link}`} target="_blank">Learn now &rarr;</a>
            </div>
          ) : (
            <div className="bg-base-200 rounded-md my-2 p-3 flex items-center justify-between">
              <div className="flex items-center justify-start">
              <img src={getFavicon(e.link)} onError={(e) => { e.target.src = browser; }} className="h-14 mx-3" />
              <div>
                <h2 className="text-xl text-white my-2">
                  {e.additionalInfo.title}
                </h2>
                <h2 className="text-md">{e.additionalInfo.desc}</h2>
              </div>
              </div>
                <a className="btn btn-secondary mx-3" href={e.link} target="_blank">Learn now &rarr;</a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
