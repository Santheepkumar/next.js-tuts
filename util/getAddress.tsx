export function getAddress(address: any) {
  if (!address) {
    return "--";
  }
  const { street, suite, city, zipcode } = address;
  return `${street}, ${suite}, ${city} - ${zipcode}`;
}
