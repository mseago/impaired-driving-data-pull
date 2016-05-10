'use strict';
if (this.ImpairedDB === undefined) this.ImpairedDB = {};

(function(context) {

  function start() {

    var statesLI = document.querySelector('#states');
    var apiData;



      var data = $.ajax("https://data.cdc.gov/api/views/k9ai-xgx2/rows.json?accessType=DOWNLOAD");
          data.done(function(result) {
        apiData = result;
        result.data.forEach(function(item, index) {

        var li = document.createElement('li');
        li.setAttribute('specific-state', index);
        statesLI.appendChild(li);
        li.textContent = item[8];
        console.log(apiData);
      });
    });

    statesLI.addEventListener('click', function(evt) {
      // console.log(evt.target);
      var index = evt.target.attributes['specific-state'].value;
      var state = apiData.data[index];
      // console.log(index);

      var stateWhich = document.querySelector("#state");
      stateWhich.textContent = state[8];
      var ageZeroTo20 = document.querySelector("#zeroTo20");
      ageZeroTo20.textContent = state[10];
      var age20To34 = document.querySelector("#twentyTo34");
      age20To34.textContent = state[11];
      var age35Plus = document.querySelector("#thirtyFivePlus");
      age35Plus.textContent = state[12];
      var maleDrivers = document.querySelector("#male");
      maleDrivers.textContent = state[13];
      var femaleDrivers = document.querySelector("#female");
      femaleDrivers.textContent = state[14];
    });




  }

  window.ImpairedDB.start = start;

})(window.ImpairedDB);
