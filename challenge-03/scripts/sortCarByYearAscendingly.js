function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?

  const carCopy = [...cars];

  let selesai = false;
  while (!selesai) {
    selesai = true;
    for (let i = 1; i < carCopy.length; i++) {
      if (carCopy[i - 1].year > carCopy[i].year) {
        selesai = false;
        let temp = carCopy[i - 1];
        carCopy[i - 1] = carCopy[i];
        carCopy[i] = temp;
      }
    }
  }
  console.log(carCopy);
  return carCopy;
}
