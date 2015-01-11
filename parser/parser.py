from heapq import heappush, heappop, heapify
from pygeocoder import Geocoder
import json

myGeocoder = Geocoder(api_key="AIzaSyC0V4SJE-CLqvBKPWXu0b9iLwR_hmn9avo")


outputfile = open('parsed_full.txt','w')
partyfile = open('records.txt', 'r')

collisionDictionary = {}
totalsDictionary = {}
dangerIndex = {}
hourDictionary = {}
weatherDictionary = {}

def hourizer(time):
	if time >= 0 and time < 100:
		return 0
	elif time >= 100 and time < 200:
		return 1
	elif time >= 200 and time < 300:
		return 2
	elif time >= 300 and time < 400:
		return 3
	elif time >= 400 and time < 500:
		return 4
	elif time >= 500 and time < 600:
		return 5
	elif time >= 600 and time < 700:
		return 6
	elif time >= 700 and time < 800:
		return 7
	elif time >= 800 and time < 900:
		return 8
	elif time >= 900 and time < 1000:
		return 9
	elif time >= 1000 and time < 1100:
		return 10
	elif time >= 1100 and time < 1200:
		return 11
	elif time >= 1200 and time < 1300:
		return 12
	elif time >= 1300 and time < 1400:
		return 13
	elif time >= 1400 and time < 1500:
		return 14
	elif time >= 1500 and time < 1600:
		return 15
	elif time >= 1600 and time < 1700:
		return 16
	elif time >= 1700 and time < 1800:
		return 17
	elif time >= 1800 and time < 1900:
		return 18
	elif time >= 1900 and time < 2000:
		return 19
	elif time >= 2000 and time < 2100:
		return 20
	elif time >= 2100 and time < 2200:
		return 21
	elif time >= 2200 and time < 2300:
		return 22
	elif time >= 2300 and time < 2400:
		return 23

def parseWeather(weather):
	weatherDict = {'A': 'Clear', 'B': 'Cloudy', 'C': 'Raining', 'D': 'Snowing', 'E': 'Fog', 'F': 'Other', 'G': 'Wind', '-': 'N/A'}
	return weatherDict[weather]

def incidentScore(severity):
	severityDictionary = {'1': 10, '2':5, '3':3, '4':2, '0':1}
	return severityDictionary[severity]

with open('records.txt', 'r') as read:
	for line in read:
		splitPartyRecord = partyfile.readline().split(",")
		splitLine = line.split(",")
		streets = [splitLine[3].replace("\"", ""), splitLine[4].replace("\"", "")]
		streets.sort()
		streets = tuple(streets)

		date = splitLine[0]
		time = int(splitLine[1])
		hour = hourizer(time)
		weekday = splitLine[2]
		weather = parseWeather(splitLine[5])
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

		if hour in hourDictionary:
			hourDictionary[hour] += 1
		else:
			hourDictionary[hour] = 1

		if weather in weatherDictionary:
			weatherDictionary[weather] += 1
		else:
			weatherDictionary[weather] = 1

		if streets in dangerIndex:
			dangerIndex[streets] += incidentScore(severity)
		else:
			dangerIndex[streets] = incidentScore(severity)

for key in collisionDictionary.keys():
	if totalsDictionary[key] > 1:
		streets = key[0] + ' and ' + key[1]
		print(streets)
		coords = myGeocoder.geocode(streets + ", Berkeley CA").coordinates

		outputfile.write(json.dumps({'streets': streets, 'coordinates': coords, 'count': totalsDictionary[key], 'danger': dangerIndex[key]},))
		outputfile.write("\n")
