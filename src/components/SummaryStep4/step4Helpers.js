export function getStep4Data(planDetails) {
  const plan = planDetails.plan;

  const planPrice = planDetails.price;
  const planName = planDetails.planName;
  const periodName = planDetails.plan;

  const online = !!planDetails.services.online;
  const larger = !!planDetails.services.larger;
  const custom = !!planDetails.services.custom;

  const period = plan === 'Monthly' ? 'mo' : 'yr';

  const priceOnline = planDetails.services.online
    ? planDetails.services.online.price
    : 0;
  const priceLarger = planDetails.services.larger
    ? planDetails.services.larger.price
    : 0;
  const priceCustom = planDetails.services.custom
    ? planDetails.services.custom.price
    : 0;

  const perPeriod = plan === 'Monthly' ? 'per month' : 'per year';

  const path = plan === 'Monthly' ? '/step2-monthly' : '/step2-yearly';

  const totalPrice = planPrice + priceOnline + priceLarger + priceCustom;
  return {
    plan,
    planPrice,
    planName,
    periodName,
    online,
    larger,
    custom,
    period,
    priceOnline,
    priceLarger,
    priceCustom,
    perPeriod,
    path,
    totalPrice,
  };
}
