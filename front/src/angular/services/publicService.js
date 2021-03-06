
angular.module('ALapp.services').factory('publicService', ['$http','$window', function ($http,$window) {

    var backendDomain = "http://"+$window.location.hostname+":3000";
    var factory = {};

    //Get Posts
    factory.getPosts= function (findBy,skip,sort) {
        var promise = $http({
            method: 'GET',
            url: backendDomain+'/getPosts',
            params: { findBy : findBy, skip : skip, sort : sort }
        });
        return promise;
    }

    factory.getMonths= function () {
        var promise = $http({
            method: 'GET',
            url: backendDomain+'/getMonths',
            params: {}
        });
        return promise;
    }

    factory.getCategories= function () {
        var promise = $http({
            method: 'GET',
            url: backendDomain+'/getCategories',
            params: {}
        });
        return promise;
    }

    //Get Post by id
    factory.getPost= function (id) {
        var promise = $http({
            method: 'GET',
            url: backendDomain+'/getPost',
            params: { id : id }
        });
        return promise;
    }

    //Send contact message
    factory.sendMessage = function(from,subject,text){
        var promise = $http({
            method: 'POST',
            url: backendDomain+'/sendMessage',
            params: { from : from, subject : subject, text : text}
        });
        return promise;
    }

    factory.getImages = function(){
        var promise = $http({
            method: 'GET',
            url: backendDomain+'/getImages'
        });
        return promise;
    }

    //BTC-Payments
    factory.getAddressesWaiting = function(){
        var promise = $http({
            method: 'GET',
            url: backendDomain+'/getPoolAddresses',
            params: { type : 'waiting', limit : 10 }
        });
        return promise;
    }
    factory.getAddressesFree = function(){
        var promise = $http({
            method: 'GET',
            url: backendDomain+'/getPoolAddresses',
            params: { type : 'free', limit : 10 }
        });
        return promise;
    }
	factory.getPaymentsDone = function(){
        var promise = $http({
            method: 'GET',
            url: backendDomain+'/getPaymentsDone'
        });
        return promise;
    }
	factory.getPaymentsWaiting = function(){
        var promise = $http({
            method: 'GET',
            url: backendDomain+'/getPaymentsWaiting'
        });
        return promise;
    }
	factory.getPaymentDone = function(){
        var promise = $http({
            method: 'GET',
            url: backendDomain+'/getPaymentDone'
        });
        return promise;
    }
	factory.getPaymentWaiting = function(){
        var promise = $http({
            method: 'GET',
            url: backendDomain+'/getPaymentWaiting'
        });
        return promise;
    }
    factory.getOnCreateFunctions = function(){
        var promise = $http({
            method: 'GET',
            url: backendDomain+'/getOnCreateFunctions'
        });
        return promise;
    }
	factory.getOnCompleteFunctions = function(){
        var promise = $http({
            method: 'GET',
            url: backendDomain+'/getOnCompleteFunctions'
        });
        return promise;
    }
    factory.getOnCancelFunctions = function(){
        var promise = $http({
            method: 'GET',
            url: backendDomain+'/getOnCancelFunctions'
        });
        return promise;
    }
    factory.getOnWarningFunctions = function(){
        var promise = $http({
            method: 'GET',
            url: backendDomain+'/getOnWarningFunctions'
        });
        return promise;
    }
    factory.createBTCPayment = function(operation,quantity,email){
        var promise = $http({
            method: 'POST',
            url: backendDomain+'/createBTCPayment',
            params: { operation : operation, quantity : quantity, email : email}
        });
        return promise;
    }
    factory.commentPost = function(newComment){
        var promise = $http({
            method: 'POST',
            url: backendDomain+'/commentPost',
            params: { postID : newComment.postID, name : newComment.name, text : newComment.text}
        });
        return promise;
    }

    return factory;
}]);
