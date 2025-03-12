import { carInfoProps } from "../../VehicleStatusCard/types/vehicleStatusCardType";

const DetailInfo = ({ category, value }: carInfoProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>{category}</span>
      <span>{value}</span>
    </div>
  );
};

export default DetailInfo;
