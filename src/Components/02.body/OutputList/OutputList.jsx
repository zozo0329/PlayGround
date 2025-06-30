import OutputStyle from "./OutputList.module.css";
import Card from "../../UI/Card/Card";
import CardStyle from "../../UI/Card/Card.module.css";
const OutputList = ({ data, ifNoList }) => {
  return (
    <Card className={CardStyle.defaultCard}>
      <div className={OutputStyle.title}>
        <h1>Title</h1>
      </div>
      <div className={OutputStyle.list}>
        {!ifNoList && (
          <ul>
            <li>No list for now.</li>
          </ul>
        )}
        {data.map((data) => {
          console.log(data);
          return (
            <ul key={data.id}>
              <li>{data.userInput}</li>
            </ul>
          );
        })}
      </div>
    </Card>
  );
};

export default OutputList;
