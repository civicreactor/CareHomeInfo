import falcon
from endpoints.homes import HomesResource
from endpoints.results import ResultsResource



app = falcon.API()
homes = HomesResource()
results = ResultsResource()

app.add_route('/homes', homes)
app.add_route('/results', results)