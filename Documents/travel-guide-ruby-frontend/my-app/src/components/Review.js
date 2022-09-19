import React, {useState} from "react";
import Form from "react-bootstrap/Form";
//import App from "./App.js"

function fetchUserData() {
 fetch('http://localhost:9292/users')
 .then(Response => Response.json())
 .then(userdata => Review(userdata))
}
fetchUserData();

// function renderUserData(user) {
//   user.forEach(user => {
//     const userName = userdata.name
//     const userCity = userdata.city
//   })
// }
// renderUserData();

function postReview(e) {
  e.preventDefault();
    const reviewData = {
      name: "",
      Comment: "",
    };
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((r) => r.json())
      .then((newReview) => console.log(newReview));
}



function Review() {
  const [userData, setUserData] = useState([])
  
  return (
  <Form>
    <div class="form-group">
      <label for="Userselect">User Name</label>
      {/* <input type="text" class="form-control" id="ReviewFormInput" placeholder="User Name"></input> */}
      <select class="form-control" id="userFormSelect">
        <option>{userData.map(users =>
          users.map(user => <user key={user.id} name={user.name}></user>))}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="CitySelect">City</label>
      <select class="form-control" id="cityFormSelect">
        <option>{userData.map(users =>
          users.map(user => <user key={user.id} city={user.city}></user>))}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="TrafficrateSelect">Traffic rate</label>
      <select class="form-control" id="trafficFormSelect">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div class="form-group">
      <label for="NightlifeSelect">NightLife</label>
      <select class="form-control" id="nightlifeFormSelect">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div class="form-group">
      <label for="FriendlyToForeignerSelect">Friendly to Foreigner</label>
      <select class="form-control" id="friendly_to_foreignerFormSelect">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div class="form-group">
      <label for="PlacesToWorkFromSelect">Places To Work From</label>
      <select class="form-control" id="places_to_work_fromFormSelect">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div class="form-group">
      <label for="QualityOfInternetSelect">Quality Of Internet</label>
      <select class="form-control" id="quality_of_internetFormSelect">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div class="form-group">
      <label for="QualityOfHealthcareSelect">Quality Of Healthcare</label>
      <select class="form-control" id="quality_of_healthcareFormSelect">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>

    <div class="form-group">
      <label for="reviewFormTextarea">Review</label>
      <textarea class="form-control" id="reviewFormTextarea" rows="6"></textarea>
    </div>
    <button onSubmit={postReview} class="btn btn-primary" type="submit">Submit</button>
  </Form>
  )
}
export default Review;