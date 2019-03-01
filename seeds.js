var mongoose = require("mongoose");
var Product = require("./models/product");
var Comment   = require("./models/comment");
 
var data = [
    // {
    //     name: "iPhone 8", 
    //     image: "https://pixabay.com/get/ed34b10c29f51c22d2524518b7444795ea76e5d004b0144494f2c87ea2eeb1_340.jpg",
    //     description: "Free next-business-day delivery on any in‑stock iPhone ordered by 5:00 p.m.",
    //     author: {
    //         id: "5c786741f1518168e073777c",
    //         username: "Apple"
    //     }
    // },
    // {
    //     name: "Coffee", 
    //     image: "https://pixabay.com/get/e03db2062df11c22d2524518b7444795ea76e5d004b0144494f2c970a2e9b2_340.jpg",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    //     author: {
    //         id: "5c786741f1518168e073777c",
    //         username: "johnny"
    //     }
    // },
    // {
    //     name: "Sofa", 
    //     image: "https://pixabay.com/get/ed31b60b20f01c22d2524518b7444795ea76e5d004b0144494f2c870a3ebb2_340.jpg",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    //     author: {
    //         id: "5c786741f1518168e073777c",
    //         username: "johnny"
    //     }    
    // }
]
 
function seedDB(){
   //Remove all campgrounds
   Product.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed products!");
            data.forEach(function(seed){
                Product.create(seed, 
                function(err, data){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a product");
                        //create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    data.comments.push(comment);
                                    data.save();
                                    console.log("Created new comment");
                                }
                            });
                    }

            });
        });
    }); 
    //add a few comments
}
 
module.exports = seedDB;