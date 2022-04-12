import axios from 'axios';


const getEventsData = async () => {
    const resObj = {};
    const data = await axios.get('http://localhost:8000/api/events')
    .then(function (response) {
      if(response.status === 200){
          console.log(response.data)
          return {data: response.data}
      }
    })
    .catch(function (error) {
      return {error};
    });
}


const useEventList = () => {
    const obj = getEventsData();
    return obj;
}


export default useEventList;