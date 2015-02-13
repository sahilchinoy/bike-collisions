from heapq import heappush, heappop, heapify
from pygeocoder import Geocoder
import json, operator

myGeocoder = Geocoder(api_key="AIzaSyC0V4SJE-CLqvBKPWXu0b9iLwR_hmn9avo")

outputfile = open('parsed_full.txt','w')
partyfile = open('records.txt','r')

totals = {}
index = {}
bikes = {}
maxIndex = 0
maxNormalized = 0

def incidentScore(severity):
	severityDictionary = {'1': 10, '2':5, '3':3, '4':2, '0':1}
	return severityDictionary[severity]

with open('records.txt', 'r') as read:
	for line in read:
		splitLine = line.split(",")
		streets = [splitLine[0].replace("\"", ""), splitLine[1].replace("\"", "")]
		streets.sort()
		streets = tuple(streets)

		severity = splitLine[2]

		bike = False

		if splitLine[3][0] == "Y":
			bike = True

		if streets in totals:
			totals[streets] += 1
		else:
			totals[streets] = 1

		if bike:
			if streets in bikes:
				bikes[streets] += 1
			else:
				bikes[streets] = 1

			if streets in index:
				index[streets] += incidentScore(severity)
			else:
				index[streets] = incidentScore(severity)

for key in bikes.keys():
	if index[key] > 10:
		streets = key[0] + ' and ' + key[1]
		coords = myGeocoder.geocode(streets + ", Berkeley CA").coordinates
		
		normalized = float(index[key])/float(totals[key])
		if normalized > maxNormalized:
			maxNormalized = normalized

		if index[key] > maxIndex:
			maxIndex = index[key]

		outputfile.write(json.dumps({'streets': streets, 'coordinates': coords, 'bikes': bikes[key], 'index': index[key], 'total': totals[key], 'normalized': normalized}))
		outputfile.write(",\n")

print("Maximum index  is " + str(maxIndex))
print("Maximum normalized score is " + str(maxNormalized))