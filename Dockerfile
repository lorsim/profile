FROM python:3.7-alpine
MAINTAINER Lorsim

ENV PYTHONUNBUFFERED 1

# Install dependencies
COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

# Setup directory structure
RUN mkdir /social
WORKDIR /social
COPY ./social/ /social


RUN adduser -D user
USER user