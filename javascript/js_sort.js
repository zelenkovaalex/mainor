const items = [
  { name: "Усы", value: 150 },
  { name: "Iphone 4", value: 90000 },
  { name: "Набор сериалов", value: 1000 },
  { name: "Body mist", value: 1500 },
  { name: "Резиновые браслеты", value: 500 },
  { name: "Футболка / майка", value: 1500 },
  { name: "Космо легинсы", value: 2000 },
  { name: "Ньян кет", value: 300 },
  { name: "Растянутый кардиган", value: 1600 },
  { name: "Кепка", value: 2300 },
  { name: "Лонгборд", value: 24000 },
  { name: "Шорты со стразами", value: 300 },
];

// sort by value
items.sort((a, b) => a.value - b.value);

// sort by name
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
