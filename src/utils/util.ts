export const capitalizeTextAndEndWithPeriod = (text?: string) => {
  // Capitalize the first letter of each word
  if (text == null) {
    // Return an empty string or handle this case as needed
    return "";
  }
  const capitalizedText = text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Ensure the text ends with a period
  return capitalizedText.endsWith(".")
    ? capitalizedText
    : capitalizedText + ".";
};
