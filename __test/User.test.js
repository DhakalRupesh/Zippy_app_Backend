const User = require("../model/user");
const mongoose = require("mongoose");

const DBTest = "mongodb://127.0.0.1:27017/testdbzippy";
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

describe("User schema test", () => {
  it("should be able to add new User", async () => {
    let user = await User.create({
      username: "username",
      password: "password"
    });
    expect(user.username).toMatch("username");
  });

  // it("Should be able to update User", async () => {
  //   let user = await User.create({ username: "ram" });
  //   user.username = "hari";
  //   let newUser = await user.save();
  //   expect(user.username).toMatch("hari");
  // });

  // it("Should be able to delete User", async () => {
  //   let user = await User.findOneAndDelete({ username: "aryan" });
  //   expect(user.username).toBe("aryan");
  // });
});