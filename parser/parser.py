from heapq import heappush, heappop, heapify
from pygeocoder import Geocoder
import json

myGeocoder = Geocoder(api_key="AIzaSyD_0NIYPHOfLPC0vkluVUiPnj0DOYF343c")


outputfile = open('parsed.txt','w')
partyfile = open('CollisionRecords.txt', 'r')

collisionDictionary = {}
totalsDictionary = {}
dangerIndex = {}

def incidentScore(severity):
	severityDictionary = {'1': 10, '2':5, '3':3, '4':2, '0':1}
	return severityDictionary[severity]

with open('CollisionRecords.txt', 'r') as read:
	for line in read:
		splitPartyRecord = partyfile.readline().split(",")
		splitLine = line.split(",")
		streets = [splitLine[3].replace("\"", ""), splitLine[4].replace("\"", "")]
		streets.sort()
		streets = tuple(streets)

		date = splitLine[0]
		time = splitLine[1]
		weekday = splitLine[2]
		weather = splitLine[5]
		severity = splitLine[6]
		killed = splitLine[10]
		injured = splitLine[11]

		if streets in collisionDictionary.keys():
			collisionDictionary[streets].append((date, time, weekday))
		else:
			collisionDictionary[streets] = []
			collisionDictionary[streets].append((date, time, weekday))

		if streets in totalsDictionary:
			totalsDictionary[streets] += 1
		else:
			totalsDictionary[streets] = 1

		if streets in dangerIndex:
			dangerIndex[streets] += incidentScore(severity)
		else:
			dangerIndex[streets] = incidentScore(severity)

for key in collisionDictionary.keys():
	if dangerIndex[key] >= 5:
		streets = key[0] + ' and ' + key[1]
		coords = myGeocoder.geocode(streets + ", Berkeley CA").coordinates

		outputfile.write(json.dumps({'streets': streets, 'coordinates': coords, 'count': totalsDictionary[key], 'danger': dangerIndex[key]}))
		outputfile.write("\n")