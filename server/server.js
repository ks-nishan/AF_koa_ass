const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const Logger = require("koa-logger");
const serve = require("koa-static");
const mount = require("koa-mount");
const cors = require("koa-cors");
const HttpStatus = require("http-status");

const app = new Koa();

const PORT = process.env.PORT || 3000;

app.use(BodyParser());
app.use(Logger());
app.use(cors());

const router = new Router();

//users array
const users = [
  { id: 1, name: "Kamalan", role: "Trader", userName: "kamal", pw: "kamal123" },
  {
    id: 2,
    name: "leela",
    role: "Customer",
    userName: "leela",
    pw: "leela123",
  },
  { id: 3, name: "Priya", role: "Trader", userName: "nishan", pw: "nisha123" },
];

//get all users
router.get("/user", async (ctx, next) => {
  ctx.status = HttpStatus.OK;
  ctx.body = users;
  await next();
});

//add user
router.post("/user/add", userAdd);
async function userAdd(ctx) {
  var uin = ctx.request.body;
  users.push(uin);
  ctx.body = "User Added";
}

//all items
const items = [
  { id: 1, name: "Mobile", price: "50000.00" },
  { id: 2, name: "laptop", price: "25000.00" },
  { id: 3, name: "Charger", price: "12000.00" },
];
//get all items
router.get("/items", async (ctx, next) => {
  ctx.status = HttpStatus.OK;
  ctx.body = items;
  await next();
});

//add Item
router.post("/items/add", itemAdd);
router.put("items/update", itemUpdate);

async function itemAdd(ctx) {
  var uin = ctx.request.body;
  items.push(uin);
  ctx.body = "Item Added";
}

//update item

async function itemUpdate(ctx) {
  let uin = ctx.request.body;
  const index = items.findIndex((e) => e.id === uin.id);
  let message;
  if (index === -1) {
    items.push(uin);
    message = "Item Added";
  } else {
    items[index] = uin;
    message = "Item Updated";
  }
}

//all Inventory
const inventory = [
  { id: 1, name: "phone", qty: "10", MFD: "04-08-22", EXD: "05-08-23" },
  {
    id: 2,
    name: "laptop",
    qty: "10",
    status: "Out of Stock",
    MFD: "04-08-22",
    EXD: "05-08-23",
  },
  {
    id: 3,
    name: "Charger",
    qty: "10",
    status: "Available",
    MFD: "04-08-22",
    EXD: "05-08-23",
  },
];

//get all Inventory
router.get("/inventory", async (ctx, next) => {
  ctx.status = HttpStatus.OK;
  ctx.body = inventory;
  await next();
});

//all promotions
const promotion = [
  { id: 1, name: "1st promotion", code: "#46$32" },
  { id: 2, name: "2nd promotion", code: "#50*78" },
  { id: 3, name: "3rd promotion", code: "#*9855" },
];

//get promotions
router.get("/promotion", async (ctx, next) => {
  ctx.status = HttpStatus.OK;
  ctx.body = promotion;
  await next();
});

//add promotion
router.post("/promotion/add", promotionAdd);

async function promotionAdd(ctx) {
  var uin = ctx.request.body;
  promotion.push(uin);
  ctx.body = "promotion Added";
}

//all cartItems
const myCart = [
  {
    id: 1,
    name: "Phone",
    price: "200.00",
    qty: 4,
    subTotal: "800.00",
  },
  {
    id: 2,
    name: "Laptop",
    price: "300.00",
    qty: 4,
    subTotal: "1200.00",
  },
  {
    id: 3,
    name: "mp4",
    price: "100.00",
    qty: 4,
    subTotal: "400.00",
  },
];

//get myCart
router.get("/myCart", async (ctx, next) => {
  ctx.status = HttpStatus.OK;
  ctx.body = myCart;
  await next();
});

//add to cart
router.post("/myCart/add", cartAdd);
async function cartAdd(ctx) {
  var uin = ctx.request.body;
  myCart.push(uin);
  ctx.body = "Added to Cart";
}

//all wishlist
const wishList = [
  {
    id: 1,
    name: "Phone",
    price: "200.00",
  },
  {
    id: 2,
    name: "Laptop",
    price: "300.00",
  },
  {
    id: 3,
    name: "mp4",
    price: "100.00",
  },
];

//get wishList
router.get("/wishList", async (ctx, next) => {
  ctx.status = HttpStatus.OK;
  ctx.body = wishList;
  await next();
});

//add to wishlist
router.post("/wishList/add", wishListAdd);
async function wishListAdd(ctx) {
  var uin = ctx.request.body;
  wishList.push(uin);
  ctx.body = "Added to wishlist";
}

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, function () {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/",
    PORT,
    PORT
  );
});
