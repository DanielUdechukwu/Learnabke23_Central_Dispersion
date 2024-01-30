
const data = [1, 2, 3, 6, 10, 34, 25, 55, 55];

class MeasuresOfDispersion {
  constructor(values) {
    this.values = values
  }

  Mean() {
    const sum = this.values.reduce((acc, val) => acc + val, 0);
    const mean = sum / this.values.length;
    return mean;
  }

  Range() {
    const sortedArray = this.values.sort((a, b) => a - b);
    const calculateRange = sortedArray[sortedArray.length - 1] - sortedArray[0];
    return calculateRange;
  }

  Variance() {
    const squaredDifferences = this.values.map((value) => (
      Math.pow(value - this.Mean(), 2)
    ));
    const variance = squaredDifferences.reduce((acc, value) => acc + value, 0) / data.length;

    return variance.toFixed(2);
  }

  StandardDeviation() {
    return Math.pow(this.Variance(), 2);
  }

  MeanDeviation() {
    const absValue = this.values.map((item) => (
      Math.abs( item - this.Mean() )
    ));

    const meanDeviation = absValue.reduce((acc, value) => acc + value, 0) / this.values.length;
    return meanDeviation.toFixed(2)
  }

  QuartileDeviation() {
    // Omo
  }
}

const dispersion = new MeasuresOfDispersion(data);

console.log(`Range is: ${dispersion.Range()}`);
console.log(`Variance is: ${dispersion.Variance()}`);
console.log(`Standard deviation is: ${dispersion.StandardDeviation()}`);
console.log(`Mean deviation is: ${dispersion.MeanDeviation()}`);