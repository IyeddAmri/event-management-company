const express = require('express');
const app = express();
const eventRoutes = require('../routes/eventroute');
const eventCategoryRoutes = require('../routes/eventCategoryRoutes');
const routeEvent=require('../routes/eventDetails.js')
app.use(express.json());

app.use('/api', eventRoutes);
app.use('/api', eventCategoryRoutes);
app.use('/api',routeEvent)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
