params = {
    'preview': '1',
    'order': 'thing',
    'page': '1',
    'page_size': '10',
    'levels': '2'
}

params = {
    'page': '1',
    'page_size': '10',
    'fields.name': 'Amongus'
}

import requests

payload = {
    "name": "Amongmongmongus"
}

response = requests.get("https://api.buttercms.com/v2/content/apps/330939/", headers = { "Authorization": "b41a7496d852160b8370eab0bcabc25635737bc8" })
