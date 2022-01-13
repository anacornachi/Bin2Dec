class Converter {
  constructor(selectors) {
    this.input = document.querySelector(selectors.input);
    this.button = document.querySelector(selectors.button);
    this.display = document.querySelector(selectors.display);
    this.result;

    this.button.addEventListener("click", (event) => this.calculate(event));

    this.input.addEventListener("keydown", (event) =>
      this.validateInput(event)
    );
  }

  validateInput(event) {
    const { key } = event;

    if (
      key !== "0" &&
      key !== "1" &&
      key !== "Backspace" &&
      key !== "Enter" &&
      key !== "Control" &&
      key !== "v" &&
      key !== "c" &&
      key !== "Shift" &&
      key !== "Home" &&
      key !== "End" &&
      key !== "ArrowLeft" &&
      key !== "ArrowRight" &&
      key !== "ArrowUp" &&
      key !== "ArrowDown"
    ) {
      event.preventDefault();
      alert("Você deve somente inserir 0 ou 1");
    }
    if (key === "Enter") {
      this.calculate(event);
    }
  }

  calculate(event) {
    event.preventDefault();
    converter.binToDec(this.input.value);
  }

  binToDec(binary) {
    const arrayBinary = binary.split("");
    let soma = 0;

    arrayBinary.forEach((item, index, array) => {
      const number = Number(item);
      const indexInvertido = array.length - index - 1;
      const potencia = Math.pow(2, indexInvertido);
      const resultado = number * potencia;

      soma += resultado;
    });
    this.result = soma;
    console.log(this.result);
    this.render();
  }

  render() {
    this.display.innerHTML = `<h3 class="text-2xl font-semibold">Valor convertido</h3>
    <div
      class="w-full h-full flex items-center justify-center gap-5 px-48"
    >
      <div
        class="
          w-3/6
          text-base
          bg-indigo-700 bg-opacity-10
          w-2/6
          p-5
          rounded-2xl
        "
      >
        
          <h6 class="font-semibold">Número binário:</h6><p>
          ${this.input.value}
        </p>
      </div>
      <div
        class="
          w-3/6
          text-base
          bg-indigo-700 bg-opacity-10
          w-2/6
          p-5
          rounded-2xl
        "
      >
        
          <h6 class="font-semibold">Número decimal:</h6><p>
          ${this.result}
        </p>
      </div>
    </div>`;
    this.input.value = "";
  }
}

const selectors = {
  input: "[data-input]",
  button: "[data-button]",
  display: "[data-display]",
};

const converter = new Converter(selectors);
