const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
  	 minimumFractionDigits: 2
  }).format(value); // TODO

export default formatValue;
