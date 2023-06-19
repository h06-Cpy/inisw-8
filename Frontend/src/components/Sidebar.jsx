import { Link } from "react-scroll";

const Sidebar = ({ props }) => {
  //서버에서 가져온 토픽 만큼 탭이 추가되야 함

  return (
    <aside className="w-1/5 px-1 rounded-xl bg-white mx-auto">
      <div className="sticky top-0 p-4 w-full">
        <Link to="introduction" smooth={true} duration={500}>
          <p className="hover:bg-almostgreen font-bold mx-auto py-1 rounded-2xl text-2xl text-center text-gray hover:text-lightgreen_hover space-x-4 h-10 my-2">
            서론
          </p>
        </Link>

        <Link to="total_topic_analysis" smooth={true} duration={500}>
          <p className="hover:bg-almostgreen font-bold mx-auto py-1 rounded-2xl text-2xl text-center text-gray hover:text-lightgreen_hover space-x-4 h-10 my-2">
            전체 토픽 분석
          </p>
        </Link>

        <Link to="analysisPerTopic" smooth={true} duration={500}>
          <p className="hover:bg-almostgreen font-bold mx-auto py-1 rounded-2xl text-2xl text-center text-gray hover:text-lightgreen_hover space-x-4 h-10, my-2">
            토픽별 감성 분석
          </p>
        </Link>

        <ul className="flex flex-col overflow-hidden">
          {props.datas.map((topicData, index) => {
            return (
              <Link
                to={topicData.topic_name}
                smooth={true}
                duration={500}
                key={index}
              >
                <li className="hover:bg-almostgreen w-2/3 flex justify-center mx-auto py-2 rounded-2xl text-gray font-bold hover:text-lightgreen_hover text-xl text-center items-center space-x-4 h-8 my-1">
                  {topicData.topic_name}
                </li>
              </Link>
            );
          })}
        </ul>
        <Link to="conclusion" smooth={true} duration={500}>
          <p className="hover:bg-almostgreen font-bold mx-auto py-1 rounded-2xl text-2xl text-center text-gray hover:text-lightgreen_hover space-x-4 h-10 my-2">
            결론
          </p>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
