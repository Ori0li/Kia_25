type PrimaryTone = "Black" | "White";
type PrimaryColor = `${PrimaryTone}`;

//vehicle status card

type SecondaryTone = "Red" | "Green";
type SecondaryIntensity = "Dark" | "Light" | "Variant";
type SecondaryColor = `${SecondaryTone}${SecondaryIntensity}`;

type CoolTone = "CoolGrey";
type CoolIntensity = "5" | "10" | "20";
type CoolGreyColor = `${CoolTone}${CoolIntensity}`;

type HexColor = `#${string}`;
type ColorType<T extends PrimaryColor | SecondaryColor | CoolGreyColor> = { [key in T]: HexColor };

export const PrimaryColors: ColorType<PrimaryColor> = {
  Black: "#05141f",
  White: "#ffffff",
};
export const SecondaryColors: ColorType<SecondaryColor> = {
  GreenDark: "#4C5B35",
  GreenLight: "#DAEDBD",
  GreenVariant: "#589000",
  RedDark: "#7DAC55",
  RedLight: "#FEE9EC",
  RedVariant: "#EA0029",
};

export const CoolGeryColors: ColorType<CoolGreyColor> = {
  CoolGrey5: "#f2f4f6",
  CoolGrey10: "#e6e7e9",
  CoolGrey20: "#cdd0d2",
};
