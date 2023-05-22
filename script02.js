function converter (mpg) {
    let result =+(mpg * 1.609344 / 4.54609188).toFixed(2)
    return result
  }