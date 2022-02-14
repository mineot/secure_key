export default async function codify(data) {
  const result = JSON.stringify(data);
  return window.btoa(result);
}
