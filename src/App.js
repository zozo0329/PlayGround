import { useState } from "react";
import AppStyle from "./App.module.css";
import PlusIcon from "./Components/Icons/PlusIcon";
import Modal from "./Components/UI/Modal/Modal";
import Header from "./Components/01.Header/Header";
import OutputList from "./Components/02.body/OutputList/OutputList";
import CheckList from "./Components/02.body/CheckList/Checklist";
function App() {
  const [modalPopUp, setModalPopUp] = useState(false);
  const [data, setData] = useState([]);
  const [ifNoList, setIfNoList] = useState(false);
  const dataHandler = (userData) => {
    setData((prev) => {
      return [...prev, userData];
    });
  };
  return (
    <div className={AppStyle}>
      <div>
        <PlusIcon setModalPopUp={setModalPopUp} />
        {modalPopUp && (
          <Modal
            setModalPopUp={setModalPopUp}
            dataHandler={dataHandler}
            setIfNoList={setIfNoList}
          />
        )}
      </div>
      <div>
        <Header />
      </div>
      <div className={AppStyle.list}>
        <OutputList data={data} ifNoList={ifNoList} />
        <CheckList />
      </div>
    </div>
  );
}

export default App;
