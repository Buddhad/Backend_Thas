const express = require("express");
const router = express.Router();

const { Op } = require("sequelize");
const product = require("../models/product");

router.get("/", async (req, res) => {
  try {
    const query = req.query;
    
    //count, page and after comes from frontend
    // (how many objects is needed from db)|| db se kitne objects chahiye, by default 10
    const count = parseInt(query.count) || 10;

    //10 ke multiples me konsa page no chaiye(if one page contains 10 data then number of pages is dynamically rendered)
    const page = parseInt(query.page) || 1;

    //kitna skip karna hai(how much data to skip)
    const after = parseInt(query.after);

    let sql = {};
    if (after) {
      //if after is 5 then following code says bring me data of id 5 to 14
      sql = {
        where: {
          id: {
            [Op.gt]: after,
          },
        },
      };
    } else {
      sql = {
        //if page is 10 then get me data after id: 90. offset = 10 *(10-1) = 90
        offset: count * (page - 1),
      };
    }

    const products = await product.findAll({
      ...sql,
      attributes: ["id", "title", "price", "description", "image"],
      limit: count,
    });

    res.status(200).send({ count: products.length, items: products });
  } catch (error) {
    console.error("Error in routes/products.js", err);
    res.status(500).send({
      error: error,
      msg: "Error in routes/products.js",
    });
  }
});

module.exports = router;
