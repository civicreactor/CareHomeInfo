# -*- coding: utf-8 -*-

import falcon
import json

from neo4j.v1 import GraphDatabase, basic_auth
gdb = GraphDatabase.driver("bolt://192.168.1.109:7687/", auth=basic_auth("neo4j", "Wolf3105"))


class HomesResource:
    """ The Homes End point for the CivicReactor Care Home """

    def on_get(self, req, resp, houseRef = ""):
        """Handles GET requests"""
        session = gdb.session()
        listr = []
        ref = houseRef

        if ref == "":
            ans = session.run("match ( h :home ) return h.home as home, h.homeRef as homeId,  h.address as address, h.postcode as postcode, h.city as loc limit 10")
        else:
            print(houseRef)
            ans = session.run("match (h :home) where h.homeRef = {id} return h.home as home, h.homeRef as homeId,  h.address as address, h.postcode as postcode, h.city as loc ", {"id": houseRef})

        for record in ans:
            listr.append([record["homeId"], record["home"], record["address"], record["postcode"], record["loc"]])
        session.close()

        resp.body = json.dumps({"Success": "FALCON_GET_Homes", "grading": listr})
        resp.body = resp.body.encode('utf-8')
        resp.status = falcon.HTTP_200
