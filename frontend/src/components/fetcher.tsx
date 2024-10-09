export async function fetcher(pathname: string, method: string ) {
  try {
    const response = await fetch(`http://localhost:4000${pathname}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', 

    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; 
  }
}
