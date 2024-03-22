import fs from "fs";
// Função para gerar um número aleatório dentro de um intervalo
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Função para gerar um nome aleatório para o flamingo
function generateName() {
  const names = [
    "Flamy",
    "Rosie",
    "Sunny",
    "Fuego",
    "Coral",
    "Pinky",
    "Blaze",
    "Sunset",
    "Feather",
    "Splash",
  ];
  return names[randomNumber(0, names.length - 1)];
}

// Função para gerar um array de flamingos
function generateFlamingos(quantity) {
  const flamingos = [];

  for (let i = 1; i <= quantity; i++) {
    const flamingo = {
      id: i,
      idade: randomNumber(1, 20), // Idade entre 1 e 20 anos
      bfCorporal: randomNumber(5, 15) / 10, // BF Corporal entre 0.5 e 1.5
      nome: generateName(),
      raça: ["Puro sangue", "Mesclado", "Vira lata"][randomNumber(0, 2)], // Raça aleatória
    };

    flamingos.push(flamingo);
  }

  return flamingos;
}

// Exemplo de uso
const quantidadeDeFlamingos = 10000;
const flamingos = generateFlamingos(quantidadeDeFlamingos);
fs.writeFileSync("flamingos.json", JSON.stringify(flamingos, null, 4));
