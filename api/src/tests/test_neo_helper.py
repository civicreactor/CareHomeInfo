from neo4j.v1 import GraphDatabase, basic_auth
driver = GraphDatabase.driver("bolt://192.168.1.109:7687/", auth=basic_auth("neo4j", "Wolf3105"))

from ..falconHelpers import NeoAccess


def to_json():
    pass


def test_neo_read():
    """Test to verify """
    expt = "The Qry goes to here! = "
    act = NeoAccess.read_neo(' "match ( g :grading ) where g.homeId = {id} return g.home as home, g.grade as grade,  g.insptDate as insptDate",{"id": "1-197770593"}')
    assert act == expt


def test_neo_write():
    expt = "The Qry goes to here! = "
    act = NeoAccess.read_neo("")
    assert act == expt