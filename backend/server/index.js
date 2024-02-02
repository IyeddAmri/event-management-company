const express = require('express');
const app = express();
const eventRoutes = require('../routes/eventroute');
const eventCategoryRoutes = require('../routes/eventCategoryRoutes');
const successEvent = require ('../routes/successEvent')
const routeEvent=require('../routes/eventDetails')
const cors = require('cors');




app.use(express.json());
app.use(cors());


app.use('/api', eventRoutes);
app.use('/api', eventCategoryRoutes);
app.use('/api',routeEvent)
app.use('/api',successEvent)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
