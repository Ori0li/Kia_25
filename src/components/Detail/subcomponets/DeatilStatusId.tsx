import { useNavigate } from "react-router";
import { STATUS_BG_COLORS } from "../../VehicleStatusCard/styles/statusColor";
import { deatilStatusIdProps } from "../../VehicleStatusCard/types/vehicleStatusCardType";

const DeatilStatusId = ({ carStatus, saleId }: deatilStatusIdProps) => {
  const navi = useNavigate();
  const gotoBack = () => {
    navi("/");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: STATUS_BG_COLORS[carStatus],
      }}
    >
      <div onClick={gotoBack}>뒤로</div>
      <span>{carStatus}</span>
      <span>인증 검수</span>
      <span>매입 ID : {saleId}</span>
    </div>
  );
};

export default DeatilStatusId;
