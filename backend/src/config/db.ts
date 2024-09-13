import mongoose from 'mongoose';

export async function connectDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://satsuralala:aYlguu1213@cluster0.jtyhe.mongodb.net/ecommerce",
      {
        // No need for useNewUrlParser and useUnifiedTopology in Mongoose v6+
      }
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}
