FROM node:16

# set working directory
WORKDIR /nodejs

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
# COPY package-lock.json ./
RUN ls -la
RUN npm install --silent

#DB
ENV SQL_DATABASE postgres
ENV SQL_USER postgres
ENV SQL_PASSWORD postgres
ENV SQL_HOST botbinanceuni-data-db
ENV SQL_PORT 5432
ENV DIALECT postgres

# add app
COPY . ./

CMD ["npm", "start"]