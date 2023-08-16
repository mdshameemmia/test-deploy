import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must be provide name"],
  },
  mobile: {
    type: String,
    required: [true, "Must be provide mobile"],
  },
  
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
