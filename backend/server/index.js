const express = require('express');
const app = express();
const eventRoutes = require('../routes/eventroute');
const eventCategoryRoutes = require('../routes/eventCategoryRoutes');

app.use(express.json());

app.use('/api', eventRoutes);
app.use('/api', eventCategoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
