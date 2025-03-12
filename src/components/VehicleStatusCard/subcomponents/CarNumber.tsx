import { HEADERFONT } from "../../../types/fonts";
import { CarNumberProps } from "../types/vehicleStatusCardType";

const CarNumber = ({ carNumber }: CarNumberProps) => {
  return <span style={HEADERFONT.H1}>{carNumber}</span>;
};

export default CarNumber;
