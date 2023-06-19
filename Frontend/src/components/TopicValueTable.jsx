const TopicValueTable = ({ props }) => {
  // 타입 0: 감성분포 순위, 상관관계 순위
  return (
    <div className="bg-white rounded-md shadow-md flex flex-col justify-center">
      <h1 className="mx-3 text-lg text-center mt-1 mb-2">{props.title}</h1>
      <h1 className="mx-3 text-md text-center text-gray my-1">
        {props.description}
      </h1>
      <table className="table-auto mx-auto my-3 border-spacing-y-2 text-md">
        <thead className="border-y-2 border-y-black">
          {props.headers.map((header, index) => {
            return (
              <th key={index} className="px-6 py-1">
                {header}
              </th>
            );
          })}
        </thead>
        <tbody>
          {props.datas.map((data, index) => {
            return (
              <tr
                key={index}
                className="hover:bg-almostgreen hover:text-lightgreen_hover hover:font-bold text-tabletext"
              >
                <td className="px-4 py-1">
                  {data.topic_name ? data.topic_name : data.text}
                </td>
                <td className="text-center px-4 py-1">{data.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TopicValueTable;
