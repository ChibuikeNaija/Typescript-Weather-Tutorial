import express, { Request, Response } from 'express';
import axios from 'axios';

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/weather/:city', async (req: Request, res: Response) => {
  const { city } = req.params;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_OPENWEATHERMAP_API_KEY`
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
