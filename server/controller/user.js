const users = require("../models").User;

//register client
exports.register = (req, res) => {
  console.log("Processing func -> Register");
  users
    .create({
      name: req.body.name,
      email:req.body.email,
      address: req.body.address,
    })
    .then(data => {
        res.status(200).send(data);
    })  
    .catch(e => {
      res.status(500).json({
        message: "Error"
      });
    });
};


// Edit client
exports.editUser = async (req, res) => {
  const idUser = req.params.id
  try {
    let dataUser = await users.findOne({
      where: {
        id: idUser
      }
    });
    if (!dataUser) {
      res.status(404).json({
        msg: "Not Found"
      });
    } else {
      let input = {
        name: req.body.name,
        email:req.body.email,
        address: req.body.address,
      };

      users
        .update(input, {
          where: {
            id: idUser
          }
        })
        .then(updated => {
          res.status(200).json({
            msg: "updated",
            data: updated
          });
        })
        .catch(err => {
          res.status(401).json({
            msg: "Bad Request",
            Error: err
          });
        });
    }
  } catch (e) {
    next(e);
  }
};

//get client
exports.getUser = (req, res) => {
  users
    .findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      },
      order: [["createdAt", "DESC"]],
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
};


//get client by id
exports.getIdUser = (req, res) => {
    const idUser = req.params.id;
    // console.log(eventName);
    users
      .findOne({
        attributes: {
          exclude: ["createdAt", "updatedAt"]
        },
        where: {
          id: idUser
        }
      })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(500).json({
          message: err,
          success: false
        });
      });
  };


//delete client
exports.deleteUser = async (req, res,next) =>  {
	const idUser = req.params.id;
  try {
    let dataUser = await users.findOne({
      where: {
        id: idUser
      }
    });
    if (!dataUser) {
      res.status(404).json({
        msg: "Not Found"
      });
    } else {
      let input = {
        name: req.body.name,
        email:req.body.email,
        address: req.body.address,
      };
	users.destroy({ where: { id: idUser} }).then(data => {
		res.status(200).json({
			"message" : "success deleted"
		});
	}).catch(err => {
		res.status(500).send('Error -> ' + err);
  })
}
  }
  catch (e) {
    next(e);
  }
}