import { BODYFONT } from "../../../types/fonts";
import { CarNameProps } from "../types/vehicleStatusCardType";

const CarName = ({ carName }: CarNameProps) => {
  return <span style={BODYFONT.B1}>{carName}</span>;
};

export default CarName;
