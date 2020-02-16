FROM node:latest
RUN mkdir commerce
RUN mkdir postgress-check
WORKDIR /commerce
EXPOSE 9005
