# ---- Dependencies ----
FROM node:12 AS dependencies
ENV DOCKYARD_SRC=. DOCKYARD_SRVPROJ=/web-fe
RUN mkdir -p $DOCKYARD_SRVPROJ
COPY $DOCKYARD_SRC $DOCKYARD_SRVPROJ
WORKDIR $DOCKYARD_SRVPROJ
RUN npm install

# ---- Build ----
FROM dependencies AS build
RUN npm run build

# ---- Release ----
FROM busybox AS release
WORKDIR /var/www/web-fe/static
COPY --from=build /web-fe/build /var/www/web-fe/static
VOLUME /var/www/web-fe/static
