// vehicleStatusCardType.ts
export type Status = "완료" | "대기" | "미완료";
export type CarStatusProps = {
  carStatus: Status;
};
export type CarNumberProps = {
  carNumber: string;
};
export type CarNameProps = {
  carName: string;
};
export type idProps = {
  id: number;
};

export type imgSrcProps = {
  imgSrc: string;
};

export type saleIdProps = {
  saleId: string;
};

export type deatilStatusIdProps = {
  carStatus: Status;
  saleId: string;
};

type Cartegory =
  | "차량번호"
  | "차량명"
  | "연식"
  | "트림"
  | "모델코드"
  | "외장색상"
  | "내장색상"
  | "주행거리";

export type carInfoProps = {
  category: Cartegory;
  value: string;
};

type VechicleDetailProps = {
  carYear: string;
  trim: string;
  modelCode: string;
  outColor: string;
  innerColor: string;
  distance: string;
};

export type VehicleStatusCardProps = idProps &
  CarNameProps &
  CarStatusProps &
  CarNumberProps &
  imgSrcProps &
  saleIdProps &
  VechicleDetailProps;
