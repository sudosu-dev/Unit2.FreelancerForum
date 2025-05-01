/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

/**
 * returns an object for a freelancer: name, occupation, and price
 */
function freelancerObject() {
  const randNameIndex = Math.floor(Math.random() * NAMES.length);
  const randOccupationIndex = Math.floor(Math.random() * OCCUPATIONS.length);

  const randName = NAMES[randNameIndex];
  const randOccupation = OCCUPATIONS[randOccupationIndex];
  const randPrice = Math.floor(
    Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1) + PRICE_RANGE.min
  );

  const freelancer = {
    name: randName,
    occupation: randOccupation,
    price: randPrice,
  };

  return freelancer;
}

// === state ===

const freelancers = Array.from({ length: NUM_FREELANCERS }, freelancerObject);
const averageFreelancerRate = averageRate();

function averageRate() {
  // const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
  let total = 0;
  for (const freelancer of freelancers) {
    total += freelancer.price;
  }
  return total / freelancers.length;
}

function freelancerRow(freelancer) {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  nameCell.textContent = freelancer.name;
  const occupationCell = document.createElement("td");
  occupationCell.textContent = freelancer.occupation;
  const priceCell = document.createElement("td");
  priceCell.textContent = `$${freelancer.price}`;

  row.append(nameCell, occupationCell, priceCell);

  return row;

  //   const row = document.createElement("tr");
  //   const content = `<td>${freelancer.name}</td><td>${freelancer.occupation}</td><td>${freelancer.price}</td>`;
  //   row.innerHTML = content;
  //   return row;
}

function freelancerRows() {
  const tbody = document.createElement("tbody");
  for (const freelancer of freelancers) {
    const row = freelancerRow(freelancer);
    tbody.append(row);
  }
  return tbody;
}

function averageRateHeading() {
  const h3 = document.createElement("h3");
  const content = `The average rate is $${averageFreelancerRate.toFixed(2)}`;
  h3.textContent = content;
  return h3;
}

// === render ===

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
  <h1>Freelancer Forum</h1>
  <div id="average-rate-placeholder"></div>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Occupation</th>
        <th>Rate</th>
      </tr>
    </thead>
    <tbody id="freelancer-rows-placeholder"></tbody>
  </table>
`;

  document
    .querySelector("#average-rate-placeholder")
    .replaceWith(averageRateHeading());
  document
    .querySelector("#freelancer-rows-placeholder")
    .replaceWith(freelancerRows());
}
render();
