
export default class RestAPI {
    constructor() {

    }
    validation() {
      const isValid = true;
      let count = 0;
       // Validate each input field
      const elemList = document.querySelectorAll('input');
      for(let i = 0; i < elemList.length; i++) {
        const requirement = elemList[i].getAttribute('id') !== 'email' || elemList[i].getAttribute('id') !== 'submit';
        if (requirement) {
          if(elemList[i].value.trim() === '') {
            count+= 1;
            elemList[i].classList.add('red');
          }
        }
      }
      return count > 0 ? false : true;
    }
    resetFormData() {
      const elemList = document.querySelectorAll('input');
      for(let i = 0; i < elemList.length; i++) {
        const requirement = elemList[i].getAttribute('id') !== 'email' || elemList[i].getAttribute('id') !== 'submit';
        if (requirement) {
          elemList[i].value = '';
          elemList[i].classList.remove('red');
        }
      }
    }
    showSuccessStatus() {
      const elemList = document.querySelector('.status');
      elemList.classList.remove('hide');
      elemList.innerHTML = 'new Deal and Person have been successfully created';
      elemList.classList.add('show-success-status');
    }
    showErrorStatus() {
      const elemList = document.querySelector('.status');
      elemList.classList.remove('hide');
      elemList.innerHTML = 'ERROR : something went wrong!!!';
      elemList.classList.add('show-error-status');
    }
    createDealWithPerson(event) {
        event.preventDefault();
        const isValid = this.validation();
        console.log(isValid);
        if (isValid) {
          const form = new FormData(event.target);
          const formData = Object.fromEntries(form);
          console.log(formData);

          const API_TOKEN = '2217a7e1b08b421cb2d9237dc8094556ae74610a';
          const API_BASE_URL = 'https://api.pipedrive.com/v1';
          const createPerson = async () => {
              try {
                const response = await fetch(`${API_BASE_URL}/persons?api_token=${API_TOKEN}`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    "api_token": API_TOKEN,
                    name: formData.fname + ' ' + formData.lname,
                    email: formData.email,
                    phone: formData.phone,
                  }),
                });
                const data = await response.json();
                return data.data.id;
              } catch (error) {
                console.error(error);
              }
            };
            
            // create a deal
            const createDeal = async (personId) => {
              try {
                const response = await fetch(`${API_BASE_URL}/deals?api_token=${API_TOKEN}`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    "api_token": API_TOKEN,
                    "person_id": personId,
                    "title": formData.fname + ' ' + formData.lname + ' deal' ,
                    //address
                    "2afd4afbff2d0dc7a3c4a935ad73607e22922f83": formData.zcode + ' ' + formData.address + ', ' + formData.city + ', ' + formData.state,
                    //job type
                    "ad7bd357dee10b83216b019d1b73541d69cc508d": formData.jtype,
                    //job source
                    "efe90979d051712b3f474430ffc47b154c70756a": formData.jsource,
                    //job date
                    "f168379d89501d205645f88059283d04de3557f1": formData.date,
                    //job start time
                    "bbc6251457da4d851cfcf4409ed8633df045ea82": formData.stime,
                    //job end time
                    "7d11f6c0c549bad7b06e5f42bf8cf31d8eab6c7a": formData.etime,
                    //job comment (description)
                    "9aa2ca40aade637d0c7ce8520b0ba713ea75301a": formData.jdescription,
                    //area
                    "cac37f9b7cbe5e7b0877199563183a12a84ad701": formData.area, 
                  }),
                });
                const data = await response.json();
                return data.data.id;
              } catch (error) {
                console.error(error);
              }
            };
            const main = async () => {
              const personId = await createPerson();
              const dealId = await createDeal(personId);
              console.log(`Created a deal with ID ${personId} ${dealId}`);
              const isSuccess = (personId || dealId) === true ? true : false;
              return isSuccess;
            };
            
            if(main()) {
              this.resetFormData();
              this.showSuccessStatus();
            }
        } else {
          this.showErrorStatus();
        }
    }
}

