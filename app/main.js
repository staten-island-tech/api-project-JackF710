import "./style.css";
//get data
//promises
//show data

async function getData() {
  //return.promise
  try {
    const response = await fetch(
      api - football - standings.azharimm.site / leagues
    );
    //guard clause
    if (response.status != 200) {
      throw new Error(response);
    } else {
      //convert promise to json
      const data = await response.json();
      console.log(data.data);
      //unique to this API (valorant example)
    }
  } catch (error) {
    alert("hey I could not find that agent");
  }
}

getData();
