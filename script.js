let conversionType = document.getElementById("conversionType");
let inputValue = document.getElementById("inputValue");
let outputValue = document.getElementById("outputValue");
let convertButton = document.getElementById("convertButton");

const performConversion = () => {
  const selectedOption = conversionType.value;
  const input = parseFloat(inputValue.value);

  let result;
  switch (selectedOption) {
    case "cmToIn":
      result = (input / 2.54).toFixed(2) + " Inches";
      break;
    case "inToCm":
      result = (input * 2.54).toFixed(2) + " Centimeters";
      break;
    case "inToFt":
      result = (input / 12).toFixed(2) + " Feet";
      break;
    case "ftToIn":
      result = (input * 12).toFixed(2) + " Inches";
      break;
    case "ftToM":
      result = (input * 0.3048).toFixed(2) + " Meters";
      break;
    case "mToFt":
      result = (input / 0.3048).toFixed(2) + " Feet";
      break;
    case "mToKm":
      result = (input / 1000).toFixed(2) + " Kilometers";
      break;
    case "kmToM":
      result = (input * 1000).toFixed(2) + " Meters";
      break;
    case "cmToM":
      result = (input / 100).toFixed(2) + " Meters";
      break;
    case "mToCm":
      result = (input * 100).toFixed(2) + " Centimeters";
      break;
    case "inToM":
      result = (input * 0.0254).toFixed(2) + " Meters";
      break;
    case "mToIn":
      result = (input / 0.0254).toFixed(2) + " Inches";
      break;
    default:
      result = "Invalid Conversion";
  }

  outputValue.value = result || "";
};

convertButton.addEventListener("click", performConversion);
inputValue.addEventListener("input", () => {
  outputValue.value = "";
});
performConversion();