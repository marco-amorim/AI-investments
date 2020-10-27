/*
Utilize a huerística do vizinho para encontrar uma carteira de aplicação com o maior retorno anual.
b. Seja a carteira inicial aleatória, isto é, sortear o 30% entre as ações A até J, 25% entre as ações restantes, e
assim sucesivamente. Realizar 10 buscas aleatórias.
*/

const stockOptions = [
	{
		name: 'A',
		annualReturn: 0.42292,
		application: 0.3,
	},
	{
		name: 'B',
		annualReturn: 0.25685,
		application: 0.25,
	},
	{
		name: 'C',
		annualReturn: 0.04128,
		application: 0.2,
	},
	{
		name: 'D',
		annualReturn: 0.05812,
		application: 0.15,
	},
	{
		name: 'E',
		annualReturn: -0.01731,
		application: 0.1,
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
