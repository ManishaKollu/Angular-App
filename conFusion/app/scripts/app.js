<!DOCTYPE html>
<html lang="en" ng-app="confusionApp">

<head>
     <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head
         content must come *after* these tags -->
    <title>Ristorante Con Fusion: Menu</title>
        <!-- Bootstrap -->
    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="../bower_components/bootstrap/dist/css/bootstrap-theme.min.css" rel="stylesheet">
    <link href="../bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="styles/bootstrap-social.css" rel="stylesheet">
    <link href="styles/mystyles.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>

    <div class="container">
        <div class="row row-content" ng-controller="dishDetailController as dishDetailCtrl">
            <div class="col-xs-12">
              <div class="media">
                <div class="media-left">
                  <a href="#">
                    <img class="media-object img-thumbnail" ng-src="{{dishDetailCtrl.dish.image}}" alt="{{dishDetailCtrl.dish.name}}">
                  </a>
                </div>
                <div class="media-body">
                  <h2 class="media-heading">{{dishDetailCtrl.dish.name}}
                    <span class="label label-danger">{{dishDetailCtrl.dish.label}}</span>
                    <span class="badge">{{dishDetailCtrl.dish.price | currency}}</span>
                  </h2>
                  {{dishDetailCtrl.dish.description}}
                </div>
              </div>
            </div>
            <div class="col-xs-9 col-xs-offset-1">

              <h4><strong>Customer Comments</strong> Sort by:   <input ng-model="sortCriteria"/> </h4>


              <blockquote ng-repeat="dishComment in dishDetailCtrl.dish.comments | orderBy : sortCriteria ">
                <p>{{dishComment.rating}} Stars</p>
                <p>{{dishComment.comment}}</p>
                  <footer>{{dishComment.author}}, {{dishComment.date | date}}</footer>
              </blockquote>
            </div>
        </div>

    </div>

    <script src="../bower_components/angular/angular.min.js"></script>
    <script>
        var app = angular.module('confusionApp',[]);
        app.controller('dishDetailController', function() {
            var dish={
                          name:'Uthapizza',
                          image: 'images/uthapizza.png',
                          category: 'mains',
                          label:'Hot',
                          price:'4.99',
                          description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                           comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                           ]
                    };
            this.dish = dish;
        });
    </script>

</body>

</html>
