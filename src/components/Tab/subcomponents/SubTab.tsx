import { CoolGeryColors, PrimaryColors } from "../../../types/colors";

export type Status = "진행대기" | "완료";

type SubTabProps = {
  subtabText: Status;
  ea: number;
  isSelected: boolean;
  click: () => void;
};

const SubTab = ({ subtabText, ea, isSelected, click }: SubTabProps) => {
  return (
    <div
      onClick={click}
      style={{ padding: "30px", textAlign: "center", flex: 1, borderBottom: isSelected ? "3px solid black" : "", color: isSelected ? PrimaryColors.Black : CoolGeryColors.CoolGrey20 }}
    >
      {subtabText} {ea}
    </div>
  );
};

export default SubTab;
