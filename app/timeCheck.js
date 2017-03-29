`use strict`

app.factory('timeCheck', function($http){
  return {
    let dateTime = new Date()
    let date = dateTime.getMonth() + '/' + dateTime.getDate() + '/' + dateTime.getFullYear()
    let tsaUrl = 'http:' + '//' + `apps.tsa.dhs.gov/MyTSAWebService/GetEventInfo.ashx?eventtype=sunrise_sunset&eventdate=${date}&airportcode=BNA&output=json`
    $http.get(tsaUrl)
    .then((value) => {
      console.log(`value`, value)
      return value.data
    })
  }
})
