var myApp = angular.module('myApp',[]);

myApp.controller('myController',function($scope){

    $scope.products=[
        {
            name:"Nike Air Max N95",
            rate:258.48,
            available:true,
            thumb:"assets/products/1.jpg"
        },
        {
            name:"Reebok R23",
            rate:199.59,
            available:true,
            thumb:"assets/products/2.jpg"
        },
        {
            name:"Adidas A1243",
            rate:189.89,
            available:true,
            thumb:"assets/products/3.jpg"
        },
        {
            name:"Under Armour U-3X7",
            rate:499,
            available:true,
            thumb:"assets/products/4.jpg"
        },
        {
            name:"Nike Hero 98",
            rate:99.30,
            available:true,
            thumb:"assets/products/5.jpg"
        },
        {
            name:"Puma P1234",
            rate:89.99,
            available:true,
            thumb:"assets/products/6.jpg"
        },
        {
            name:"Adidas Gold G38",
            rate:299.50,
            available:true,
            thumb:"assets/products/7.jpg"
        },
        {
            name:"Converse C37N6 White",
            rate:79.66,
            available:true,
            thumb:"assets/products/1.jpg"
        }
    ];

  
})