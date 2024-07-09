export default async function get_data() {
  const res = await fetch(import.meta.env.VITE_API_URL);
  const data = await res.json();
  return data;
}
