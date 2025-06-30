import Card from "../../UI/Card/Card";
import CardStyle from "../../UI/Card/Card.module.css";
const Checklist = () => {
  return (
    <Card className={CardStyle.defaultCard}>
      <div className={CardStyle.title}>
        <h1>Title</h1>
      </div>
      <div className={CardStyle.list}>
        <ul>
          <li>Somthing</li>
          <li>Another somthing</li>
          <li>and another somthing</li>
          <li>this is nothing</li>
        </ul>
      </div>
    </Card>
  );
};

export default Checklist;
