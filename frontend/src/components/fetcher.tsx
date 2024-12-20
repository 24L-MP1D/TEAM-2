

export async function fetcher(pathname: string, method: string) {
  try {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${pathname}`, {
      method,
      // credentials: 'include', 
      headers: {
        'Content-Type': 'application/json',
 
      },
     


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

