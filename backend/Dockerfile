#/ start punkt/node ist eine anderes Img worauf wir jetzt bauen
FROM node:21
#/erstellt ein ordner im docker IMG 
WORKDIR /app
#/1. ist das aktuelle verzeichnis in Img der ordner /app ist
COPY . .
#/ RUN nur beim builden des IMG
RUN npm install


#/ beim jedem start des Containers und nicht vom IMG
CMD [ "npm", "start" ]
EXPOSE 10001