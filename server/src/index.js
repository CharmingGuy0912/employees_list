const expressService = require('./services/express');
const routes = require('./routes');

const PORT = process.env.PORT || 5200;

const server = expressService(routes);

server.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
