import falcon
from endpoints.homes import HomesResource
from endpoints.grading import GradesResource



app = falcon.API()
homes = HomesResource()
grades = GradesResource()


app.add_route('/homes', homes)
app.add_route('/homes/{houseRef}', homes)

app.add_route('/gradings', grades)
app.add_route('/gradings/{houseRef}', grades)
