`use strict`

const sunriseSunset = ($http) => {
  let dateTime = new Date()
  let date = dateTime.getMonth() + '/' + dateTime.getDate() + '/' + dateTime.getFullYear()
  $http.get(`http://apps.tsa.dhs.gov/MyTSAWebService/GetEventInfo.ashx?eventtype=sunrise_sunset&eventdate=${date}&airportcode=BNA&output=json`)
}
