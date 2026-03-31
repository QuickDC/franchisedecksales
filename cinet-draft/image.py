import base64
import requests
import os

url = "https://api.minimax.io/v1/image_generation"
api_key = "sk-cp-M9pofHhotSNc9f8wTcSX7UYCxfdQcKWPgdTsXp0SFbLWsXHsIn9Q3b_A354XVFIfCA2H5_wcjEZ8wKQWb7f1UOYdberVt2g7Kq_qo1RajD2Y3B6D3iwXjos"
headers = {"Authorization": f"Bearer {api_key}"}

payload = {
    "model": "image-01",
    "prompt": "men Dressing in white t shirt, full-body stand front view image :25, outdoor, Venice beach sign, full-body image, Los Angeles, Fashion photography of 90s, documentary, Film grain, photorealistic",
    "aspect_ratio": "16:9",
    "response_format": "base64",
}

response = requests.post(url, headers=headers, json=payload)
response.raise_for_status()

images = response.json()["data"]["image_base64"]

for i in range(len(images)):
    with open(f"output-{i}.jpeg", "wb") as f:
        f.write(base64.b64decode(images[i]))