import {
  CartesianAxis,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CorrLine = ({ props }) => {
  return (
    <div className="mx-auto bg-white rounded-md shadow-md">
      <h1 className="mx-3 text-lg text-center my-1 py-1">
        감성 점수, 주가 지수 상관관계 (window size={props.max_corr_window_size})
      </h1>
      <ResponsiveContainer height={400}>
        <LineChart width={1100} height={400} data={props.data}>
          <XAxis dataKey={"date"} />
          <YAxis type="number" domain={["dataMin", "dataMax"]} />
          <Legend />

          <Line
            type={"linear"}
            dataKey={"sentiment"}
            stroke={"#6AC7F5"}
            strokeWidth={2}
          />

          <Line
            type={"linear"}
            dataKey={"snp500"}
            stroke={"#C9839D"}
            strokeWidth={2}
          />

          <Line
            type={"linear"}
            dataKey={"nasdaq100"}
            stroke={"crimson"}
            strokeWidth={2}
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default CorrLine;
