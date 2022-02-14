export default async function (data) {
  const result = window.atob(data);
  return JSON.parse(result);
}
