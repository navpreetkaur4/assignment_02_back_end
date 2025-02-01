import express from 'express';
import morgan from 'morgan';
import { setupSwagger } from './swagger'; // Import swagger setup

const app = express();

// Use Morgan for HTTP request logging
app.use(morgan('combined'));

// Use Swagger for API documentation
setupSwagger(app);

app.get('/health', (req, res) => {
  res.send('Server is healthy');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
