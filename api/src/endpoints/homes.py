#homes

import falcon

class HomesResource:
    def on_get(self, req, resp):
        resp.status = falcon.HTTP_200
        resp.body = ('\nhello This is where the HomesResource response is displayed.\n\n')