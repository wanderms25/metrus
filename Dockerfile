FROM wanderms25/metrus-front

ENV app /spa

RUN npm install --global create-single-spa

WORKDIR $app

VOLUME /app/node_modules

ADD . $app