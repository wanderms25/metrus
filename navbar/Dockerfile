FROM wanderms25/metrus-front

ENV app /app/navbar/

WORKDIR $app

VOLUME /app/node_modules

ADD . $app

CMD ["/bin/bash","npm install --save-dev webpack"] 