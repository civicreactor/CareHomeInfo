# -*- coding: utf-8 -*-

import falcon
import json

from neo4j.v1 import GraphDatabase, basic_auth
gdb = GraphDatabase.driver("bolt://192.168.1.109:7687/", auth=basic_auth("neo4j", "Wolf3105"))


class GradesResource(object):
    """ The Grading End point for the CivicReactor Care Home """

    def on_get(self, req, resp, houseRef=""):
        """Handles GET requests"""
        session = gdb.session()
        listr = []
        ref = houseRef

        if ref == "":
            ans = session.run("match ( g :grading ) return g.home as home, g.grade as grade, g.homeId as homeId,  g.insptDate as insptDate, '' as loc limit 10")
        else:
            ans = session.run("match ( g :grading )<-[r:INSPECTED]-(h :home) where g.homeId = {id} return \
            g.home as home, g.grade as grade, g.homeId as homeId,  g.insptDate as insptDate, h.city as loc ", {"id": houseRef})

        for record in ans:
            listr.append([record["home"], record["grade"], record["insptDate"], record["homeId"], record["loc"]])
        session.close()

        resp.body = json.dumps({"Success": "FALCON_GET_results", "grading": listr})
        resp.body = resp.body.encode('utf-8')
        resp.status = falcon.HTTP_200


    def on_post(self, req, resp, houseRef=""):
        """Handles POST requests"""
        try:
            raw_json = req.stream.read()
            data = json.loads(raw_json.decode("utf-8"))
            print("RAW json : {}".format(raw_json))
            print("data : {}".format(data))
        except Exception as ex:
            raise falcon.HTTPError(falcon.HTTP_400, 'Error', ex.message)

        try:
            result = json.loads(raw_json, encoding='utf-8')
            resp.body = 'Successfully inserted : {}'.format(result["ref"])
        except ValueError:
            raise falcon.HTTPError(falcon.HTTP_400,
                'Invalid JSON',
                'Could not decode the request body. The JSON was incorrect.')
