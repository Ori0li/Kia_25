import { BODYFONT } from "../../../types/fonts";
import { STATUS_TEXT_COLORS } from "../styles/statusColor";
import { CarStatusProps } from "../types/vehicleStatusCardType";

const CarStatus = ({ carStatus }: CarStatusProps) => {
  return <span style={{ ...BODYFONT.B2, color: STATUS_TEXT_COLORS[carStatus] }}>{carStatus}</span>;
};

export default CarStatus;
