/**
 * @description The function calculates the simple interest on the principal.
 * @param {Number} principal The base and incremental sum.
 * @param {Number} rate The flat interest rate.
 * @param {Number} time The period over which the investment is stipulated for.
 * @returns {Number} The simple interest.
 */
const simpleInterest = (principal, rate, time) => {
  return principal * (rate / 100) * time;
};

const simpleInterestResult = () => {
  const principalInput = document.querySelector('.simple-interest input.principal');
  const rateInput = document.querySelector('.simple-interest input.rate');
  const timeInput = document.querySelector('.simple-interest input.time');

  const principalValue = Number(principalInput.value);
  const rateValue = Number(rateInput.value);
  const timeValue = Number(timeInput.value);

  document.querySelector('.simple-interest p.result').innerText = `=N= ${simpleInterest(principalValue, rateValue, timeValue)}`;
}

(() => {
  const principalInput = document.querySelector('.simple-interest input.principal');
  const rateInput = document.querySelector('.simple-interest input.rate');
  const timeInput = document.querySelector('.simple-interest input.time');
  const button = document.querySelector('button.simple-interest');

  const principalValue = Number(principalInput.value);
  const rateValue = Number(rateInput.value);
  const timeValue = Number(timeInput.value);

  rateInput.addEventListener('change', () => {
    if (principalValue >= 0 && rateValue >= 0 && rateValue <= 100 && timeValue >= 0) {
      button.removeAttribute('disabled');
    }
  });
})();
