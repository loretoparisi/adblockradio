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
    git \
    tar \
    gzip \
    ca-certificates \
    npm \
    curl && \
    python-dev && \
    portaudio19-dev && \
    add-apt-repository ppa:jonathonf/ffmpeg-4 && \
    apt-get install -y ffmpeg

# update npm, install nodejs version
RUN npm install npm@latest -g && \
    npm install n -g && \
    n 9.11.2

# python dependencies
RUN pip install -r requirements.txt

# install app
RUN npm install -g node-gyp && \
    npm install

CMD ["bash"]