// Measures of central tendency

const data = [1, 2, 3, 6, 10, 34, 25, 55, 55];

class MeasuresOfCentralTendency {
  constructor(values){
    this.values = values
  }

  mean() {
    const sum = this.values.reduce((acc, val) => acc + val, 0);
    const result = sum / this.values.length;
    return result.toFixed(3);
  }

  median() {
    const newData = this.values.sort((a, b) => a - b);
    
    const middleIndex = Math.floor(newData.length / 2);

    if (newData.length % 2 === 0) {
      return((newData[middleIndex - 1] + newData[middleIndex]) / 2);
    } else {
      return newData[middleIndex];
    }
  }

  mode() {
    const countMap = new Map();
    this.values.forEach(val => {
      countMap.set(val, (countMap.get(val) || 0) + 1);
    });

    let mode;
    let maxCount = 0;

    countMap.forEach((count, val) => {
      if (count > maxCount) {
        mode = val;
        maxCount = count;
      }
    });

    return mode;
  }
}

const calculator = new MeasuresOfCentralTendency(data);

console.log(calculator.mean());
console.log(calculator.median());
console.log(calculator.mode());