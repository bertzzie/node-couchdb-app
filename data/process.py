import http.client
import json
import sys

filename = sys.argv[1]
dbname   = sys.argv[2]

PORT = 5984
HOST = "localhost"

with open(filename) as f:
    data = json.loads(f.read())
    questions = data["items"]

    # UUID HTTP Client
    uidc = http.client.HTTPConnection(HOST, PORT)
    uidc.request("GET", "/_uuids?count=" + str(len(questions)))

    # UUID Response
    uidcr = uidc.getresponse()
    # UUID Response Data
    uidcd = json.loads(uidcr.read().decode("utf-8"))
    uuids = uidcd["uuids"]

    for qi in range(0, len(questions)):
        BODY = json.dumps(questions[qi])
        conn = http.client.HTTPConnection(HOST, PORT)
        conn.request("PUT", "/" + dbname + "/" + uuids[qi], BODY)
