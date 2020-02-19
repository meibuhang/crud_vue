const verifyEmail = require('../config/verifyemail');
module.exports = function(app) {
    const controller = require("../controller/user");
   
    // create
    app.post(
      "/api/client/register", [ verifyEmail.checkDuplicateEmail], 
      controller.register
    );
  
    // update
    app.put(
        "/api/client/edit/:id",
        controller.editUser
      );
    
    //get All
    app.get(
        "/api/client/all",
        controller.getUser
      );

    //get by id
    app.get(
        "/api/client/:id",
        controller.getIdUser
      );

    //delete
    app.delete('/api/client/delete/:id',controller.deleteUser);
}
    