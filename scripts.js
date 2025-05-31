// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Exercises

//.1 ForEach Basics: Use forEach to log each name. 

names.forEach(name => console.log(name)); 

//Then each province to the console.

provinces.forEach(province => console.log(province));

// Then, log each name with a matching province in the format "Name (Province)".

names.forEach((name, index) => {
  const province = provinces[index];
  console.log(`${name} (${province})`);
});

//.2 Uppercase Transformation: Use map to create a new array of province names in all uppercase. 

const upperCaseProvinces = provinces.map(province => province.toUpperCase());

// Log the new array to the console.

console.log(upperCaseProvinces);

//.3 Name Lengths: Create a new array using map that contains the length of each name.

//.4 Sorting: Use sort to alphabetically sort the provinces.

//.5 Filtering Cape: Use filter to remove provinces containing "Cape". Log the count of remaining provinces.

//.6 Finding 'S': Create a boolean array using map and some to determine if a name contains the letter 'S'.

//.7 Creating Object Mapping: Use reduce to transform the names array into an object mapping names to their respective provinces.