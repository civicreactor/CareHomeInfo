import falcon

class HomeResource:
    def on_get(self, req, resp):
        resp.status = falcon.HTTP_200
        resp.body = ('\nhello This is where the HomeResource response is displayed.\n\n')

app = falcon.API()
homes = HomeResource()
app.add_route('/homes', homes)
