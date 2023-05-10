
export default class RestAPI {
    constructor() {

    }
    
    createDealWithPerson(event) {
        event.preventDefault();
        const API_TOKEN = '2217a7e1b08b421cb2d9237dc8094556ae74610a';
        const API_BASE_URL = 'https://api.pipedrive.com/v1';
        const createPerson = async (name, email) => {
            try {
              const response = await fetch(`${API_BASE_URL}/persons?api_token=${API_TOKEN}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  api_token: API_TOKEN,
                  name,
                  email,
                }),
              });
              const data = await response.json();
              return data.data.id;
            } catch (error) {
              console.error(error);
            }
          };
          
          // create a deal
          const createDeal = async (personId, title, value) => {
            try {
              const response = await fetch(`${API_BASE_URL}/deals?api_token=${API_TOKEN}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  api_token: API_TOKEN,
                  person_id: personId,
                  title,
                  value,
                }),
              });
              const data = await response.json();
              return data.data.id;
            } catch (error) {
              console.error(error);
            }
          };
          const main = async () => {
            const personId = await createPerson('John Doe', 'john.doe@example.com');
            const dealId = await createDeal(personId, 'Sample Deal', 1000);
            console.log(`Created a deal with ID ${dealId}`);
          };
          
          main();
    }
    
}

