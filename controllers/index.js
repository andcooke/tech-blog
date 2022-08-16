const router = require('express').Router();

const { render } = require('express/lib/response');
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes)
router.use('/api', apiRoutes);

module.exports = router;
