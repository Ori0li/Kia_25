import { useNavigate } from "react-router";
import {
  STATUS_BG_COLORS,
  STATUS_TEXT_COLORS,
} from "../../VehicleStatusCard/styles/statusColor";
import { deatilStatusIdProps } from "../../VehicleStatusCard/types/vehicleStatusCardType";

const DetailStatusId = ({ carStatus, saleId }: deatilStatusIdProps) => {
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
      <span style={{ color: STATUS_TEXT_COLORS[carStatus] }}>{carStatus}</span>
      <span>인증 검수</span>
      <span>매입 ID : {saleId}</span>
    </div>
  );
};

export default DetailStatusId;
