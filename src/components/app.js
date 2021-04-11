import React, { useState } from "react";
import ChartTree from "./d3chart";
import Modal from "./modal";
import "./style.css";

const App = () => {
  const [chartShown, setChartShown] = useState(false);
  const [modal, setModal] = useState(false);

  const modalOpen = () => {
    setModal(true);
    setChartShown(!chartShown);
  };

  const modalClose = () => {
    setModal(false);
    setChartShown(!chartShown);
  };

  const renderChart = () => {
    if (chartShown) {
      return <ChartTree />;
    }
    return null;
  };
  return (
    <div>
      <div className="App">
        <p className="model-open" onClick={(e) => modalOpen(e)}>
          Open Modal
        </p>
        <Modal show={modal} handleClose={(e) => modalClose(e)}>
          {renderChart()}
        </Modal>
      </div>
    </div>
  );
};
export default App;
