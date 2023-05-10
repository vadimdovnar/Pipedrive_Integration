// export class RestAPI {
//     constructor() {

//     }

//     createDeal() {
//         const api_token = '1408ff17c6fdd6e5eb5a28e361027e7dfadc81a9';
//         const url = 'https://api.pipedrive.com/v1/deals';

//         const deal_data = {
//             title: 'New deal2',
//             value: 1000,
//             currency: 'USD',
//             person_id: 1234,
//             org_id: 5678
//         };
        
//         fetch(`${url}?api_token=${api_token}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(deal_data)
//         })
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error(error));
//     }
    
// }

export function set(e) {
    e.preventDefault();
    alert('Setting HIIIII');
}

