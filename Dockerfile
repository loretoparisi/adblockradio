#
# hf-experiments
# @author Loreto Parisi (loretoparisi at gmail dot com)
# Copyright (c) 2021 Loreto Parisi (loretoparisi at gmail dot com)
#

FROM python:2.7-slim-buster

LABEL maintainer Loreto Parisi loretoparisi@gmail.com

WORKDIR app

# system-wide dependencies
RUN apt-get update && apt-get install -y \
    software-properties-common \
    libsndfile1-dev \
    sqlite3 \
    git \
    tar \
    gzip \
    ca-certificates \
    npm \
    curl && \
    add-apt-repository ppa:jonathonf/ffmpeg-4 && \
    apt-get install -y ffmpeg

COPY . .

# update npm, install nodejs version
RUN npm install npm@latest -g && \
    npm install n -g && \
    n 9.11.2

# python dependencies
RUN pip install -r requirements.txt

# install app
RUN npm install -g node-gyp && \
    npm install

# audio related dependencies
RUN apt-get update && apt-get install -y \
    libportaudio2 \
    libasound-dev

CMD ["bash"]