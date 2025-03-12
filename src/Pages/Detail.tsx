import { useParams } from "react-router";
import { vehicleData } from "../components/VehicleStatusCard/data/vehicleData";
import DeatilStatusId from "../components/Detail/subcomponets/DeatilStatusId";
import { VehicleStatusCardProps } from "../components/VehicleStatusCard/types/vehicleStatusCardType";
import DetailImg from "../components/Detail/subcomponets/DetailImg";
import DetailInfo from "../components/Detail/subcomponets/DetailInfo";

const Detail = () => {
  const { id } = useParams();

  const filterData = vehicleData.find(
    (v) => v.id == parseInt(id || "")
  ) as VehicleStatusCardProps;

  if (filterData == undefined) return <>데이터없음</>;

  return (
    <>
      <DeatilStatusId
        carStatus={filterData.carStatus}
        saleId={filterData.saleId}
      />
      <DetailImg imgSrc={filterData.imgSrc} />
      <DetailInfo category={"차량번호"} value={filterData.carNumber} />
      <DetailInfo category={"차량명"} value={filterData.carName} />
      <DetailInfo category={"연식"} value={filterData.carYear} />
      <DetailInfo category={"트림"} value={filterData.trim} />
      <DetailInfo category={"모델코드"} value={filterData.modelCode} />
      <DetailInfo category={"외장색상"} value={filterData.outColor} />
      <DetailInfo category={"내장색상"} value={filterData.innerColor} />
      <DetailInfo category={"주행거리"} value={filterData.distance} />
    </>
  );
};

export default Detail;
