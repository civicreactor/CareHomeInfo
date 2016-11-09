FROM python:3.5

ADD . /api
RUN chmod a+x /api/src/run.sh
EXPOSE 8000
CMD ["/api/src/run.sh"]
