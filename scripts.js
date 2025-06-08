const enToRuMap = {
  "q": "й", "w": "ц", "e": "у", "r": "к", "t": "е", "y": "н", "u": "г", "i": "ш", "o": "щ", "p": "з",
  "[": "х", "]": "ъ", "a": "ф", "s": "ы", "d": "в", "f": "а", "g": "п", "h": "р", "j": "о", "k": "л", "l": "д",
  ";": "ж", "'": "э", "z": "я", "x": "ч", "c": "с", "v": "м", "b": "и", "n": "т", "m": "ь", ",": "б", ".": "ю",
  "/": ".", "`": "ё", "Q": "Й", "W": "Ц", "E": "У", "R": "К", "T": "Е", "Y": "Н", "U": "Г", "I": "Ш",
  "O": "Щ", "P": "З", "{": "Х", "}": "Ъ", "A": "Ф", "S": "Ы", "D": "В", "F": "А", "G": "П", "H": "Р",
  "J": "О", "K": "Л", "L": "Д", ":": "Ж", "\"": "Э", "Z": "Я", "X": "Ч", "C": "С", "V": "М", "B": "И",
  "N": "Т", "M": "Ь", "<": "Б", ">": "Ю", "?": ",", "~": "Ё"
};

const ruToEnMap = Object.fromEntries(Object.entries(enToRuMap).map(([en, ru]) => [ru, en]));

function convertLayout(input, direction = "ruToEn") {
  const map = direction === "enToRu" ? enToRuMap : ruToEnMap;
  return input.split("").map(char => map[char] || char).join("");
}

function convert() {
  const inputField = document.getElementById('textInput');
  const input = inputField.value;
  const direction = document.getElementById('direction').value;
  const result = convertLayout(input, direction);
  const resultContainer = document.getElementById('resultContainer');
  const resultText = document.getElementById('resultText');

  resultText.textContent = result;
  resultContainer.style.display = 'block';

  // Clear the input field
  inputField.value = '';
}

function copyResult() {
  const text = document.getElementById('resultText').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const copyBtn = document.querySelector('.copy-btn');
    const tooltip = copyBtn.querySelector('.tooltip');
    tooltip.classList.add('show');

    // Hide after 1.5 seconds
    setTimeout(() => {
      tooltip.classList.remove('show');
    }, 1500);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('textInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      convert();
    }
  });

});