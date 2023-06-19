const BigCharacter = ({ props }) => {
  return (
    <div className="bg-white rounded-md shadow-md flex flex-col justify-center py-20">
      <h1 className="mx-3 text-lg text-center my-1">{props.title}</h1>
      <h1 className="mx-auto text-6xl text-center font-bold">
        {props.content}
      </h1>
    </div>
  );
};
export default BigCharacter;
