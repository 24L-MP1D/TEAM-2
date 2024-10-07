export async function fetcher(pathname: string, method: string) {
  try {
    const token = localStorage.getItem("authToken") || "";
    console.log("Auth Token:", token);
    const response = await fetch(`http://localhost:4000${pathname}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'authToken': `Bearer ${token}`,
      },

    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json(); // Return the JSON data
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Return null in case of an error
  }
}