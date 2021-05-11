#
# hf-experiments
# @author Loreto Parisi (loretoparisi at gmail dot com)
# Copyright (c) 2021 Loreto Parisi (loretoparisi at gmail dot com)
#

FROM python:3.7.4-slim-buster

LABEL maintainer Loreto Parisi loretoparisi@gmail.com

WORKDIR app

COPY . .

# system-wide dependencies
RUN apt-get update && apt-get install -y \
    software-properties-common \
    libsndfile1-dev \
    sqlite3 \
    tar \
    gzip \
    ca-certificates \
    npm \
    curl && \
    add-apt-repository ppa:jonathonf/ffmpeg-4 && \
    apt-get install -y ffmpeg

# install nodejs LTS
RUN npm install n -g \
    n lts

# install app
RUN npm install

CMD ["bash"]