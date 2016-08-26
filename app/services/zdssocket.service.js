/**
 * Created by Pedram2 on 8/26/2016.
 */

angular.module('app.A', [])
    .service('ServiceA', function() {
        this.getValue = function() {
            return this.myValue;
        };

        this.setValue = function(newValue) {
            this.myValue = newValue;
        }
    });