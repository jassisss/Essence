(function() {
    'use strict';

    app.config(['$provide', function($provide) {
		
		$provide.provider('formatDate', function(){

			this.$get = function () {
				return {
					generate: function (dateParam) {
						var date = new Date(dateParam);
						var year = date.getFullYear();
						var month = (date.getMonth() > 11) ?  date.getMonth() + 1 : date.getMonth();
						var day = date.getDate();
						var hours = date.getHours();
						var minutes = date.getMinutes();
						var seconds = date.getSeconds();
						var formatedDate = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
						return formatedDate;	
					
					}
				};

			};

		});

	}])

})();