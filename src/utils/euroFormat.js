// format number to Euro
let euro = Intl.NumberFormat('en-DE', {
  style: 'currency',
  currency: 'EUR',
});

export { euro };
