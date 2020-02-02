const user = require("../model/user");
const mongoose = require("mongoose");

const DBTest = "mongodb://127.0.0.1:27017/testdbZippy";
beforeAll(async () => {
  await mongoose.connect(DBTest, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
});

describe("user schema test", () => {
  it("should be able to add new user", async () => {
    let user = await user.create({
      username: "aryan",
      password: "aryan"
    });
    expect(user.username).toMatch("aryan");
  });

  it("Should be able to update user", async () => {
    let user = await user.create({ username: "ram" });
    user.username = "hari";
    let newUser = await user.save();
    expect(user.username).toMatch("hari");
  });

  it("Should be able to delete user", async () => {
    let user = await user.findOneAndDelete({ username: "aryan" });
    expect(user.username).toBe("aryan ");
  });
});