from neo4j.v1 import GraphDatabase, basic_auth
driver = GraphDatabase.driver("bolt://192.168.1.109:7687/", auth=basic_auth("neo4j", "Wolf3105"))


def read_neo(qry="qry"):
    session = driver.session()
    ans = session.run(qry)
    print(ans)
    return ans
