// Custom class names for our minimal two-color palette
// Use these with className prop for consistent styling

export const colors = {
  bg: {
    light: { backgroundColor: '#FAFAF8' },
    dark: { backgroundColor: '#0A0A0A' },
    lightSubtle: { backgroundColor: 'rgba(10, 10, 10, 0.02)' },
    darkSubtle: { backgroundColor: 'rgba(250, 250, 248, 0.02)' },
    lightHover: { backgroundColor: 'rgba(10, 10, 10, 0.05)' },
    darkHover: { backgroundColor: 'rgba(250, 250, 248, 0.05)' },
  },
  text: {
    light: { color: '#0A0A0A' },
    dark: { color: '#FAFAF8' },
    light60: { color: 'rgba(10, 10, 10, 0.6)' },
    dark60: { color: 'rgba(250, 250, 248, 0.6)' },
    light70: { color: 'rgba(10, 10, 10, 0.7)' },
    dark70: { color: 'rgba(250, 250, 248, 0.7)' },
    light80: { color: 'rgba(10, 10, 10, 0.8)' },
    dark80: { color: 'rgba(250, 250, 248, 0.8)' },
    light50: { color: 'rgba(10, 10, 10, 0.5)' },
    dark50: { color: 'rgba(250, 250, 248, 0.5)' },
    light40: { color: 'rgba(10, 10, 10, 0.4)' },
    dark40: { color: 'rgba(250, 250, 248, 0.4)' },
  },
  border: {
    light10: { borderColor: 'rgba(10, 10, 10, 0.1)' },
    dark10: { borderColor: 'rgba(250, 250, 248, 0.1)' },
    light20: { borderColor: 'rgba(10, 10, 10, 0.2)' },
    dark20: { borderColor: 'rgba(250, 250, 248, 0.2)' },
    light: { borderColor: '#0A0A0A' },
    dark: { borderColor: '#FAFAF8' },
  },
};

export const useColors = (isDark: boolean) => ({
  bgPrimary: isDark ? colors.bg.dark : colors.bg.light,
  bgSecondary: isDark ? colors.bg.darkSubtle : colors.bg.lightSubtle,
  bgHover: isDark ? colors.bg.darkHover : colors.bg.lightHover,
  textPrimary: isDark ? colors.text.dark : colors.text.light,
  text80: isDark ? colors.text.dark80 : colors.text.light80,
  text70: isDark ? colors.text.dark70 : colors.text.light70,
  text60: isDark ? colors.text.dark60 : colors.text.light60,
  text50: isDark ? colors.text.dark50 : colors.text.light50,
  text40: isDark ? colors.text.dark40 : colors.text.light40,
  border10: isDark ? colors.border.dark10 : colors.border.light10,
  border20: isDark ? colors.border.dark20 : colors.border.light20,
  borderPrimary: isDark ? colors.border.dark : colors.border.light,
});
