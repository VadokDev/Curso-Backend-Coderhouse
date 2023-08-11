const objetazo = {};

for (let i = 0; i < 4; i++) {
  const numerazo = Math.floor(Math.random() * 20 + 1);
  if (objetazo[numerazo]) {
    objetazo[numerazo]++;
  } else {
    objetazo[numerazo] = 1;
  }
}

console.log(objetazo);
