/*
Utilize a huerística do vizinho para encontrar uma carteira de aplicação com o maior retorno anual.
b. Seja a carteira inicial aleatória, isto é, sortear o 30% entre as ações A até J, 25% entre as ações restantes, e
assim sucesivamente. Realizar 10 buscas aleatórias.
*/

const percentages = [0.3, 0.25, 0.2, 0.15, 0.1];

const stockOptions = [
	{
		name: 'A',
		annualReturn: 0.42292,
		application: 0,
	},
	{
		name: 'B',
		annualReturn: 0.25685,
		application: 0,
	},
	{
		name: 'C',
		annualReturn: 0.04128,
		application: 0,
	},
	{
		name: 'D',
		annualReturn: 0.05812,
		application: 0,
	},
	{
		name: 'E',
		annualReturn: -0.01731,
		application: 0,
	},
	{
		name: 'F',
		annualReturn: 0.09615,
		application: 0,
	},
	{
		name: 'G',
		annualReturn: 0.12039,
		application: 0,
	},
	{
		name: 'H',
		annualReturn: 0.05166,
		application: 0,
	},
	{
		name: 'I',
		annualReturn: 0.00424,
		application: 0,
	},
	{
		name: 'J',
		annualReturn: 0.21782,
		application: 0,
	},
];

function shuffle(stocks) {
	var currentIndex = stocks.length,
		temporaryValue,
		randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = stocks[currentIndex];
		stocks[currentIndex] = stocks[randomIndex];
		stocks[randomIndex] = temporaryValue;
	}

	return stocks;
}

function applyPercentages(stocks) {
	for (i = 0; i < stocks.length - i; i++) {
		stocks[i].application = percentages[i];
	}

	return stocks;
}

shuffle(stockOptions);
applyPercentages(stockOptions);
console.log('Carteira inicial aleatória:');
console.log(stockOptions);

let walletReturn = 0;
let biggestReturn = 0;
let biggestPosition;
let application = 0;

function swap(input, index_A, index_B) {
	let temp = input[index_A].application;

	input[index_A].application = input[index_B].application;
	input[index_B].application = temp;
}

function searchStocks(stocks, position) {
	stocks.map((stock, index) => {
		console.log(
			'[ ' +
				'Ação: ' +
				stock.name +
				' / ' +
				'Porcentagem: ' +
				stock.application * 100 +
				'% / ' +
				'Retorno Anual: ' +
				stock.annualReturn +
				' / index: ' +
				index +
				' ]'
		);

		walletReturn += stock.annualReturn * stock.application;
		application += stock.application;

		if (walletReturn > biggestReturn) {
			biggestReturn = walletReturn;
			biggestPosition = position;
		}
	});
	console.log('Porcentagem: ' + (application * 100).toFixed(0) + '%');
	console.log('Retorno da Carteira: ' + walletReturn);

	walletReturn = 0;
	application = 0;
}

function searchStocksShowingPositions(stocks, position) {
	console.log('\n \n' + 'Posição: ' + position);
	searchStocks(stocks, position);
}

let position = 1;

for (i = 0; i < stockOptions.length - i; i++) {
	for (j = i + 1; j < stockOptions.length; j++) {
		if (j === 1) {
			searchStocksShowingPositions(stockOptions, position);
			position++;
		}
		swap(stockOptions, i, j);
		searchStocksShowingPositions(stockOptions, position);
		swap(stockOptions, j, i);
		position++;
	}
}

console.log('\n \n');
console.log('O maior retorno anual é: ' + biggestReturn);
console.log('E a Carteira está na posição: ' + biggestPosition);
