function parseCount(valueString) {
  const parsedNumber = Number.parseFloat(valueString);
  if (Number.isNaN(parsedNumber)) {
    throw new Error("Невалидное значение");
  }
  return parsedNumber;
}

function validateCount(parseString) {
  try {
    const parseNum = parseCount(parseString);
    return parseNum;
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    if (
      this.sideA + this.sideB < this.sideC ||
      this.sideA + this.sideC < this.sideB ||
      this.sideB + this.sideC < this.sideA
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  get perimeter() {
    const triangleObject = this.sideA + this.sideB + this.sideC;
    return +triangleObject;
  }
  get area() {
    const semiPerimeter = 0.5 * (this.sideA + this.sideB + this.sideC);
    const areaOfATriangle = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.sideA) *
        (semiPerimeter - this.sideB) *
        (semiPerimeter - this.sideC)
    );
    return +areaOfATriangle.toFixed(3);
  }
}

function getTriangle(sideA, sideB, sideC) {
  try {
    const objectTriangle = new Triangle(sideA, sideB, sideC);
    return objectTriangle;
  } catch (error) {
    const getters = {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
    return getters;
  }
}
