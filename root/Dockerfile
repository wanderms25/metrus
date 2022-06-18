FROM wanderms25/metrus-front

RUN npm install --global create-single-spa

ENV app /app

WORKDIR $app

VOLUME /app/node_modules

ADD . $app