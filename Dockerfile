FROM node:11.10.1

MAINTAINER Ederson de Lima<edersondelima@gmail.com>

RUN apt update
RUN apt install -y --no-install-recommends \
  vim locales

RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen
RUN locale-gen
RUN export LC_ALL="en_US.utf8"

RUN mkdir -p /var/www/triade
WORKDIR /var/www/triade
ADD . /var/www/triade

RUN yarn install
