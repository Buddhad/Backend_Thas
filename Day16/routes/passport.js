const router = require("express").Router();
//User Registration function

const {
    userAuth,
    userLogin,
    checkRole,
    userRegister,
    serializeUser } = require("../utils/Auth");


// Users registration route
router.post("/register-user" , async (req,res) => {
    await userRegister(req.body, "user", res);
});

// Admin registration route
router.post("/register-admin", async (req, res) => {
    await userRegister(req.body, "admin", res);
});

// Super admin registration route
router.post("/register-super-admin", async (req,res) => {
    await userRegister(req.body, "superadmin", res);
});

// Users login route
router.post("/login-user", async (req,res) => {
    await userLogin(req.body, "user", res);
});

// Admin login route
router.post("/login-admin", async (req,res) => {
    await userLogin(req.body, "admin", res);
});

// Super admin login route
router.post("/login-super-admin", async (req,res) => {
    await userLogin(req.body, "superadmin", res);
});

// Profile route
router.get("/profile", userAuth, async (req,res) => {
    return res.json(serializeUser(req.user));
});

// Users protected route
router.get(
    "/user-protected",
    userAuth,
    checkRole(["user"]),
    async (req,res) => {
        return res.json("Hello user");
    }
);

// Admin protected route
router.get(
    "/admin-protected",
    userAuth,
    checkRole(["admin"]),
    async (req,res) => {
        return res.json("Hello admin");
    }
);

// Super admin protected route
router.get(
    "/super-admin-protected",
    userAuth,
    checkRole(["superadmin"]),
    async (req,res) => {
        return res.json("Hello super admin!");
    }
);

// Super admin & admin protected route 
router.get(
    "/super-admin-and-admin-protected",
    userAuth,
    checkRole(["superadmin","admin"]),
    async (req,res) => {
        return res.json("Hello super admin and admin");
    }
);

module.exports = router;