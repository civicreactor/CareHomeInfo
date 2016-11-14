#python http client
import requests, json

r = requests.get('http://192.168.99.100:8000/results')

print ("r.text = "+r.text)
print ("r.json() = {}".format( r.json() ) )

yeti = r.json()
print (len(yeti))
print (yeti['grading'][0][1])

grades = json.loads(yeti['grading'][0][1])
print ("grades = {}".format(grades["Safe"]))
