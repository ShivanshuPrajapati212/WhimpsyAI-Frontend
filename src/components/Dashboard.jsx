import React, { useEffect, useState } from "react";
import { useTopic } from "../context/topicContext";
import youtube from "../assets/youtube.png";
import browser from "../assets/browser.png";

import { ToastContainer, toast, Bounce } from "react-toastify";

const Dashboard = () => {
  const { topic, loading, timeLeft, markLearnt, getTopic } = useTopic();

  useEffect(()=>{
    getTopic()
  }, [])

  if (loading) {
    return <div className="flex h-screen justify-center items-center"><span className="loading loading-spinner w-11"></span></div>;
  }


  const notify = () =>
    toast("You earned 20XP!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  const getFavicon = (link) => {
    let mainParts = link.split("//");
    let subParts = mainParts[1].split("/");
    return `${mainParts[0]}//${subParts[0]}/favicon.ico`;
  };

  const handleLeant = async (id) => {
    await markLearnt(id);
    notify();
    return;
  };

  return (
    <div className="p-4">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="flex max-md:flex-col max-md:items-start justify-between items-center my-3">
        <h1 className="text-3xl max-md:text-xl">
          Topic:{" "}
          <span className="text-primary font-bold">{topic.topicName}</span>
        </h1>
        <h2 className="text-xl max-md:text-lg">
          New Topic in:{" "}
          <span className="text-primary">
            {" "}
            {timeLeft[0]} Hours, {timeLeft[1]} Minutes
          </span>
        </h2>
      </div>
      {topic.resources.map((e) => (
        <div key={e._id} className="relative space-y-5">
          <div className={`badge badge-soft absolute -top-2 left-2 ${e.type == "video" ? "badge-secondary": "badge-primary"} ${e.isLearnt ? "hidden": ""}`}>{e.type == "video" ? "Video": "Article"}</div>
          <div
            className={`bg-base-200 rounded-md my-2 p-4 flex items-center justify-between max-md:justify-start max-md:items-start max-md:space-y-2 max-md:flex-col ${
              e.isLearnt ? "opacity-40" : ""
            }`}
          >
            
            {e.isLearnt && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-0.5 w-full m-3 rounded-3xl bg-slate-600"></div>
              </div>
            )}
            <div className="flex max-md:flex-col max-md:items-start items-center justify-start">
              <img
                src={e.type == "video" ? youtube : getFavicon(e.link)}
                onError={(e) => {
                  e.target.src = browser;
                }}
                className="h-14 max-md:h-14 mx-3 max-md:mx-0 max-md:bg-base-300 max-md:p-2 max-md:rounded-lg"
              />
              <div>
                <h2 className="text-xl max-md:text-xl text-primary my-2">
                  {e.additionalInfo.title}
                </h2>
                <h2 className="text-md text-primary-content max-md:hidden">{e.additionalInfo.desc}</h2>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <a
                className="btn btn-primary mx-3 max-md:mx-0"
                href={
                  e.type == "video"
                    ? `https://youtube.com/watch?v=${e.link}`
                    : e.link
                }
                target="_blank"
              >
                Learn now &rarr;
              </a>
              {!e.isLearnt ? (
                <div className="tooltip mx-6" data-tip="Mark Learnt">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onClick={() => handleLeant(e._id)}
                  />
                </div>
              ) : (
                <input
                  type="checkbox"
                  className="checkbox mx-6"
                  disabled
                  defaultChecked
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
