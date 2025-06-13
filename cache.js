import Redis from "ioredis";
import axios from "axios";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/local", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((e) => console.error("Error in connecting to MongoDB", e));

const redis = new Redis({
  host: "localhost",
  port: 6379,
});

const tempSchema = new mongoose.Schema({
  temperature: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const avgTempSchema = new mongoose.Schema({
  avgtemperature: { type: Number, required: true },
  computedAt: { type: Date, default: Date.now },
});

const TempModel = mongoose.model("TemperatureRecord", tempSchema);
const AvgTempModel = mongoose.model("AvgTemperatureRecord", avgTempSchema);

async function getFakeWeatherData() {
    let temperaterValue=await axios.get("")
  return {
    temperature: temperaterValue,
  };
}

async function computeAverageFromRedis() {
  const temps = await redis.lrange("temperature", 0, -1);
  if (temps.length === 10) {
    const total = temps.reduce((sum, item) => sum + parseFloat(item), 0);
    const avg = total / temps.length;
    const avgRecord = new AvgTempModel({ avgtemperature: avg });
    await avgRecord.save();
    console.log("Saved 10-minute average to MongoDB:", avg);
  }
}

async function getWeatherAndStore() {
  const data = await getFakeWeatherData();

  const record = new TempModel({ temperature: data.temperature });
  await record.save();
  console.log("Saved current temperature to MongoDB:", data.temperature);

  await redis.rpush("temperature", data.temperature);
  await redis.ltrim("temperature", -10, -1); 

  await computeAverageFromRedis();
}

setInterval(getWeatherAndStore, 60 * 1000);
getWeatherAndStore(); 
