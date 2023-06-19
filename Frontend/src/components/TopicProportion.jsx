import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TopicProportion = ({ props }) => {
  const numbers = [...Array(10).keys()]; // 토픽 개수 지정 필요
  const topic_names = [
    "기타",
    "Apple",
    "메타버스",
    "GPU",
    "개인비서",
    "스마트폰",
    "컨텐츠 플랫폼",
    "AI",
    "Apps",
    "주식",
  ];
  const COLORS = ["#C3E855", "#C9839D", "#6AC7F5"];

  const customToolTip = ({ active, payload, label }) => {
    let sorted_payload;
    if (active && payload && payload.length) {
      sorted_payload = payload.sort((a, b) => b.value - a.value);
      console.log(payload);
      return (
        <div className="custom-tooltip bg-white rounded-lg shadow-md py-2 px-2">
          <p>{payload[0].payload.date}</p>
          {sorted_payload.map((topic, index) => {
            return (
              <div key={index}>
                <p style={{ color: topic.stroke }}>{`${
                  topic_names[parseInt(topic.dataKey[5])]
                }: ${topic.value}`}</p>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div className="mx-auto bg-white rounded-md shadow-md">
      <h1 className="mx-3 text-lg text-center my-1 pt-2">날짜별 토픽 분포</h1>
      <ResponsiveContainer height={400}>
        <LineChart width={800} height={400} data={props.data}>
          <XAxis dataKey={"date"} />
          <YAxis type="number" domain={["dataMin", "dataMax"]} />
          <Legend />
          <Tooltip content={customToolTip} />
          {numbers.map((i) => {
            if (i === 0) {
              return (
                <Line
                  type={"linear"}
                  dataKey={`topic${i}`}
                  key={`topic ${i}`}
                  stroke={"#AAAAAA"}
                  strokeWidth={2}
                />
              );
            }
            return (
              <Line
                type={"linear"}
                dataKey={`topic${i}`}
                key={`topic ${i}`}
                stroke={COLORS[i % COLORS.length]}
                strokeWidth={2}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default TopicProportion;
