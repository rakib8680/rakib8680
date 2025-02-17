const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Abdullah%20Al%20Rakib&g=rakib8680&x=rakib8680&l=rakib8680&i=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F121743420%3Fv%3D4&p=abdullah-al-rakib.surge&z=7e55c";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
