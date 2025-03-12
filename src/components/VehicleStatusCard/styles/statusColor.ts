//styles - statusColor.ts
import { CoolGeryColors, SecondaryColors } from "../../../types/colors";
import { Status } from "../types/vehicleStatusCardType";

export const STATUS_TEXT_COLORS: Record<Status, string> = {
  대기: SecondaryColors.GreenDark,
  미완료: SecondaryColors.RedVariant,
  완료: CoolGeryColors.CoolGrey20,
};

export const STATUS_BG_COLORS: Record<Status, string> = {
  대기: SecondaryColors.GreenLight,
  미완료: SecondaryColors.RedLight,
  완료: CoolGeryColors.CoolGrey5,
};
