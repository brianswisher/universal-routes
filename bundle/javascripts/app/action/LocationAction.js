var alt = require("../alt.js");
var LocationsFetcher = require("../util/LocationsFetcher.js");

class LocationAction {
  fetchLocations() {
    // we dispatch an event here so we can have "loading" state.
    this.dispatch();

    LocationsFetcher.fetch()
      .then((locations) => {
        // we can access other actions within our action through `this.actions`
        this.actions.updateLocations(locations);
      })
      .catch((errorMessage) => {
        this.actions.locationsFailed(errorMessage);
      });
  }

  locationsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  updateLocations(locations) {
    // console.log("|--->", locations);
    this.dispatch(locations);
  }
}

export default alt.createActions(LocationAction);
