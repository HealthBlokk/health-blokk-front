FROM node:20.14.0 AS base

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm i --force
COPY . .

# Development stage (used by docker-compose for local development)
FROM base AS dev
ENV NODE_ENV=development
CMD ["npm", "run", "dev"]

# Build stage
FROM base AS builder
ENV NODE_ENV=production
RUN npm run build

# Production stage
FROM node:20.14.0-alpine AS production
WORKDIR /app

ENV NODE_ENV=production

# Copy only necessary files from the builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

# Install only production dependencies
RUN npm ci --only=production

# Next.js runs on port 3000 by default
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]