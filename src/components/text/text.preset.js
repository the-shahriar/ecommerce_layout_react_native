import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

const BASE = {
  fontFamily: typography.primary,
  fontSize: 16,
  color: colors.white,
};

const BASE_BOLD = {
  fontFamily: typography.primary,
  fontSize: 16,
  color: colors.white,
};

const NORMAL = {
  fontFamily: typography.secondary,
  color: colors.white,
};

export const presets = {
  default: BASE,
  normal: NORMAL,
  h1: {
    ...NORMAL,
    fontSize: 32,
    fontWeight: "bold",
  },
  h2: {
    ...NORMAL,
    fontSize: 28,
    fontWeight: "bold",
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 24,
    fontWeight: "bold",
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 16,
    fontWeight: "bold",
  },
  h5: {
    ...BASE,
    fontSize: 14,
  },
  small: {
    ...BASE,
    fontSize: 12,
  },
};
