import BigCharacter from "./BigCharacter";
import CorrLine from "./CorrLine";
import SentimentDist from "./SentimentDist";
import SidebarElement from "./SideBarElement";
import TopicProportion from "./TopicProportion";
import TopicValueTable from "./TopicValueTable";
import WordCloud from "./WordCloud";

const MainContent = ({ props }) => {
  const { total_topic, topics } = props;

  return (
    <main
      role="main"
      className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2 mx-auto bg-bgcolor"
    >
      <SidebarElement props={{ section_name: "introduction" }} />
      <p className="mx-3 my-3 py-2 flex items-center font-bold text-4xl border-b-2">
        1. 서론
      </p>
      <div className="w-full col-span-4 mx-auto bg-white rounded-md shadow-md flex justify-center flex-col">
        <p className="text-justify break-all px-10 py-8 text-lg tracking-wide">
          본 보고서는 실시간 데이터와 비재무, 비계량 분석을 결합한 새로운 접근
          방식을 도입하여 기존 기업 평가의 한계를 해결하고자 한다. 전통적인 기업
          평가 방법은 재무 지표와 과거 데이터에 의존하는 경우가 많아 기업 성과의
          실시간 추세와 비재무적 측면을 파악하는 능력이 부족합니다. 이 단점을
          극복하기 위해 본 보고서는 실시간 및 비재무, 비계량 영역의 통찰력을
          제공하는 수단으로 트윗을 이용하여 토픽 모델링 및 감성 분석을
          수행하였다. <br />
          <br />
          데이터 수집 기간은 2023년 5월 23일부터 6월 15일까지이며, 선정된 IT
          기업(Google, Apple, Amazon, Microsoft 및 NVIDIA)과 관련된 트윗을
          수집하였다. 그런 다음 비재무 영역과 관련된 주제를 추출하기 위해 토픽
          모델링을 적용하여 9개의 토픽을 찾았다. 이후 RoBERTa 기반의 딥러닝
          모델을 이용하여 각 토픽에 대한 감성 분석을 진행하여 감성을
          수치화하였고 주가지수와의 상관관계를 측정하였다. <br />
          <br />본 보고서의 본문에는 9개 토픽을 모두 분석한 결과와 구체적인
          토픽별 분석 결과를 제시하였다. 전체 토픽 분석은 트윗의 감성 분포, 감성
          분포 순위, 상관관계 순위, 토픽의 시간적 분포를 포괄한다. 토픽별 감성
          분석에는 감정 분포 제시와 관련 단어를 보여주는 wordcloud가 포함된다.
          또한 감성점수와 주가지수의 상관관계를 도식화하여 대중의 감성과
          기업가치의 관계를 정량화하였습니다. 특정 토픽의 언급량이 현저히 높거나
          낮은 특정 날짜를 선택하고 감정 점수가 가장 높은 날짜와 가장 낮은
          날짜에 대한 정보도 포함하였다. 이러한 세부 정보는 회사의 가치를
          평가하는 데 도움이 되는 것을 목표로 한다.
        </p>
      </div>
      <SidebarElement props={{ section_name: "total_topic_analysis" }} />
      <p className="mx-3 my-3 py-2 flex items-center font-bold text-4xl border-b-2">
        2. 전체 토픽 분석
      </p>

      <div className="grid grid-cols-4 grid-rows-[1fr-1fr] gap-4">
        <BigCharacter
          props={{ title: "총 트윗 수", content: total_topic.tweet_number }}
        />
        <SentimentDist props={{ sentiment_dist: total_topic.sentiment_dist }} />
        <TopicValueTable
          props={{
            title: "감성 분포 순위",
            description: "긍정-부정 기준",
            headers: ["토픽", "감성 분포"],
            datas: total_topic.sentiment_dist_rank,
          }}
        />
        <TopicValueTable
          props={{
            title: "상관관계 순위",
            description: "snp500, nasdaq100과 상관관계",
            headers: ["토픽", "상관관계"],
            datas: total_topic.corr_rank_list,
          }}
        />
        <div className="col-span-4">
          <TopicProportion props={{ data: total_topic.topic_proportions }} />
        </div>
      </div>

      <SidebarElement props={{ section_name: "analysisPerTopic" }} />
      <p className="mx-3 my-3 py-2 flex items-center  font-bold text-4xl border-b-2">
        3. 토픽별 감성 분석
      </p>
      {topics.map((topic, index) => {
        return (
          <div className="my-5 border-b-2 border-b-gray" key={index}>
            <SidebarElement props={{ section_name: topic.topic_name }} />

            <p className="mx-3 my-3 py-2 flex items-center font-bold text-3xl">
              3.{index + 1} {topic.topic_name}
            </p>
            <div className="grid grid-cols-4 grid-rows-[1fr-1fr-1fr-1fr] gap-4">
              <BigCharacter
                props={{ title: "트윗 수", content: topic.tweet_number }}
              />
              <SentimentDist props={{ sentiment_dist: topic.sentiment_dist }} />
              {/* wordcloud는 div에다 안 넣으면 무한정 길어짐 */}
              <div className="row-span-1">
                <WordCloud props={{ data: topic.topic_words }} />
              </div>
              <TopicValueTable
                props={{
                  title: "연관 단어 순위",
                  description: "LDA 계산, 상위 10개",
                  headers: ["단어", "값"],
                  datas: topic.topic_words.slice(0, 10),
                }}
              />

              <BigCharacter
                props={{
                  title: "감성 점수 가장 높은 날",
                  content: topic.most_positive_day.slice(5),
                }}
              />
              <BigCharacter
                props={{
                  title: "감성 점수 가장 낮은 날",
                  content: topic.most_negative_day.slice(5),
                }}
              />
              <BigCharacter
                props={{
                  title: "토픽 분포 가장 높은 날",
                  content: topic.max_proportion_day.slice(5),
                }}
              />
              <BigCharacter
                props={{
                  title: "토픽 분포 가장 낮은 날",
                  content: topic.min_proportion_day.slice(5),
                }}
              />

              <div className="col-span-4 w-full">
                <CorrLine
                  props={{
                    data: topic.sentiment_corr,
                    max_corr_window_size: topic.max_corr_window_size,
                  }}
                />
              </div>

              <div className="col-span-4 mx-auto flex flex-col justify-center items-center mt-1 mb-10 bg-white shadow-md rounded-lg px-3 pb-3">
                <h1 className="texxt-center text-lg mb-1">
                  window 크기별 상관관계
                </h1>
                <table className="table-auto mx-auto my-3 border-spacing-y-2 text-xl">
                  <thead className="border-y-2 border-y-black">
                    <th className="px-6 py-4">Index|window</th>
                    {topic.correlations.window_sizes.map((day, index) => {
                      return (
                        <th key={index} className="px-6 py-4">
                          {day}
                        </th>
                      );
                    })}
                  </thead>
                  <tbody>
                    <tr className="hover:bg-almostgreen hover:text-lightgreen_hover hover:font-bold text-tabletext">
                      <td className="px-6 py-4">S&P500</td>
                      {topic.correlations.snp500.map((corr, index) => {
                        return (
                          <td key={index} className="px-6 py-4">
                            {corr}
                          </td>
                        );
                      })}
                    </tr>
                    {/* <tr className="hover:bg-almostgreen hover:text-lightgreen_hover hover:font-bold text-tabletext">
                      <td className="px-6 py-4">NASDAQ100</td>
                      {topic.correlations.nasdaq100.map((corr, index) => {
                        return (
                          <td key={index} className="px-6 py-4">
                            {corr}
                          </td>
                        );
                      })}
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      })}
      <SidebarElement props={{ section_name: "conclusion" }} />
      <p className="mx-3 my-3 py-2 flex items-center font-bold text-4xl border-b-2">
        4. 결론
      </p>
      <div className="w-full col-span-4 mx-auto bg-white rounded-md shadow-md flex justify-center flex-col">
        <p className="text-justify break-all px-10 py-8 text-lg tracking-wide">
          본 보고서에서는 토픽 모델링을 통해 비재무 영역에 해당하는 토픽을
          선정하였고 감성 분석으로 대중의 감성을 수치화하였다. 이 수치들을
          이용하여 기업 비재무 평가 및 IT 기업의 트렌드 파악에 도움을 줄 수
          있다는 것으로 결론 내릴 수 있다. <br /> <br />
          먼저 토픽 모델링을 통해 p-value를 기반으로 가장 신뢰할 수 있는{" "}
          <b>“GPU”</b> 토픽을 추출하였다. GPU 토픽은 비재무 영역 중{" "}
          <b>기술 혁신</b>과 매우 밀접한 관련이 있으며 최근 GPU 대란이
          일어나면서 그에 따라 언급량도 증가한 것을 발견하였다. 토픽 모델링은
          비재무 영역과 관련 있는 주제를 찾는데 큰 도움이 될 수 있음을 알 수
          있다. <br /> <br />
          둘째, 감성 분석을 이용하여 대중의 감성을 정량화하고 감성 점수와 snp500
          지수와의 상관관계를 측정하였다. 그 결과 약 <b>-0.68</b>의 Pearson 상관
          계수가 나타났으며 이는 대중의 감성과 주가 지수 사이에 강한 음의 상관
          관계가 있음을 나타낸다. 이러한 결과는 주가지수가 상승할수록 대중들이
          비관적인 경향이 있음을 시사한다. 기술 혁신을 거듭할수록 대중은 우려를
          표하는 현상을 포착했다고 볼 수 있다. 단기적으로 관찰했을 때 현재 GPU
          토픽의 감성 점수는 하락을 보이므로 주가지수는 상승할 수 있다고 볼 수
          있다. 감성 분석은 대중의 인식과 재무 지표에 미치는 영향에 대한 정량적
          측정을 제공하며, 이는 회사를 둘러싼 단기 전망과 시장 정서를 평가하는
          데 유용할 수 있다. 이러한 결과를 바탕으로 단기 감성 분석이 기업의
          비재무적 평가에 실제로 기여할 수 있다는 결론을 내릴 수 있다. 감성
          분석을 평가 프로세스에 통합함으로써 회사는 대중의 인식과 주식 실적에
          대한 잠재적 영향력을 파악할 수 있다. <br />
          <br />
          그러나 감성 분석만으로는 기업 평가의 유일한 결정 요인이 될 수 없다는
          점에 유의해야 한다. 본 보고서에서 수행한 토픽 모델링 및 감성 분석은
          회사의 성과에 대한 포괄적인 평가를 제공하기 위해 다른 재무 및 비재무
          지표와 함께 추가 도구 역할을 한다. 이러한 결과의 견고성과 일반화
          가능성을 확립하기 위해 추가 연구 및 검증이 필요하다.
        </p>
      </div>
    </main>
  );
};

export default MainContent;
