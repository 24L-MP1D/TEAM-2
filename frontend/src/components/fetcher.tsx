export async function Fetcher(pathname: string) {
    try {
      const token = localStorage.getItem("authToken") || "";
      const response = await fetch(`http://localhost:4000${pathname}`, {
        headers: {
          authToken: token,
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