import { useNavigate } from "react-router";
import { STATUS_BG_COLORS } from "./styles/statusColor";
import CarName from "./subcomponents/CarName";
import CarNumber from "./subcomponents/CarNumber";
import CarStatus from "./subcomponents/CarStatus";
import { VehicleStatusCardProps } from "./types/vehicleStatusCardType";

const VehicleStatusCard = ({
  id,
  carStatus,
  carName,
  carNumber,
}: VehicleStatusCardProps) => {
  const navi = useNavigate();

  const gotoDetail = () => {
    navi(`/detail/${id}`);
  };

  return (
    <article
      onClick={gotoDetail}
      style={{
        backgroundColor: STATUS_BG_COLORS[carStatus],
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        padding: "24px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CarName carName={carName} />
        <CarStatus carStatus={carStatus} />
      </div>
      <CarNumber carNumber={carNumber} />
    </article>
  );
};

export default VehicleStatusCard;
