import { imgSrcProps } from "../../VehicleStatusCard/types/vehicleStatusCardType";

const DetailImg = ({ imgSrc }: imgSrcProps) => {
  return (
    <div>
      <img src={imgSrc} />
    </div>
  );
};

export default DetailImg;
