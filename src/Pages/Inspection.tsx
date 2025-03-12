import { useState } from "react";
import Tab from "../components/Tab/Tab";
import { vehicleData } from "../components/VehicleStatusCard/data/vehicleData";
import { Status } from "../components/Tab/subcomponents/SubTab";
import VehicleStatusCard from "../components/VehicleStatusCard/VehicleStatusCard";

const Inspection = () => {
  const [selected, setSelected] = useState<Status>("진행대기");
  const selectWait = () => setSelected("진행대기");
  const selectComplete = () => setSelected("완료");

  return (
    <>
      <Tab
        selected={selected}
        selectComplete={selectComplete}
        selectWait={selectWait}
      />
      <section
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        {vehicleData
          .filter((v) =>
            selected == "완료" ? v.carStatus == "완료" : v.carStatus != "완료"
          )
          .map((v) => (
            <VehicleStatusCard {...v} />
          ))}
      </section>
    </>
  );
};
export default Inspection;
