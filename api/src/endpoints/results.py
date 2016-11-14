# -*- coding: utf-8 -*-

import falcon, json

from neo4j.v1 import GraphDatabase, basic_auth
driver = GraphDatabase.driver("bolt://192.168.1.109:7687/", auth=basic_auth("neo4j", "Wolf3105"))

class ResultsResource:

    def on_get(self, req, resp):
        """Handles GET requests"""
        session = driver.session()
        listr=[]
        ref=1

        if ref=="":
            ans = session.run( " match ( g :grading ) return g.home as home, g.grade as grade,  g.insptDate as insptDate", {"id":""} )
        else :
        	ans = session.run( " match ( g :grading ) where g.homeId = {id} return g.home as home, g.grade as grade,  g.insptDate as insptDate", {"id": "1-197770593"} )
        
        for record in ans:
            listr.append([record["home"], record["grade"], record["insptDate"]])
        session.close()

        resp.body = json.dumps({"Success": "FALCON_GET", "grading": listr })
        resp.body = resp.body.encode('utf-8')
        resp.status = falcon.HTTP_200


    def on_post(self, req, resp):
        """Handles POST requests"""
        try:
            raw_json = req.stream.read()
            data = json.loads(raw_json.decode("utf-8"))
            print ("RAW json : {}".format(raw_json))
        except Exception as ex:
            raise falcon.HTTPError(falcon.HTTP_400,
                'Error',
                ex.message)
 
        try:
            result = json.loads(raw_json, encoding='utf-8')
            resp.body = 'Successfully inserted : {}'.format(result["ref"])
        except ValueError:
            raise falcon.HTTPError(falcon.HTTP_400,
                'Invalid JSON',
                'Could not decode the request body. The '
                'JSON was incorrect.')