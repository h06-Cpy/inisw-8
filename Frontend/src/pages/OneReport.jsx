import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import MainContent from "../components/MainContent";

const OneReport = () => {
  const [total_topic, set_total_topic] = useState(null);
  const [topics, setTopics] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        set_total_topic(data.total_topic);
        setTopics(data.topics.slice(1));
      });
  }, []);

  if (total_topic === null || topics === null) {
    return <p className="font-bold text-4xl">loading...</p>;
  }

  return (
    <>
      <nav className="flex items-center h-12 bg-lightlightgreen top-0">
        <h1 className="mx-5 text-center text-2xl text-white font-bold">
          Senty
        </h1>
      </nav>
      <div className="flex flex-row flex-wrap justify-between">
        <Sidebar props={{ datas: topics }} />

        <MainContent props={{ total_topic: total_topic, topics: topics }} />
      </div>
    </>
  );
};

export default OneReport;
