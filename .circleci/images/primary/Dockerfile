FROM circleci/node:10.8.0-browsers

RUN sudo apt-get update
RUN sudo apt-get install -y python python-dev python-pip python-virtualenv && \
  sudo rm -rf /var/lib/apt/lists/* && \
  sudo pip install dump-env
