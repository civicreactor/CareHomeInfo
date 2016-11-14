#!/bin/bash
set -e
pip install -r /api/requirements.txt
cd /api/src && gunicorn -b 0.0.0.0:8000 carehome:app
